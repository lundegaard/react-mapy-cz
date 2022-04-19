import React, { createContext, useEffect } from 'react';
import { node } from 'prop-types';

import { getContextHook } from '../utils/getContextHook';

import { useMap } from './MapContext';

const RouteContext = createContext();

export const useRoute = getContextHook(RouteContext, 'RouteProvider');

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
