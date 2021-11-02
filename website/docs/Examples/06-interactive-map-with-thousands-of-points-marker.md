---
id: 06-interactive-map-thousands-points-marker
---

import { Clusterer, KeyboardControl,Map,
MapProvider, Marker, MarkerLayer, MouseControl, MultipleMarkers, ZoomControl} from '../../../src';
import styles from '../../src/pages/index.module.css';
import { generatePoints } from '../../utils';

# Interactive map with thousands of points (Marker)

Interactive map with controls and thousands of markers implemented with Marker component.

<div>
  <section className={styles.sMap}>
		<MapProvider center={{lng:  14.4608576, lat: 50.0963478}} >
			<Map>
				<ZoomControl />
				<KeyboardControl />
				<MouseControl zoom pan wheel />
				{generatePoints(3000).map((point, index) => <MarkerLayer key={index} ><Marker coords={point} />	</MarkerLayer>)}
    	</Map>
    </MapProvider>

  </section>
</div>

<br />

**Code**

```
<MapProvider center={{lng:  14.4608576, lat: 50.0963478}} >
			<Map>
				<ZoomControl />
				<KeyboardControl />
				<MouseControl zoom pan wheel />
				{generatePoints(3000).map((point, index) => <MarkerLayer key={index} ><Marker coords={point} />	</MarkerLayer>)}
    	</Map>
    </MapProvider>
```

**Pitfalls**
<br />
Implementation with single Marker component using loop causes extremely slow map render. For best performance use MultipleMarkers.
