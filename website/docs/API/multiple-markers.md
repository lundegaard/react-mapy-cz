---
id: multiple-markers
---

# Multiple markers

Multiple markers is a wrapper of [Marker](/docs/API/marker) element on map, encapsuling markers creation and adding them all to marker layer at one go. This results in higher performance of map changes, making all marker changes in one render, instead of rerendering map after each marker change.

Multiple markers works with one prop consuming array of marker config objects, so all config options for markers are valid here as well.

## How to use it

```js
import { MapProvider, Map, MarkerLayer, MultipleMarkers } from 'mapy-cz-react';

<MapProvider center={{ lat: 50.096406, lng: 14.463071 }} id="map-example">
	<Map>
		<MarkerLayer>
			<MultipleMarkers
				markersData={[
					{ coords: { latitude: 50.096406, longitude: 14.463071 } },
				]}
			/>
		</MarkerLayer>
	</Map>
</MapProvider>;
```

## Props

| Name        | Type  | Default     | Description                                                                                               |      Required      |
| ----------- | ----- | ----------- | --------------------------------------------------------------------------------------------------------- | :----------------: |
| markersData | array | `undefined` | Array of objects with shape same as for [Marker](/docs/API/marker), defining marker positions and config. | :heavy_check_mark: |

## Example

```jsx live
<MapProvider
	center={{ lat: 50.096406, lng: 14.463071 }}
	id="map-example"
	zoom={15}
>
	<Map>
		<MarkerLayer>
			<MultipleMarkers
				markersData={[
					{ coords: { latitude: 50.096406, longitude: 14.463071 } },
					{ coords: { latitude: 50.096406, longitude: 14.468 } },
				]}
			/>
		</MarkerLayer>
	</Map>
</MapProvider>
```
