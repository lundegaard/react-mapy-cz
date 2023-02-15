import React, { FC, PropsWithChildren, createContext, useEffect } from 'react';

import { getContextHook } from '../utils/getContextHook';
import { LayerContext } from '../components/types';

import { useMap } from './MapContext';

const RouteContext = createContext<LayerContext | undefined>(undefined);

export const useRoute = getContextHook<LayerContext | undefined>(
	RouteContext,
	'RouteProvider'
);

const RouteLayer: FC<PropsWithChildren> = ({ children }) => {
	const { map, SMap } = useMap();
	const pathLayer = new SMap.Layer.Geometry();

	map?.addLayer(pathLayer);
	pathLayer.enable();

	useEffect(() => () => {
		map?.removeLayer(pathLayer);
	});

	return (
		<RouteContext.Provider value={pathLayer}>{children}</RouteContext.Provider>
	);
};

export default RouteLayer;
