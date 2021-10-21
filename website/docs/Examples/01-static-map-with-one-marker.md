---
id: 01-static-map-with-one-marker
---

import {MapProvider, Map, Marker, MarkerLayer} from '../../../src';
import styles from '../../src/pages/index.module.css';

# Static map with one marker

Static map with defined center and one marker.

<div>
  <section className={styles.sMap}>
		<MapProvider center={{lng:  14.4608576, lat: 50.0963478}} zoom={16} >
			<Map>
				<MarkerLayer>
					<Marker coords={{longitude: 14.4608576, latitude: 50.0963478}} />
				</MarkerLayer>
			</Map>
		</MapProvider>
	</section>
</div>

<br/>

**Code**

```
		<MapProvider center={{lng:  14.4608576, lat: 50.0963478}} zoom={16} >
			<Map>
				<MarkerLayer>
					<Marker coords={{longitude: 14.4608576, latitude: 50.0963478}} />
				</MarkerLayer>
			</Map>
		</MapProvider>

```
