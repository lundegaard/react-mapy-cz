import { useEffect } from 'react';
import { bool, number, oneOfType, string } from 'prop-types';

import { useMap } from '../MapContext';

const PointerControl = ({ redPointer, coords: { longitude, latitude } }) => {
	const { map } = useMap();

	useEffect(() => {
		const pointerControl = new window.SMap.Control.Pointer({
			type: redPointer
				? window.SMap.Control.Pointer.TYPES.RED
				: window.SMap.Control.Pointer.TYPES.BLUE,
			snapHUDtoScreen: 20,
		});
		map.addControl(pointerControl);

		pointerControl.setCoords(window.SMap.Coords.fromWGS84(longitude, latitude));

		return () => {
			map.removeControl(pointerControl);
		};
	}, [latitude, longitude, map, redPointer]);

	return null;
};

PointerControl.propTypes = {
	latitude: oneOfType([number, string]),
	longitude: oneOfType([number, string]),
	redPointer: bool,
};

export default PointerControl;
