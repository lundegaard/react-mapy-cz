---
id: 10-interactive-map-with-route
---

import { KeyboardControl,Map,
MapProvider,MouseControl,RouteLayer, RouteGeometry, ZoomControl} from '../../../core/src';
import styles from '../../src/pages/index.module.css';

# Route

Interactive map with controls and route.

<section className={styles.sMap}>
	<MapProvider center={{lng:  14.4608576, lat: 50.0963478}} zoom={7}>
		<Map>
			<>
				<RouteLayer>
					<RouteGeometry coords={[{lng:  14.434, lat: 50.084}, {lng:  16.6, lat: 49.195}]} />
				</RouteLayer>
				<ZoomControl />
				<KeyboardControl />
				<MouseControl zoom pan wheel />
			</>
		</Map>
	</MapProvider>
</section>

<br />

**Code**

```
<MapProvider center={{lng:  14.4608576, lat: 50.0963478}} zoom={7}>
	<Map>
		<>
			<RouteLayer>
				<RouteGeometry coords={[{lng:  14.434, lat: 50.084}, {lng:  16.6, lat: 49.195}]}/>
			</RouteLayer>
			<ZoomControl />
			<KeyboardControl />
			<MouseControl zoom pan wheel />
		</>
	</Map>
</MapProvider>
```
