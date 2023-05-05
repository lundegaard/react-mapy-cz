import { FC, useEffect, useRef } from 'react';

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

export interface ClustererProps {
	maxDistance?: number;
}

const Clusterer: FC<ClustererProps> = ({ maxDistance = 100 }) => {
	const { map, SMap } = useMap();
	const markerLayer = useMarkerLayer();
	const clustererRef = useRef<SMap.Marker.Clusterer>();

	useEffect(() => {
		if (map) {
			clustererRef.current = new SMap.Marker.Clusterer(map, maxDistance);

			// NOTE: Removing clusterer not applicable in API
			markerLayer.setClusterer(clustererRef.current);
		}
	}, [map, markerLayer, maxDistance, SMap]);

	return null;
};

export default Clusterer;
