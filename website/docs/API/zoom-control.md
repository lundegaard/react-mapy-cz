---
id: zoom-control
---

# Zoom control

Control component adding functionality to parent [Map](/docs/API/map) component.

This component adds zoom buttons to right side of map, enabling user to zoom in or out by clicking on them.

## How to use it

```js
import { Map, ZoomControl } from 'react-mapy-cz';

<MapProvider center={{ lat: 50.096406, lng: 14.463071 }} id="map-example">
	<Map>
		<ZoomControl />
	</Map>
</MapProvider>
```

## Props

| Name         | Type   | Default     | Description                                                                                                              | Required |
| ------------ | ------ | ----------- | ------------------------------------------------------------------------------------------------------------------------ | :------: |
| labels       | object | `undefined` | Object with keys being zoom value and value being label for that value. Visible only when `showZoomMenu` prop is truthy. |   :x:    |
| showZoomMenu | bool   | `false`     | Flag showing zoom menu. Label for menu are defined in prop `labels`.                                                     |   :x:    |
| sliderHeight | number | `16`        | Sets slider element height in zoom menu                                                                                  |   :x:    |
| stepHeight   | number | `9`         | Height of single step in zoom menu                                                                                       |   :x:    |

## Example

```jsx live
<MapProvider
	center={{ lat: 50.096406, lng: 14.463071 }}
	id="homepage-map-static-example"
	zoom={15}
>
	<Map height="300px">
		<ZoomControl />
	</Map>
</MapProvider>
```
