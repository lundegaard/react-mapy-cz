import React, { createContext, useEffect } from 'react';
import { node } from 'prop-types';

import { useMap } from './MapContext';

export const RouteContext = createContext(null);

const RouteLayer = ({ children }) => {
	const { map, SMap } = useMap();
	const pathLayer = new SMap.Layer.Geometry();

	map.addLayer(pathLayer);
	pathLayer.enable();

	useEffect(() => () => {
		map.removeLayer(pathLayer);
	});

	return (
		<RouteContext.Provider value={pathLayer}>{children}</RouteContext.Provider>
	);
};

RouteLayer.propTypes = {
	children: node,
};

export default RouteLayer;
