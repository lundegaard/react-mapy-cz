---
id: layer-control
---

# Layer control

Control component adding functionality to parent [Map](/docs/API/map) component.

This component adds possibility to change used map layer, based on set default layers in [MapProvider](/docs/API/map-provider)s prop `mapLayers`.

By using this control, map will render Layer changer in top left corner in map container, with selection of all provided map layers from mentioned `mapLayers` prop.

## How to use it

```js
import { Map, LayerControl } from 'react-mapy-cz';

<Map>
	<LayerControl width={65} pageSize={3} />
</Map>;
```

## Props

| Name     | Type   | Default | Description                                                            | Required |
| -------- | ------ | ------- | ---------------------------------------------------------------------- | :------: |
| width    | number | `65`    | Width of each item in layer control. Not necessary for 90% of usecases |   :x:    |
| pageSize | number | `3`     | Enable keyboard zoom control - + - keys                                |   :x:    |

## Example

```jsx live
<MapProvider
	center={{ lat: 50.096406, lng: 14.463071 }}
	id="homepage-map-static-example"
	zoom={15}
	mapLayers={[
		BaseLayers.BASE_NEW,
		BaseLayers.TURIST_NEW,
		BaseLayers.GEOGRAPHY,
		BaseLayers.HISTORIC,
		BaseLayers.TURIST_WINTER,
	]}
>
	<Map height="300px">
		<LayerControl width={65} pageSize={3} />
	</Map>
</MapProvider>
```
