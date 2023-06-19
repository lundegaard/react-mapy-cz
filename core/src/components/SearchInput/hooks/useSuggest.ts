import { RefObject, useEffect, useLayoutEffect, useRef } from 'react';

import { useMap } from '../../MapContext';
import { SuggestConfig } from '../../types';

const defaultConfig: SuggestConfig = {
	// CZ
	bounds: '48.5370786,12.0921668|51.0746358,18.8927040',
	enableCategories: 0,
	lang: 'cs,en',
};

const useSuggest = (
	inputRef: RefObject<HTMLInputElement>,
	disableSuggest: boolean | undefined,
	onSuggestItemSelect?: (data: { longitude: number; latitude: number }) => void,
	config = defaultConfig
) => {
	const { setMapCenter, SMap } = useMap();
	const onSuggestItemSelectRef = useRef(onSuggestItemSelect);

	useLayoutEffect(() => {
		onSuggestItemSelectRef.current = onSuggestItemSelect;
	});

	const getZoomByCategory = (category: string) => {
		const categoryType = category.split('_')[0]; // removing country or other origin from f.e. street_cz
		switch (categoryType) {
			case 'address':
			case 'pubtran': // Public squares, stations, etc.
				return 17;
			case 'street':
				return 16;
			case 'quarter':
				return 14;
			case 'municipality': // City
				return 12;
			case 'area':
			default:
				return 10;
		}
	};

	useEffect(() => {
		let suggest: SMap.Suggest;

		if (!disableSuggest && inputRef.current) {
			suggest = new SMap.Suggest(inputRef.current, {
				provider: new SMap.SuggestProvider({
					updateParams: (params: { count: number; phrase: string }) => ({
						...params,
						...config,
					}),
				}),
			});
			suggest.addListener(
				'suggest',
				({
					data,
				}: {
					data: { longitude: number; latitude: number; searchCategory: string };
				}) => {
					setMapCenter(
						data.longitude,
						data.latitude,
						getZoomByCategory(data.searchCategory)
					);

					if (onSuggestItemSelectRef.current) {
						onSuggestItemSelectRef.current(data);
					}
				}
			);
		}

		return () => {
			if (!disableSuggest) {
				suggest.removeListener('suggest');
			}
		};
	}, [config, disableSuggest, inputRef, setMapCenter, SMap]);
};

export default useSuggest;
