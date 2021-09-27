import { useContext } from 'react';

import { MapContext } from '../../MapProvider';

const useGeolocation = (searchValue, disableGeolocation) => {
	const { setMapCenter } = useContext(MapContext);

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!disableGeolocation) {
			new window.SMap.Geocoder(searchValue, geocodeResultsCallback);
		}
	};

	const geocodeResultsCallback = (geocoder) => {
		if (!geocoder.getResults()[0].results.length) {
			// eslint-disable-next-line no-console
			console.error('Place not found');

			return;
		}

		const results = geocoder.getResults()[0].results;
		setMapCenter(results[0].coords.x, results[0].coords.y);
	};

	return handleSubmit;
};

export default useGeolocation;
