import React, {
	FC,
	PropsWithChildren,
	createContext,
	useEffect,
	useRef,
} from 'react';

import { getContextHook } from '../utils/getContextHook';
import { SMAP_LAYER_TYPES } from '../utils/constants';

import { useMap } from './MapContext';
import { LayerType, MarkerContext } from './types';

const MarkerLayerContext = createContext<MarkerContext | undefined>(undefined);

export const useMarkerLayer = getContextHook<MarkerContext | undefined>(
	MarkerLayerContext,
	'MarkerLayer'
);

const MarkerLayer: FC<PropsWithChildren> = ({ children }) => {
	const { map, SMap, registerActiveLayer } = useMap();
	const markerLayerRef = useRef<MarkerContext | undefined>();

	useEffect(() => {
		const markerLayer = new SMap.Layer.Marker();
		markerLayerRef.current = markerLayer;

		map?.addLayer(markerLayer);
		markerLayer.enable();
		registerActiveLayer(markerLayer, SMAP_LAYER_TYPES.MARKER as LayerType);

		return () => {
			if (markerLayerRef.current) {
				map?.removeLayer(markerLayerRef.current);
			}
		};
	}, [map, SMap, registerActiveLayer]);

	return (
		<MarkerLayerContext.Provider value={markerLayerRef.current}>
			{markerLayerRef.current && children}
		</MarkerLayerContext.Provider>
	);
};

export default MarkerLayer;
