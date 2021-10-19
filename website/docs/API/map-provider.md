---
id: map-provider
---

# Map provider

Wrapper component enabling the use of Mapy.cz API.<br/>
Has to be present in order to render map. This component upon rendering ensures that mapy.cz API script is injected into page header and waits for its load. Loaded script then creates new instance of Map object, that is injected to [Map](/docs/API/map) component which renders element with provided `id`.
**Children of this wrapper are not rendered sooner than script is loaded.** Therefore it is preferable to use this wrapper deeper in your component tree, close to [Map](/docs/API/map) component.

Component comes in handy when you need to work with map instance, like programmatically setting map center or working with all rendered markers, just to name a few.

## How to use it

```js
import { MapProvider } from 'react-mapy-cz';

<MapProvider center={{ lat: 50, lng: 14 }} id="map-id-example" zoom={5}>
	...other components
</MapProvider>;
```

## Props

| Name      | Type   | Default         | Description                                                                        |      Required      |
| --------- | ------ | --------------- | ---------------------------------------------------------------------------------- | :----------------: |
| center    | object | `undefined`     | Object with properties `lat` and `lng` of type `number` defining map center        | :heavy_check_mark: |
| id        | string | `"mapy-cz-map"` | Id of map element to which map will be rendered. Setting your value is recommended |        :x:         |
| zoom      | number | `5`             | Initial map zoom. Actual zoom is realative to `minZoom` and `maxZoom` props.       |        :x:         |
| minZoom   | number | `1`             | Minimal value of zoom. Sets lower boundary for zoom in map.                        |        :x:         |
| maxZoom   | number | `18`            | Maximal value of zoom. Sets upper boundary for zoom in map.                        |        :x:         |
| mapLayers | array  | `5`             | String array of used map layers. Accepted values are in constant `BaseLayers`.     |        :x:         |
