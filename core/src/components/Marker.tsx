import { useEffect } from 'react';

import createMarker from '../utils/createMarker';

import { useMarkerLayer } from './MarkerLayer';
import { MarkerType } from './types';

const Marker = (props: MarkerType) => {
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

export default Marker;
