---
id: 09-interactive-map-pointer
---

import { KeyboardControl,Map,
MapProvider,MouseControl, PointerControl, PointerTypes, ZoomControl} from '../../../src';
import styles from '../../src/pages/index.module.css';

# Interactive map with pointer

Interactive map with controls and pointer. The pointer shows the direction of the specified location if it is out of the map view.

<div>
  <section className={styles.sMap}>
		<MapProvider center={{lng:  14.4347124, lat: 50.0891652}}  zoom={16}>
			<Map>
				<PointerControl coords={{longitude: 14.4608576, latitude: 50.0963478}} />
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
<MapProvider center={{lng:  14.4347124, lat: 50.0891652}} zoom={16}>
	<Map>
		<PointerControl coords={{longitude: 14.4608576, latitude: 50.0963478}} />
		<ZoomControl />
		<KeyboardControl />
		<MouseControl zoom pan wheel />
	</Map>
</MapProvider>
```
