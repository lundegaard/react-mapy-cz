---
id: marker-layer
---

# Marker layer

Marker layer is an invisible layer on top of maps, that can hold active elements like [markers](/docs/API/marker) or [clusters](/docs/API/clusterer).

## How to use it

```js
import { MapProvider, Map, MarkerLayer } from 'mapy-cz-react';

<MapProvider center={{ lat: 50.096406, lng: 14.463071 }} id="map-example">
	<Map>
		<MarkerLayer>...markers</MarkerLayer>
	</Map>
</MapProvider>;
```

## Props

| Name     | Type | Default     | Description                                               | Required |
| -------- | ---- | ----------- | --------------------------------------------------------- | :------: |
| children | node | `undefined` | HTML elements or React components that need marker layer. |   :x:    |

## Example

```jsx live
<MapProvider
	center={{ lat: 50.096406, lng: 14.463071 }}
	id="map-example"
	zoom={15}
>
	<Map>
		<MarkerLayer>
			<Marker coords={{ latitude: 50.096406, longitude: 14.462 }} />
		</MarkerLayer>
	</Map>
</MapProvider>
```
