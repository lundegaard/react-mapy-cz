import React, { createContext, useMemo } from 'react';
import { arrayOf, node, number, oneOf, shape, string } from 'prop-types';

import { BaseLayers } from '../utils/constants';
import { coordsShape } from '../utils/shapes';
import mapScriptLoader from '../hoc/mapScriptLoader';
import setMapCenter from '../utils/setMapCenter';
import { getContextHook } from '../utils/getContextHook';
import useLayerManagement from '../hooks/useLayerManagement';
import useMapInit from '../hooks/useMapInit';

const MapContext = createContext();

export const useMap = getContextHook(MapContext, 'MapProvider');

const MapProvider = ({
	center,
	children,
	id = 'mapy-cz-map',
	mapLayers = [BaseLayers.BASE_NEW],
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

MapProvider.propTypes = {
	center: shape(coordsShape).isRequired,
	children: node,
	id: string,
	mapLayers: arrayOf([oneOf(Object.keys(BaseLayers))]),
	maxZoom: number,
	minZoom: number,
	zoom: number,
};

export default mapScriptLoader(MapProvider);
