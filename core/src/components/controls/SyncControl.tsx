import { FC, useEffect } from 'react';

import { useMap } from '../MapContext';

export interface SyncControlProps {
	bottomSpace?: number;
	resizeTimeout?: number;
}

const SyncControl: FC<SyncControlProps> = ({
	bottomSpace = 0,
	resizeTimeout = 100,
}) => {
	const { map, SMap } = useMap();

	useEffect(() => {
		const syncControl = new SMap.Control.Sync({
			bottomSpace,
			resizeTimeout,
		});
		map?.addControl(syncControl);

		return () => {
			map?.removeControl(syncControl);
		};
	}, [bottomSpace, map, resizeTimeout, SMap]);

	return null;
};

export default SyncControl;
