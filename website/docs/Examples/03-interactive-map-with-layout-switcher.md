---
id: 03-interactive-map-with-layout-switcher
---

import { BASE_LAYERS, KeyboardControl, LayerControl, Map, MapProvider, MouseControl, ZoomControl} from '../../../core/src';
import styles from '../../src/pages/index.module.css';

# Map layout switcher

Interactive map with controls and layout switcher.

<div>
  <section className={styles.sMap}>
		<MapProvider center={{lng:  14.4608576, lat: 50.0963478}}	mapLayers={[BASE_LAYERS.BASE_NEW, BASE_LAYERS.TURIST, BASE_LAYERS.OPHOTO, BASE_LAYERS.HISTORIC, BASE_LAYERS.TURIST_WINTER, BASE_LAYERS.TRAIL]} zoom={14}>
			<Map>
				<ZoomControl />
				<KeyboardControl />
				<MouseControl zoom pan wheel />
				<LayerControl pageSize={5} />
			</Map>
		</MapProvider>
	</section>
</div>

<br />

**Code**

```
<MapProvider center={{lng:  14.4608576, lat: 50.0963478}}	mapLayers={[BASE_LAYERS.BASE_NEW, BASE_LAYERS.TURIST, BASE_LAYERS.OPHOTO, BASE_LAYERS.HISTORIC, BASE_LAYERS.TURIST_WINTER]} zoom={14}>
	<Map>
		<ZoomControl />
		<KeyboardControl />
		<MouseControl zoom pan wheel />
		<LayerControl pageSize={5} />
	</Map>
</MapProvider>
```
