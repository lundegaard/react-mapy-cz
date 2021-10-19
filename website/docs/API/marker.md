---
id: marker
---

# Marker

Marker is an active element on map, pointing to some location. Markers can be rendered only inside [MarkerLayer](/docs/API/marker-layer).

Markers can be customized by providing custom image URL or overriding styles. Working with events on top of markers can be achieved by using [Signals](/docs/API/signals) component.

When working with a lot of data (more than 100), consider using [MultipleMarkers](/docs/API/multiple-markers) component. When Marker renders, it creates new instance of Marker class in mapy.cz API and adds this class to parent marker layer. That causes map recalculation and update. A lot of individual markers added at once can therefore significantly reduce performance of whole map.

## How to use it

```js
import { MapProvider, Map, MarkerLayer, Marker } from 'react-mapy-cz';

<MapProvider center={{ lat: 50.096406, lng: 14.463071 }} id="map-example">
	<Map>
		<MarkerLayer>
			<Marker coords={{ latitude: 50.096406, longitude: 14.463071 }} />
		</MarkerLayer>
	</Map>
</MapProvider>;
```

## Props

| Name    | Type   | Default     | Description                                                                             |      Required      |
| ------- | ------ | ----------- | --------------------------------------------------------------------------------------- | :----------------: |
| coords  | object | `undefined` | Object with attributes `longitude` and `latitude` defining marker position.             | :heavy_check_mark: |
| imgSrc  | string | `undefined` | Custom marker image URL. By default native mapy.cz marker image is shown.               |        :x:         |
| tooltip | string | `undefined` | Marker name, serves as title and text shown in tooltip when hovering on top of element. |        :x:         |

## Example

```jsx live
<MapProvider
	center={{ lat: 50.096406, lng: 14.463071 }}
	id="map-example"
	zoom={15}
>
	<Map>
		<MarkerLayer>
			<Marker coords={{ latitude: 50.096406, longitude: 14.463071 }} />
		</MarkerLayer>
	</Map>
</MapProvider>
```
