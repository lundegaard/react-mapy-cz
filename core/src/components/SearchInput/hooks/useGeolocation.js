import { useCallback } from 'react';

import { useMap } from '../../MapContext';

const useGeolocation = (searchValue, disableGeolocation) => {
	const { setMapCenter, SMap } = useMap();

	// Function uses all params that can change frequently, memoizing not desired
	const handleSubmit = (event) => {
		event.preventDefault();

		if (!disableGeolocation) {
			new SMap.Geocoder(searchValue, geocodeResultsCallback);
		}
	};

	const geocodeResultsCallback = useCallback(
		(geocoder) => {
			const results = geocoder.getResults()[0].results;

			if (!results.length) {
				// eslint-disable-next-line no-console
				console.error('Place not found');

				return;
			}

			const firstResultCoords = results[0].coords;
			setMapCenter(firstResultCoords.x, firstResultCoords.y);
		},
		[setMapCenter]
	);

	return handleSubmit;
};

export default useGeolocation;
