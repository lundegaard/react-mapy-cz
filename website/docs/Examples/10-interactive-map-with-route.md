---
id: 10-interactive-map-with-route
---

import { KeyboardControl,Map,
MapProvider,MouseControl,Route, RouteGeometry, ZoomControl} from '../../../src';
import styles from '../../src/pages/index.module.css';

# Interactive map with route

Interactive map with controls and route.

<div>
  <section className={styles.sMap}>
		<MapProvider center={{lng:  14.4608576, lat: 50.0963478}} zoom={7}>
			<Map>
				<Route>
					<RouteGeometry coords={[{lng:  14.434, lat: 50.084}, {lng:  16.6, lat: 49.195}]} />
				</Route>
				<ZoomControl />
				<KeyboardControl />
				<MouseControl zoom pan wheel />
			</Map>
		</MapProvider>
	</section>
</div>

<br />

**Code**

```
<MapProvider center={{lng:  14.4608576, lat: 50.0963478}} zoom={7}>
	<Map>
		<Route>
			<RouteGeometry coords={[{lng:  14.434, lat: 50.084}, {lng:  16.6, lat: 49.195}]}/>
		</Route>
		<ZoomControl />
		<KeyboardControl />
		<MouseControl zoom pan wheel />
	</Map>
</MapProvider>
```
