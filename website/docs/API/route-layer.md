---
id: route-layer
---

# Route layer

Route layer is an invisible layer on top of maps, that can hold [Route](/docs/API/route).

## How to use it

```js
import { MapProvider, Map, RouteLayer } from 'mapy-cz-react';

<MapProvider center={{ lat: 50.096406, lng: 14.463071 }} id="map-example">
	<Map>
		<RouteLayer>...routes</RouteLayer>
	</Map>
</MapProvider>;
```

## Props

| Name     | Type | Default     | Description                                              | Required |
| -------- | ---- | ----------- | -------------------------------------------------------- | :------: |
| children | node | `undefined` | HTML elements or React components that need route layer. |   :x:    |

## Example

```jsx live
<MapProvider center={{ lng: 14.4608576, lat: 50.0963478 }} zoom={7}>
	<Map>
		<RouteLayer>
			<RouteGeometry
				coords={[
					{ lng: 14.434, lat: 50.084 },
					{ lng: 16.6, lat: 49.195 },
				]}
			/>
		</RouteLayer>

		<ZoomControl />
		<KeyboardControl />
		<MouseControl zoom pan wheel />
	</Map>
</MapProvider>
```
