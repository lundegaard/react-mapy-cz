import { FC } from 'react';

import {
	DEFAULT_ROUTE_COLOR,
	DEFAULT_ROUTE_WIDTH,
	ROUTE_TYPES,
} from '../utils/constants';

import { useRoute } from './RouteLayer';
import { useMap } from './MapContext';
import { Coords, RouteType } from './types';

export interface RouteGeometryProps {
	color: string;
	coords: Coords[];
	id: string;
	routeType: RouteType;
	width: number;
}

const RouteGeometry: FC<RouteGeometryProps> = ({
	color = DEFAULT_ROUTE_COLOR,
	coords,
	id,
	routeType = ROUTE_TYPES.FAST,
	width = DEFAULT_ROUTE_WIDTH,
}) => {
	const { SMap } = useMap();
	const route = useRoute();
	const points = coords.map(({ lng, lat }) => SMap.Coords.fromWGS84(lng, lat));
	const geometryOptions = {
		color,
		width,
	};

	const getRoute = (results: {
		getResults: () => { geometry: SMap.Coords };
	}) => {
		const geometryPoints = results && results.getResults().geometry;
		const polyline = new SMap.Geometry(
			SMap.GEOMETRY_POLYLINE,
			id,
			geometryPoints,
			geometryOptions
		);
		(route as SMap.Layer.Geometry)?.addGeometry(polyline);
	};

	new SMap.Route(points, getRoute, { criterion: routeType });

	return null;
};

export default RouteGeometry;
