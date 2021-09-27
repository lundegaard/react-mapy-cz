import { useContext, useEffect } from 'react';

import { MapContext } from '../MapProvider';

const KeyboardControl = ({ pan = true, zoom = true }) => {
	const { map } = useContext(MapContext);

	let mode = 0;

	mode |= pan && window.SMap.KB_PAN;
	mode |= zoom && window.SMap.KB_ZOOM;

	useEffect(() => {
		const keyboardControl = new window.SMap.Control.Keyboard(mode);
		map.addControl(keyboardControl);

		return () => {
			map.removeControl(keyboardControl);
		};
	}, [map, mode]);

	return null;
};

export default KeyboardControl;
