import { useContext, useMemo } from 'react';

import { MapContext } from './MapProvider';
import { MarkerLayerContext } from './MarkerLayer';

/**
 * Clusterer for markers.
 * Sets default clusterer for parent Marker layer.
 *
 * Usage - Add as a child of MarkerLayer component
 *
 * @returns null
 */
const Clusterer = () => {
	const { map } = useContext(MapContext);
	const clusterer = useMemo(() => new window.SMap.Marker.Clusterer(map), [map]);

	const markerLayer = useContext(MarkerLayerContext);
	markerLayer.setClusterer(clusterer);

	return null;
};

export default Clusterer;
