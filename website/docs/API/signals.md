---
id: signals
---

# Signals

Signals component enables users to listen to map events and attach callbacks. Since signals are listening to events from Map, it has to have a Map component as a parent.

## How to use it

```js
import { MapProvider, Map, MarkerLayer } from 'mapy-cz-react';

<MapProvider center={{ lat: 50.096406, lng: 14.463071 }} id="map-example">
	<Map>
		<Signals onMarkerClick={(target) => alert('Marker clicked')} />
	</Map>
</MapProvider>;
```

## Props

| Name           | Type | Default     | Description                                                   | Required |
| -------------- | ---- | ----------- | ------------------------------------------------------------- | :------: |
| onClusterClick | func | `undefined` | Callback for cluster click, passing event target as parameter |   :x:    |
| onMarkerClick  | func | `undefined` | Callback for marker click, passing event target as parameter  |   :x:    |

## Example

```jsx live
<MapProvider
	center={{ lat: 50.096406, lng: 14.463071 }}
	id="map-example"
	zoom={15}
>
	<Map>
		<Signals
			onClusterClick={(target) => alert('Cluster clicked')}
			onMarkerClick={(target) => alert('Marker clicked')}
		/>
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
