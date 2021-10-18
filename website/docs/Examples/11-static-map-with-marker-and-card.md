---
id: 11-static-map-with-marker-and-card
---

import {MapProvider, Map, Marker, MarkerLayer} from '../../../core/src';
import styles from '../../src/pages/index.module.css';

# Static map with marker and card

Static map with marker and card. Header and body text can be set individually. It is possible to use html elements inside strings, e.g. `"<strong>Title</strong>"`.

To see the card, click on marker.

<section className={styles.sMap}>
	<MapProvider center={{lng:  14.4608576, lat: 50.0963478}} zoom={16} >
		<Map>
			<MarkerLayer>
				<Marker coords={{longitude: 14.4608576, latitude: 50.0963478}} enableCard cardHeaderText="<strong>Title</strong>" cardBodyText="Card body." />
			</MarkerLayer>
		</Map>
	</MapProvider>
</section>

<br/>

**Code**

```
<MapProvider center={{lng:  14.4608576, lat: 50.0963478}} zoom={16} >
	<Map>
		<MarkerLayer>
			<Marker coords={{longitude: 14.4608576, latitude: 50.0963478}} enableCard cardHeaderText="<strong>Title</strong>" cardBodyText="Card body." />
		</MarkerLayer>
	</Map>
</MapProvider>
```
