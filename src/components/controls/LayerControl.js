import { useContext, useEffect } from 'react';
import { number } from 'prop-types';

import { MapContext } from '../MapProvider';

const LayerControl = ({ width = 65, pageSize }) => {
	const { map, mapLayers } = useContext(MapContext);

	useEffect(() => {
		const layerSwitch = new window.SMap.Control.Layer({
			items: pageSize,
			page: pageSize,
			width,
		});

		mapLayers.forEach((layer) => {
			layerSwitch.addDefaultLayer(layer);
		});

		map.addControl(layerSwitch, { left: '0px', top: '0px' });

		return () => {
			map.removeControl(layerSwitch);
		};
	}, [map, mapLayers, pageSize, width]);

	return null;
};

LayerControl.propTypes = {
	pageSize: number,
	width: number,
};

export default LayerControl;
