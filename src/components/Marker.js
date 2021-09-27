import { useContext, useEffect } from 'react';

import { markerShape } from '../utils/shapes';

import { MarkerLayerContext } from './MarkerLayer';

const Marker = ({ coords, imgSrc, tooltip, ...props }) => {
	const markerLayer = useContext(MarkerLayerContext);

	useEffect(() => {
		const options = {
			...(imgSrc ? { url: imgSrc } : undefined),
			...(tooltip ? { title: tooltip } : undefined),
			...props,
		};

		const mapCoords = window.SMap.Coords.fromWGS84(
			coords.longitude,
			coords.latitude
		);
		const marker = new window.SMap.Marker(
			mapCoords,
			false,
			Object.keys(options).length > 0 ? options : undefined
		);

		markerLayer?.addMarker(marker);

		return () => {
			markerLayer?.removeMarker(marker, true);
		};
	}, [coords, imgSrc, markerLayer, props, tooltip]);

	return null;
};

Marker.propTypes = markerShape;

export default Marker;
