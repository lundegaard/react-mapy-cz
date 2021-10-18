import { number } from 'prop-types';
import { useEffect } from 'react';

import { useMap } from '../MapContext';

const SyncControl = ({ bottomSpace = 0, resizeTimeout = 100 }) => {
	const { map, SMap } = useMap();

	useEffect(() => {
		const syncControl = new SMap.Control.Sync({
			bottomSpace,
			resizeTimeout,
		});
		map.addControl(syncControl);

		return () => {
			map.removeControl(syncControl);
		};
	}, [bottomSpace, map, resizeTimeout, SMap]);

	return null;
};

SyncControl.propTypes = {
	bottomSpace: number,
	resizeTimeout: number,
};

export default SyncControl;
