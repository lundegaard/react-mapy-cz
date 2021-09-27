import React, { createContext, useContext, useEffect } from 'react';
import { func, node } from 'prop-types';

import { MapContext } from './MapProvider';

export const MarkerLayerContext = createContext(null);

const MarkerLayer = ({ children, afterCreate }) => {
	const { map } = useContext(MapContext);
	const markerLayer = new window.SMap.Layer.Marker();

	map?.addLayer(markerLayer);
	markerLayer.enable();

	useEffect(() => {
		if (afterCreate) {
			afterCreate(markerLayer);
		}

		return () => {
			map.removeLayer(markerLayer);
		};
	});

	return (
		<MarkerLayerContext.Provider value={markerLayer}>
			{children}
		</MarkerLayerContext.Provider>
	);
};

MarkerLayer.propTypes = {
	afterCreate: func,
	children: node,
};

export default MarkerLayer;
