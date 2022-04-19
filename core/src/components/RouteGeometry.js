import { arrayOf, number, shape, string } from 'prop-types';

import { coordsShape } from '../utils/shapes';
import {
	DEFAULT_ROUTE_COLOR,
	DEFAULT_ROUTE_WIDTH,
	ROUTE_TYPES,
} from '../utils/constants';

import { useRoute } from './RouteLayer';
import { useMap } from './MapContext';

const RouteGeometry = ({
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

	const getRoute = (results) => {
		const geometryPoints = results && results.getResults().geometry;
		const polyline = new SMap.Geometry(
			SMap.GEOMETRY_POLYLINE,
			id,
			geometryPoints,
			geometryOptions
		);
		route?.addGeometry(polyline);
	};

	new SMap.Route(points, getRoute, { criterion: routeType });

	return null;
};

RouteGeometry.propTypes = {
	color: string,
	coords: arrayOf(shape(coordsShape)),
	id: string,
	routeType: string,
	width: number,
};

export default RouteGeometry;
