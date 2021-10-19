---
id: 08-interactive-map-with-search
---

import {KeyboardControl, LayerControl, Map, MapProvider, MouseControl, SearchInput, ZoomControl} from '../../../core/src';
import styles from '../../src/pages/index.module.css';
import {handleSuggestItemSelect} from "../../utils";

# Map with search

Interactive map with controls and search input. The search input shows suggestions and on suggestion click centers the map on selected point.

<div>
  <section className={styles.sMap}>
    <MapProvider center={{lng:  14.4608576, lat: 50.0963478}}	>
			<SearchInput placeholder="Search" disableGeolocation />
    	<Map>
				<ZoomControl />
				<KeyboardControl />
				<MouseControl zoom pan wheel />
    	</Map>
    </MapProvider>
	</section>
</div>

<br/>

**Code**

```
<MapProvider center={{lng:  14.4608576, lat: 50.0963478}}	>
	<SearchInput placeholder="Search" disableGeolocation />
	<Map>
		<ZoomControl />
		<KeyboardControl />
		<MouseControl zoom pan wheel />
	</Map>
</MapProvider>
```
