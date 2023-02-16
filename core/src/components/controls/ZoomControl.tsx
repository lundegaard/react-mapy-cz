import { FC, useEffect } from 'react';

import { useMap } from '../MapContext';

export interface ZoomControlProps {
	labels?: { [key: number]: string };
	showZoomMenu?: boolean;
	sliderHeight?: number;
	stepHeight?: number;
}

// https://api.mapy.cz/doc/SMap.Control.Zoom.html
const ZoomControl: FC<ZoomControlProps> = ({
	labels = {},
	showZoomMenu,
	sliderHeight = 16,
	stepHeight = 9,
}) => {
	const { map, SMap } = useMap();

	useEffect(() => {
		const zoomControl = new SMap.Control.Zoom(labels, {
			showZoomMenu,
			sliderHeight,
			step: stepHeight,
		});
		map?.addControl(zoomControl);

		return () => {
			map?.removeControl(zoomControl);
		};
	}, [labels, map, showZoomMenu, sliderHeight, SMap, stepHeight]);

	return null;
};

export default ZoomControl;
