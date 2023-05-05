import { useEffect, useState } from 'react';

import { Coords } from '../components/types';

interface RouteInfoType {
	geometry: { x: number; y: number }[];
	altitude: [];
	itinerary: [];
}

const useRoute = ({ coords }: { coords: Coords[] }) => {
	const [routeInfo, setRouteInfo] = useState<RouteInfoType>();

	const getRouteInfo = (route: SMap.Route) => {
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

	const { altitude, geometry, itinerary } = routeInfo ?? {};

	return { altitude, geometry, itinerary };
};

export default useRoute;
