import { useContext, useEffect } from 'react';

import { MapContext } from '../MapProvider';

const MouseControl = ({ pan, wheel, zoom }) => {
	let mode = 0;

	mode |= pan && window.SMap.MOUSE_PAN;
	mode |= zoom && window.SMap.MOUSE_ZOOM;
	mode |= wheel && window.SMap.MOUSE_WHEEL;

	const { map } = useContext(MapContext);

	useEffect(() => {
		const mouseControl = new window.SMap.Control.Mouse(mode);

		map.addControl(mouseControl);

		return () => {
			map.removeControl(mouseControl);
		};
	}, [map, mode]);

	return null;
};

export default MouseControl;
