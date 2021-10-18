---
id: 07-interactive-map-with-clusters-and-signals
---

import { Clusterer, KeyboardControl,Map,
MapProvider, Marker, MarkerLayer, MouseControl, MultipleMarkers, Signals, ZoomControl } from '../../../core/src';
import styles from '../../src/pages/index.module.css';
import { generatePoints, onClusterClick, onMarkerClick } from '../../utils';

# Interactive map with clustered points and signals

Interactive map with controls, marker clustering and signals. You can listen to signals and add your own action to the marker or cluster click.

<div>
  <section className={styles.sMap}>
		<MapProvider center={{lng:  14.4608576, lat: 50.0963478}}>
			<Map>
				<ZoomControl />
				<KeyboardControl />
				<Signals onMarkerClick={onMarkerClick} onClusterClick={onClusterClick}/>
				<MouseControl zoom pan wheel />
				<MarkerLayer >
					<Clusterer />
    			<MultipleMarkers markersData={generatePoints(2000, true).map((point) => ({
    				coords: point.gps,
    				tooltip: point.title,
    				...point,
    			}))}
    			/>
    		</MarkerLayer>
    		</Map>
    	</MapProvider>
    </section>
</div>

<br />

**Code**

```
<MapProvider center={{lng:  14.4608576, lat: 50.0963478}}>
		<Map>
			<ZoomControl />
			<KeyboardControl />
			<Signals onMarkerClick={onMarkerClick} onClusterClick={onClusterClick}/>
			<MouseControl zoom pan wheel />
			<MarkerLayer >
				<Clusterer />
				<MultipleMarkers markersData={generatePoints(2000, true).map((point) => ({
					coords: point.gps,
					tooltip: point.title,
					...point,
				}))}
				/>
			</MarkerLayer>
			</Map>
		</MapProvider>
```
