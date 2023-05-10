import React, { FC, ReactElement, createContext, useMemo } from 'react';

import { BASE_LAYERS } from '../utils/constants';
import mapScriptLoader from '../hoc/mapScriptLoader';
import setMapCenter from '../utils/setMapCenter';
import { getContextHook } from '../utils/getContextHook';
import useLayerManagement from '../hooks/useLayerManagement';
import useMapInit from '../hooks/useMapInit';
import { ContextType, Coords } from '../components/types';

const MapContext = createContext<ContextType | undefined>(undefined);

export const useMap = getContextHook<ContextType | undefined>(
	MapContext,
	'MapProvider'
);

export interface MapProviderProps {
	center: Coords;
	children: ReactElement;
	id?: string;
	mapLayers?: string[] | number[];
	maxZoom?: number;
	minZoom?: number;
	zoom?: number;
}

const MapProvider: FC<MapProviderProps> = ({
	center,
	children,
	id = 'mapy-cz-map',
	mapLayers = [BASE_LAYERS.BASE_NEW],
	maxZoom = 18,
	minZoom = 1,
	zoom = 5,
}) => {
	const SMap = useMemo(() => window.SMap, []);
	const map = useMapInit(center, id, mapLayers, maxZoom, minZoom, SMap, zoom);
	const layerManagementUtils = useLayerManagement();

	return (
		<MapContext.Provider
			value={{
				...layerManagementUtils,
				id,
				map,
				mapLayers,
				setMapCenter: setMapCenter(map, SMap),
				SMap,
			}}
		>
			{children}
		</MapContext.Provider>
	);
};

export default mapScriptLoader(MapProvider);
