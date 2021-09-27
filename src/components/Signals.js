import { useContext, useEffect } from 'react';
import { func } from 'prop-types';

import { MapContext } from './MapProvider';

/**
 * Event listener for actions happening on the map.
 * Enables developer to define onClick handler to react to map click events
 *
 * Usage - Add as a child of Map component
 *
 * @returns null
 */
const Signals = ({ onClusterClick, onMarkerClick }) => {
	const { map } = useContext(MapContext);

	useEffect(() => {
		// TODO: For open-source add additional signals
		if (onMarkerClick || onClusterClick) {
			map.getSignals().addListener(this, 'marker-click', (e) => {
				if (!e.target._clusterOptions && onMarkerClick) {
					onMarkerClick(e.target);
				}
				if (e.target._clusterOptions && onClusterClick) {
					onClusterClick(e.target);
				}
			});
		}

		return () => {
			if (onMarkerClick || onClusterClick) {
				map.getSignals().removeListener(this, 'marker-click', true);
			}
		};
	}, [map, onClusterClick, onMarkerClick]);

	return null;
};

Signals.propTypes = {
	onClusterClick: func,
	onMarkerClick: func,
};

export default Signals;
