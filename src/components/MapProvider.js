import React, { createContext, useEffect, useState } from 'react';
import { arrayOf, node, number, oneOf, shape, string } from 'prop-types';

import { BaseLayers } from '../utils/constants';
import { coordsShape } from '../utils/shapes';
import mapScriptLoader from '../hoc/mapScriptLoader';
import setMapCenter from '../utils/setMapCenter';
// TODO: Make sure it is used in resulting library
import '../css/map-provider.css';

export const MapContext = createContext(null);

const MapProvider = ({
	center = {},
	children,
	id = 'react-mapy-cz',
	mapLayers = [BaseLayers.BASE_NEW],
	maxZoom = 18,
	minZoom = 1,
	zoom = 5,
}) => {
	const [map, setMap] = useState(null);

	useEffect(() => {
		if (!map) {
			const centerCoords = window.SMap.Coords.fromWGS84(center.lng, center.lat);
			const sMap = new window.SMap(window.JAK.gel(id), centerCoords, zoom);
			sMap.setZoomRange(minZoom, maxZoom);

			const [firstLayer, ...otherLayers] = mapLayers;
			sMap.addDefaultLayer(firstLayer).enable();
			otherLayers.forEach((layer) => {
				sMap.addDefaultLayer(layer);
			});

			setMap(sMap);
		}
	}, [center, id, map, mapLayers, maxZoom, minZoom, zoom]);

	return (
		<MapContext.Provider
			value={{ id, map, mapLayers, setMapCenter: setMapCenter(map) }}
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
