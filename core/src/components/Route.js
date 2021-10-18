import React, { createContext, useEffect } from 'react';
import { node } from 'prop-types';

import { useMap } from './MapContext';

export const RouteContext = createContext(null);

const Route = ({ children }) => {
	const { map } = useMap();
	const pathLayer = new window.SMap.Layer.Geometry();

	map.addLayer(pathLayer);
	pathLayer.enable();

	useEffect(() => () => {
		map.removeLayer(pathLayer);
	});

	return (
		<RouteContext.Provider value={pathLayer}>{children}</RouteContext.Provider>
	);
};

Route.propTypes = {
	children: node,
};

export default Route;
