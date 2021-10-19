---
id: 05-interactive-map-with-thousands-of-points
---

import { KeyboardControl,Map,
MapProvider, MarkerLayer, MouseControl, MultipleMarkers, ZoomControl} from '../../../core/src';
import styles from '../../src/pages/index.module.css';
import { generatePoints } from '../../utils';

# Rendering thousands of points (MultipleMarkers)

Interactive map with controls and 10 000 markers implemented with MultipleMarkers component.

<div>
  <section className={styles.sMap}>
		<MapProvider center={{lng:  14.4608576, lat: 50.0963478}}>
			<Map>
				<ZoomControl />
				<KeyboardControl />
				<MouseControl zoom pan wheel />
				<MarkerLayer>
					<MultipleMarkers markersData={generatePoints(10000, true).map((point) => ({
							coords: point.gps,
							tooltip: point.name,
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
		<MouseControl zoom pan wheel />
		<MarkerLayer>
			<MultipleMarkers markersData={generatePoints(10000, true).map((point) => ({
					coords: point.gps,
					tooltip: point.name,
					...point,
				}))}
			/>
		</MarkerLayer>
	</Map>
</MapProvider>
```
