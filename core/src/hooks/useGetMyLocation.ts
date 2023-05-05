import { useEffect, useState } from 'react';

import { useMap } from '../components/MapContext';

const useGetMyLocation = (
	onLocationFound: (coords: { longitude: number; latitude: number }) => void,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	onError = (error: GeolocationPositionError) => null
) => {
	const [loading, setLoading] = useState(false);
	const [geolocationEnabled, setGeolocationEnabled] = useState(true);

	const { setMapCenter } = useMap();

	useEffect(() => {
		// Geolocation not available
		if (!navigator?.geolocation) {
			setGeolocationEnabled(false);
		}
		// Geolocation disabled
		if (navigator?.permissions) {
			navigator.permissions.query({ name: 'geolocation' }).then(({ state }) => {
				if (state === 'denied') {
					setGeolocationEnabled(false);
				}
			});
		}
	}, []);

	const handleClick = () => {
		if (navigator) {
			setLoading(true);

			navigator.geolocation.getCurrentPosition(
				({ coords }) => {
					setLoading(false);
					setMapCenter(coords.longitude, coords.latitude);
					onLocationFound(coords);
				},
				(error) => {
					setLoading(false);
					onError(error);
				}
			);
		} else {
			// eslint-disable-next-line no-console
			console.error('navigator instance not found');
		}
	};

	return { geolocationEnabled, handleClick, loading };
};

export default useGetMyLocation;
