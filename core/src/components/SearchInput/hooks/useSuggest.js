import { useEffect, useLayoutEffect, useRef } from 'react';

import { useMap } from '../../MapContext';

const defaultConfig = {
	// CZ
	bounds: '48.5370786,12.0921668|51.0746358,18.8927040',
	enableCategories: 0,
	lang: 'cs,en',
};

const useSuggest = (
	inputRef,
	disableSuggest,
	onSuggestItemSelect,
	config = defaultConfig
) => {
	const { setMapCenter, SMap } = useMap();
	const onSuggestItemSelectRef = useRef(onSuggestItemSelect);

	useLayoutEffect(() => {
		onSuggestItemSelectRef.current = onSuggestItemSelect;
	});

	useEffect(() => {
		let suggest;

		if (!disableSuggest) {
			suggest = new SMap.Suggest(inputRef.current, {
				provider: new SMap.SuggestProvider({
					updateParams: (params) => ({ ...params, ...config }),
				}),
			});
			suggest.addListener('suggest', ({ data }) => {
				setMapCenter(data.longitude, data.latitude);

				if (onSuggestItemSelectRef.current) {
					onSuggestItemSelectRef.current(data);
				}
			});
		}

		return () => {
			if (!disableSuggest) {
				suggest.removeListener('suggest');
			}
		};
	}, [config, disableSuggest, inputRef, setMapCenter, SMap]);
};

export default useSuggest;
