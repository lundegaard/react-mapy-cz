---
id: clusterer
---

# Clusterer

Clusterer groups multiple markers close to each other on a map into a single cluster.
Clusters are created automatically based on config and map zoom level.

Clustering is a functionality added to individual marker layer. That meaning Clusterer component has to be a child of [MarkerLayer](/docs/API/marker-layer) component.

## How to use it

```js
import { MapProvider, Map, MarkerLayer, Clusterer } from 'react-mapy-cz';

<MapProvider center={{ lat: 50.096406, lng: 14.463071 }} id="map-example">
	<Map>
		<MarkerLayer>
			<Clusterer />

			...Some Marker or MultipleMarkers component
		</MarkerLayer>
	</Map>
</MapProvider>;
```

## Props

| Name   | Type   | Default  | Description   | Required |
| ------ | ------ | -------- | ------------- | :------: |
|maxDistance| number | `100` | Distance in which point is included into cluster  |   :x:    |

## Example

```jsx live
<MapProvider
	center={{ lat: 50.096406, lng: 14.463071 }}
	id="map-example"
	zoom={15}
>
	<Map>
		<MarkerLayer>
			<Clusterer />
			<Marker coords={{ latitude: 50.096406, longitude: 14.462 }} />
			<Marker coords={{ latitude: 50.096406, longitude: 14.463 }} />
			<Marker coords={{ latitude: 50.096406, longitude: 14.464 }} />
			<Marker coords={{ latitude: 50.096406, longitude: 14.468 }} />
		</MarkerLayer>
	</Map>
</MapProvider>
```
