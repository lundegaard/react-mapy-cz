import { useEffect } from 'react';
import { bool } from 'prop-types';

import { coordsShape } from '../utils/shapes';

import { useMap } from './MapContext';

const Pointer = ({ redPointer, coords: { lng, lat }, showDistance }) => {
	const { map } = useMap();

	useEffect(() => {
		const pointer = new window.SMap.Control.Pointer({
			type: redPointer
				? window.SMap.Control.Pointer.TYPES.RED
				: window.SMap.Control.Pointer.TYPES.BLUE,
			snapHUDtoScreen: 1,
			showDistance,
		});
		map.addControl(pointer);

		pointer.setCoords(window.SMap.Coords.fromWGS84(lng, lat));

		return () => {
			map.removeControl(pointer);
		};
	}, [lat, lng, map, redPointer, showDistance]);

	return null;
};

Pointer.propTypes = {
	coords: coordsShape.isRequired,
	redPointer: bool,
	showDistance: bool,
};

export default Pointer;
