import { useEffect } from 'react';
import { bool } from 'prop-types';

import { coordsShape } from '../utils/shapes';

import { useMap } from './MapContext';

const Pointer = ({ redPointer, coords: { lng, lat }, showDistance }) => {
	const { map, SMap } = useMap();

	useEffect(() => {
		const pointer = new SMap.Control.Pointer({
			type: redPointer
				? SMap.Control.Pointer.TYPES.RED
				: SMap.Control.Pointer.TYPES.BLUE,
			snapHUDtoScreen: 1,
			showDistance,
		});
		map.addControl(pointer);

		pointer.setCoords(SMap.Coords.fromWGS84(lng, lat));

		return () => {
			map.removeControl(pointer);
		};
	}, [lat, lng, map, redPointer, showDistance, SMap]);

	return null;
};

Pointer.propTypes = {
	coords: coordsShape.isRequired,
	redPointer: bool,
	showDistance: bool,
};

export default Pointer;
