import { useEffect, useRef } from 'react';

import { useMap } from './MapContext';
import { useMarkerLayer } from './MarkerLayer';

/**
 * Clusterer for markers.
 * Sets default clusterer for parent Marker layer.
 *
 * Usage - Add as a child of MarkerLayer component
 *
 * @returns null
 */
const Clusterer = () => {
	const { map, SMap } = useMap();
	const markerLayer = useMarkerLayer();
	const clustererRef = useRef();

	useEffect(() => {
		clustererRef.current = new SMap.Marker.Clusterer(map);

		// NOTE: Removing clusterer not applicable in API
		markerLayer.setClusterer(clustererRef.current);
	}, [map, markerLayer, SMap]);

	return null;
};

export default Clusterer;
