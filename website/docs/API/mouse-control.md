---
id: mouse-control
---

# Mouse control

Control component adding functionality to parent [Map](/docs/API/map) component.

This component adds possibility to interact with map through mouse or touch. By default all three types of interaction are enabled.

## How to use it

```js
import { Map, MouseControl } from 'mapy-cz-react';

<Map>
	<MouseControl />
</Map>;
```

## Props

| Name  | Type | Default | Description                                          | Required |
| ----- | ---- | ------- | ---------------------------------------------------- | :------: |
| pan   | bool | `true`  | Enable mouse pan control with drag                   |   :x:    |
| wheel | bool | `true`  | Enable mouse wheel control of zoom                   |   :x:    |
| zoom  | bool | `true`  | Enable mouse zoom control though double click or tap |   :x:    |

## Example

```jsx live
<MapProvider
	center={{ lat: 50.096406, lng: 14.463071 }}
	id="homepage-map-static-example"
	zoom={15}
>
	<Map height="300px">
		<MouseControl />
	</Map>
</MapProvider>
```
