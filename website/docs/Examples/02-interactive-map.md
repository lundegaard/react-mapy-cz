---
id: 02-interactive-map
---

import { KeyboardControl,Map,
MapProvider,MouseControl, ZoomControl} from '../../../core/src';
import styles from '../../src/pages/index.module.css';

# Interactive map

Interactive map with zoom, keyboard and mouse control. Move the map by dragging or with arrow keys. Zoom with +/- keys or buttons, double click or the scroll wheel.

<div>
  <section className={styles.sMap}>
		<MapProvider center={{lng:  14.4608576, lat: 50.0963478}}>
			<Map>
				<>
					<ZoomControl />
					<KeyboardControl />
					<MouseControl zoom pan wheel />
				</>
			</Map>
		</MapProvider>
	</section>
</div>

<br />

**Code**

```
<MapProvider center={{lng:  14.4608576, lat: 50.0963478}}>
	<Map>
		<>
			<ZoomControl />
			<KeyboardControl />
			<MouseControl zoom pan wheel />
		</>
	</Map>
</MapProvider>
```

```

```
