---
id: 03-interactive-map-with-layout-switcher
---

import { BaseLayers, KeyboardControl, LayerControl, Map, MapProvider, MouseControl, ZoomControl} from '../../../core/src';
import styles from '../../src/pages/index.module.css';

# Map layout switcher

Interactive map with controls and layout switcher.

<div>
  <section className={styles.sMap}>
		<MapProvider center={{lng:  14.4608576, lat: 50.0963478}}	mapLayers={[BaseLayers.BASE_NEW, BaseLayers.TURIST, BaseLayers.OPHOTO, BaseLayers.HISTORIC, BaseLayers.TURIST_WINTER, BaseLayers.TRAIL]} zoom={14}>
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
<MapProvider center={{lng:  14.4608576, lat: 50.0963478}}	mapLayers={[BaseLayers.BASE_NEW, BaseLayers.TURIST, BaseLayers.OPHOTO, BaseLayers.HISTORIC, BaseLayers.TURIST_WINTER]} zoom={14}>
	<Map>
		<ZoomControl />
		<KeyboardControl />
		<MouseControl zoom pan wheel />
		<LayerControl pageSize={5} />
	</Map>
</MapProvider>
```
