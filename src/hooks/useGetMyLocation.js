import { useContext, useEffect, useState } from 'react';

import { MapContext } from '../components/MapProvider';

const useGetMyLocation = (onLocationFound, onError = () => {}) => {
	const [loading, setLoading] = useState(false);
	const [geolocationEnabled, setGeolocationEnabled] = useState(true);

	const { setMapCenter } = useContext(MapContext);

	useEffect(() => {
		if (navigator?.permissions) {
			navigator.permissions
				.query({ name: 'geolocation' })
				.then(({ status }) => {
					if (status === 'denied') {
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
