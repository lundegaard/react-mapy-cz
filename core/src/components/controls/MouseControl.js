import { bool, number, shape } from 'prop-types';
import { useEffect } from 'react';

import { useMap } from '../MapContext';

// https://api.mapy.cz/doc/SMap.Control.Mouse.html
const MouseControl = ({ pan = true, wheel = true, zoom = true, options }) => {
	const { map, SMap } = useMap();

	let mode = 0;

	mode |= pan && SMap.MOUSE_PAN;
	mode |= zoom && SMap.MOUSE_ZOOM;
	mode |= wheel && SMap.MOUSE_WHEEL;

	useEffect(() => {
		const mouseControl = new SMap.Control.Mouse(mode, options);

		map.addControl(mouseControl);

		return () => {
			map.removeControl(mouseControl);
		};
	}, [map, mode, SMap, options]);

	return null;
};

MouseControl.propTypes = {
	options: shape({
		driftSlowdown: number,
		driftTreshold: number,
		idleDelay: number,
		maxDriftSpeed: number,
		minDriftSpeed: number,
		scrollDelay: number,
	}),
	pan: bool,
	wheel: bool,
	zoom: bool,
};

export default MouseControl;
