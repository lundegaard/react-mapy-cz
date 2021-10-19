---
id: 06-interactive-map-with-thousands-of-points-marker
---

import { Clusterer, KeyboardControl,Map,
MapProvider, Marker, MarkerLayer, MouseControl, MultipleMarkers, ZoomControl} from '../../../core/src';
import styles from '../../src/pages/index.module.css';
import { generatePoints } from '../../utils';

# Rendering thousands of points with Marker - do not do this

Interactive map with controls and thousands of markers implemented with Marker component. This example serves as a common pitfall when working wit a large quantity of points.
In this example we are rendering only 2 000 points and already you can see the poor performance.

Implementation with single Marker component using loop causes extremely slow map render. For best performance use [MultipleMarkers](/docs/API/multiple-markers), or take a look at previous example [Rendering thousands of points](/docs/Examples/05-interactive-map-with-thousands-of-points)

<div>
  <section className={styles.sMap}>
		<MapProvider center={{lng:  14.4608576, lat: 50.0963478}} >
			<Map>
				<ZoomControl />
				<KeyboardControl />
				<MouseControl zoom pan wheel />
				<MarkerLayer>
				{generatePoints(2000).map((point, index) => <Marker key={index} coords={point} />)}
				</MarkerLayer>
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
		{generatePoints(2000).map((point, index) => <MarkerLayer key={index} ><Marker coords={point} />	</MarkerLayer>)}
	</Map>
</MapProvider>
```

**Pitfalls**
<br />
Implementation with single Marker component using loop causes extremely slow map render. For best performance use MultipleMarkers.
