import { FC, useEffect } from 'react';

import { useMap } from '../MapContext';

export interface MouseControlProps {
	pan?: boolean;
	wheel?: boolean;
	zoom?: boolean;
	options?: {
		driftSlowdown: number;
		driftTreshold: number;
		idleDelay: number;
		maxDriftSpeed: number;
		minDriftSpeed: number;
		scrollDelay: number;
	};
}

// https://api.mapy.cz/doc/SMap.Control.Mouse.html
const MouseControl: FC<MouseControlProps> = ({
	pan = true,
	wheel = true,
	zoom = true,
	options,
}) => {
	const { map, SMap } = useMap();

	let mode = 0;

	mode |= pan && SMap.MOUSE_PAN;
	mode |= zoom && SMap.MOUSE_ZOOM;
	mode |= wheel && SMap.MOUSE_WHEEL;

	useEffect(() => {
		const mouseControl = new SMap.Control.Mouse(mode, options);

		map?.addControl(mouseControl);

		return () => {
			map?.removeControl(mouseControl);
		};
	}, [map, mode, SMap, options]);

	return null;
};

export default MouseControl;
