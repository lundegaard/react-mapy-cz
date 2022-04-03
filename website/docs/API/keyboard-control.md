---
id: keyboard-control
---

# Keyboard control

Control component adding functionality to parent [Map](/docs/API/map) component.

This component adds possibility to interact with map through keyboard. Working keys are:

- arrows - moving map in arrow key direction
- - - keys - zooming in or out

## How to use it

```js
import { Map, KeyboarControl } from 'mapy-cz-react';

<Map>
	<KeyboarControl />
</Map>;
```

## Props

| Name | Type | Default | Description                                 | Required |
| ---- | ---- | ------- | ------------------------------------------- | :------: |
| pan  | bool | `true`  | Enable keyboard pan control - arrow keys    |   :x:    |
| zoom | bool | `true`  | Enable keyboard zoom control - `+` `-` keys |   :x:    |

## Example

```jsx live
<MapProvider
	center={{ lat: 50.096406, lng: 14.463071 }}
	id="homepage-map-static-example"
	zoom={15}
>
	<Map height="300px">
		<KeyboardControl />
	</Map>
</MapProvider>
```
