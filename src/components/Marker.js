import { useContext, useEffect } from 'react';
import { markerShape } from '../utils/shapes';
import { MarkerLayerContext } from './MarkerLayer';
import createMarker from '../utils/createMarker';
import '../css/marker.css';

const Marker = (props) => {
	const markerLayer = useContext(MarkerLayerContext);

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
