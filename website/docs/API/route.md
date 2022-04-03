---
id: route
---

# Route

Route in an active element on map, pointing to some location. Routes can be rendered only inside [RouteLayer](/docs/API/route-layer).

Route is defined by component RouteGeometry, since rendered result is a geometry respecting given points and constraints of the map.

## How to use it

```js
import { Map, MouseControl } from 'react-mapy-cz';

<MapProvider center={{ lat: 50.096406, lng: 14.463071 }} id="map-example">
	<Map>
		<RouteLayer>
			<RouteGeometry
				coords={[
					{ lng: 14.434, lat: 50.084 },
					{ lng: 16.6, lat: 49.195 },
				]}
			/>
		</RouteLayer>
	</Map>
</MapProvider>;
```

## Props

color = DEFAULT_ROUTE_COLOR,
coords,
id,
routeType = ROUTE_TYPES.FAST,
width = DEFAULT_ROUTE_WIDTH,

| Name      | Type   | Default            | Description                                                                                |      Required      |
| --------- | ------ | ------------------ | ------------------------------------------------------------------------------------------ | :----------------: |
| color     | string | `f00`              | Color of route, accepted is any color in hex                                               |        :x:         |
| coords    | array  | `undefined`        | Array of objects with attributes `longitude` and `latitude` defining route point position. | :heavy_check_mark: |
| routeType | string | `ROUTE_TYPES.FAST` | Any value from `ROUTE_TYPES`                                                               |        :x:         |
| width     | number | `3`                | Width of route geometry                                                                    |        :x:         |
| id        | string | `undefined`        | Id of route                                                                                |        :x:         |

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
