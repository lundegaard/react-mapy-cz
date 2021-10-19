import { useEffect } from 'react';

import { markerShape } from '../utils/shapes';
import createMarker from '../utils/createMarker';

import { useMarkerLayer } from './MarkerLayer';

const Marker = (props) => {
	const markerLayer = useMarkerLayer();

	useEffect(() => {
		const marker = createMarker(props);

		markerLayer?.addMarker(marker);

		return () => {
			markerLayer?.removeMarker(marker, true);
		};
	}, [markerLayer, props]);

	return null;
};

Marker.propTypes = markerShape;

export default Marker;
