import { useEffect, useRef } from 'react';
import { number } from 'prop-types';

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
const Clusterer = ({ maxDistance = 100 }) => {
	const { map, SMap } = useMap();
	const markerLayer = useMarkerLayer();
	const clustererRef = useRef();

	useEffect(() => {
		clustererRef.current = new SMap.Marker.Clusterer(map, maxDistance);

		// NOTE: Removing clusterer not applicable in API
		markerLayer.setClusterer(clustererRef.current);
	}, [map, markerLayer, maxDistance, SMap]);

	return null;
};

Clusterer.propTypes = {
	maxDistance: number,
};

export default Clusterer;
