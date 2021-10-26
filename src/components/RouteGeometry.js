import { useContext } from 'react';
import { arrayOf, number, shape, string } from 'prop-types';
import { coordsShape } from '../utils/shapes';

import { RouteContext } from './Route';
import {
	RouteTypes,
	DEFAULT_ROUTE_COLOR,
	DEFAULT_ROUTE_WIDTH,
} from '../utils/constants';

const RouteGeometry = ({
	color = DEFAULT_ROUTE_COLOR,
	coords,
	id,
	routeType = RouteTypes.FAST,
	width = DEFAULT_ROUTE_WIDTH,
}) => {
	const route = useContext(RouteContext);
	const points = coords.map(({ lng, lat }) =>
		window.SMap.Coords.fromWGS84(lng, lat)
	);
	const geometryOptions = {
		color,
		width,
	};

	const getRoute = (results) => {
		const geometryPoints = results && results.getResults().geometry;
		const polyline = new window.SMap.Geometry(
			window.SMap.GEOMETRY_POLYLINE,
			id,
			geometryPoints,
			geometryOptions
		);
		route?.addGeometry(polyline);
	};

	new window.SMap.Route(points, getRoute, { criterion: routeType });

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
