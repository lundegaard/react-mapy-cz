---
id: pointer
---

# Pointer

Pointer component adding functionality to parent [Map](/docs/API/map) component.

This component adds pointer which dynamically changes its location based on current map position relative to pointer target. This component does not require any layer and can be placed directly as a child of [Map](/docs/API/map).

## How to use it

```js
import { Map, MapProvider, Pointer } from 'mapy-cz-react';

<MapProvider center={{ lat: 50.096406, lng: 14.463071 }} id="map-example">
	<Map>
		<Pointer coords={{ lng: 14.4608576, lat: 50.0963478 }} />
	</Map>
	;
</MapProvider>;
```

## Props

| Name         | Type   | Default     | Description                                                                 |      Required      |
| ------------ | ------ | ----------- | --------------------------------------------------------------------------- | :----------------: |
| coords       | object | `undefined` | Object with attributes `longitude` and `latitude` defining marker position. | :heavy_check_mark: |
| redPointer   | bool   | `false`     | Blue pointer as default, red pointer with value `true`                      |        :x:         |
| showDistance | bool   | `false`     | Adds label with distance to pointer target                                  |        :x:         |

## Example

```jsx live
<MapProvider center={{ lng: 14.4347124, lat: 50.0891652 }} zoom={16}>
	<Map>
		<Pointer coords={{ lng: 14.4608576, lat: 50.0963478 }} />
		<MouseControl />
	</Map>
</MapProvider>
```
