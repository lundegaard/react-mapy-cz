import React, { createContext, useEffect, useRef } from 'react';
import { node } from 'prop-types';

import { getContextHook } from '../utils/getContextHook';
import { SMAP_LAYER_TYPES } from '../utils/constants';

import { useMap } from './MapContext';

const MarkerLayerContext = createContext();

export const useMarkerLayer = getContextHook(MarkerLayerContext, 'MarkerLayer');

const MarkerLayer = ({ children }) => {
	const { map, SMap, registerActiveLayer } = useMap();
	const markerLayerRef = useRef();

	useEffect(() => {
		const markerLayer = new SMap.Layer.Marker();
		markerLayerRef.current = markerLayer;

		map?.addLayer(markerLayer);
		markerLayer.enable();
		registerActiveLayer(markerLayer, SMAP_LAYER_TYPES.MARKER);

		return () => {
			map.removeLayer(markerLayerRef.current);
		};
	}, [map, SMap, registerActiveLayer]);

	return (
		<MarkerLayerContext.Provider value={markerLayerRef.current}>
			{markerLayerRef.current && children}
		</MarkerLayerContext.Provider>
	);
};

MarkerLayer.propTypes = {
	children: node,
};

export default MarkerLayer;
