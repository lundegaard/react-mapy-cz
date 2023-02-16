import { FC, useEffect } from 'react';

import { useMap } from './MapContext';
import { Coords } from './types';

export interface PointerProps {
	coords: Coords;
	redPointer?: boolean;
	showDistance?: boolean;
}

const Pointer: FC<PointerProps> = ({
	redPointer,
	coords: { lng, lat },
	showDistance,
}) => {
	const { map, SMap } = useMap();

	useEffect(() => {
		const pointer = new SMap.Control.Pointer({
			type: redPointer
				? SMap.Control.Pointer.TYPES.RED
				: SMap.Control.Pointer.TYPES.BLUE,
			snapHUDtoScreen: 1,
			showDistance,
		});
		map?.addControl(pointer as unknown as SMap.Control);

		pointer.setCoords(SMap.Coords.fromWGS84(lng, lat));

		return () => {
			map?.removeControl(pointer as unknown as SMap.Control);
		};
	}, [lat, lng, map, redPointer, showDistance, SMap]);

	return null;
};

export default Pointer;
