import { useContext, useEffect } from 'react';

import { MapContext } from '../../MapProvider';

const useSuggest = (inputRef, disableSuggest, onSuggestItemSelect) => {
	const { setMapCenter } = useContext(MapContext);

	useEffect(() => {
		let suggest;

		if (!disableSuggest) {
			suggest = new window.SMap.Suggest(inputRef.current, {
				provider: new window.SMap.SuggestProvider({
					updateParams: (params) => {
						// TODO: Take data in props
						// Only search in CR
						params.bounds = '48.5370786,12.0921668|51.0746358,18.8927040';
						params.enableCategories = 0;
						params.lang = 'cs,en';
					},
				}),
			});
			suggest.addListener('suggest', ({ data }) => {
				setMapCenter(data.longitude, data.latitude);

				if (onSuggestItemSelect) {
					onSuggestItemSelect(data);
				}
			});
		}

		return () => {
			if (!disableSuggest) {
				suggest.removeListener('suggest');
			}
		};
	}, [disableSuggest, inputRef, onSuggestItemSelect, setMapCenter]);
};

export default useSuggest;
