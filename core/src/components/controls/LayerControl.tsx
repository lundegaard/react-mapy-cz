import { FC, useEffect } from 'react';

import { useMap } from '../MapContext';

export interface LayerControlProps {
	pageSize?: number;
	width?: number;
}

const LayerControl: FC<LayerControlProps> = ({ width = 65, pageSize = 3 }) => {
	const { map, mapLayers, SMap } = useMap();

	useEffect(() => {
		const layerSwitch = new SMap.Control.Layer({
			items: pageSize,
			page: pageSize,
			width,
		});

		mapLayers.forEach((layer) => {
			layerSwitch.addDefaultLayer(layer);
		});

		map?.addControl(layerSwitch, { left: '0px', top: '0px' });

		return () => {
			map?.removeControl(layerSwitch);
		};
	}, [map, mapLayers, pageSize, width, SMap]);

	return null;
};

export default LayerControl;
