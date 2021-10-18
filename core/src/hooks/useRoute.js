import { useEffect, useState } from 'react';

const useRoute = ({ coords }) => {
	const [routeInfo, setRouteInfo] = useState({});

	const getRouteInfo = (route) => {
		const results = route.getResults();
		setRouteInfo(results);
	};

	useEffect(() => {
		if (coords) {
			const points = coords.map(({ lng, lat }) =>
				window.SMap.Coords.fromWGS84(lng, lat)
			);

			new window.SMap.Route(points, getRouteInfo);
		}
	}, [coords]);

	const { altitude, geometry, itinerary } = routeInfo;

	return { altitude, geometry, itinerary };
};

export default useRoute;
