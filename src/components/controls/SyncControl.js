import { number } from 'prop-types';
import { useContext, useEffect } from 'react';

import { MapContext } from '../MapProvider';

const SyncControl = ({ bottomSpace = 0, resizeTimeout = 100 }) => {
	const { map } = useContext(MapContext);

	useEffect(() => {
		const syncControl = new window.SMap.Control.Sync({
			bottomSpace,
			resizeTimeout,
		});
		map.addControl(syncControl);

		return () => {
			map.removeControl(syncControl);
		};
	}, [bottomSpace, map, resizeTimeout]);

	return null;
};

SyncControl.propTypes = {
	bottomSpace: number,
	resizeTimeout: number,
};

export default SyncControl;
