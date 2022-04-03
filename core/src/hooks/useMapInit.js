import { useEffect, useState } from 'react';

const useMapInit = (center, id, mapLayers, maxZoom, minZoom, SMap, zoom) => {
	const [map, setMap] = useState();

	useEffect(() => {
		if (!map && SMap) {
			const centerCoords = SMap.Coords.fromWGS84(center.lng, center.lat);
			const mapInstance = new SMap(window.JAK.gel(id), centerCoords, zoom);
			mapInstance.setZoomRange(minZoom, maxZoom);

			const [firstLayer, ...otherLayers] = mapLayers;
			mapInstance.addDefaultLayer(firstLayer).enable();
			otherLayers.forEach((layer) => {
				mapInstance.addDefaultLayer(layer);
			});

			setMap(mapInstance);
		}
	}, [center, id, map, mapLayers, maxZoom, minZoom, SMap, zoom]);

	return map;
};

export default useMapInit;
