import {
	BaseSyntheticEvent,
	FC,
	MouseEventHandler,
	useEffect,
	useLayoutEffect,
	useRef,
} from 'react';

import { useMap } from './MapContext';

/**
 * Event listener for actions happening on the map.
 * Enables developer to define onClick handler to react to map click events
 *
 * Usage - Add as a child of Map component
 *
 * @returns null
 */

interface SignalsProps {
	onClusterClick?: MouseEventHandler<HTMLElement>;
	onMarkerClick?: MouseEventHandler<HTMLElement>;
}

const Signals: FC<SignalsProps> = ({ onClusterClick, onMarkerClick }) => {
	const { map } = useMap();
	// https://epicreact.dev/the-latest-ref-pattern-in-react/
	const onClusterClickRef = useRef(onClusterClick);
	const onMarkerClickRef = useRef(onMarkerClick);
	const markerClickListenerIdRef = useRef<void>();

	useLayoutEffect(() => {
		onClusterClickRef.current = onClusterClick;
		onMarkerClickRef.current = onMarkerClick;
	});

	useEffect(() => {
		// TODO: Add additional signals
		if (onMarkerClickRef.current || onClusterClickRef.current) {
			markerClickListenerIdRef.current = map
				?.getSignals()
				.addListener(this, 'marker-click', (e: BaseSyntheticEvent) => {
					if (!e.target._clusterOptions && onMarkerClickRef.current) {
						onMarkerClickRef.current(e.target);
					}
					if (e.target._clusterOptions && onClusterClickRef.current) {
						onClusterClickRef.current(e.target);
					}
				});
		}

		return () => {
			if (markerClickListenerIdRef.current) {
				map?.getSignals().removeListener(markerClickListenerIdRef.current);
			}
		};
	}, [map]);

	return null;
};

export default Signals;
