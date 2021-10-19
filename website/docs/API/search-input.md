---
id: search-input
---

# Search input

Simple Search input using mapy.cz suggestion API.
Suggestions are shown as a dropdown with icons and basic information about the result (Like "Praha - capital city, Czechia"). When result is selected, map is automatically updated to point position.

## How to use it

```js
import { MapProvider, Map, SearchInput } from 'react-mapy-cz';

<MapProvider center={{ lat: 50.096406, lng: 14.463071 }} id="map-example">
	<SearchInput />
	<Map />
</MapProvider>;
```

## Props

| Name                | Type               | Default     | Description                                                                  | Required |
| ------------------- | ------------------ | ----------- | ---------------------------------------------------------------------------- | :------: |
| className           | string             | `""`        | Class names applied to input component                                       |   :x:    |
| disableGeolocation  | bool               | `false`     | Flag disabling geolocation of input value on submit                          |   :x:    |
| disableSuggest      | bool               | `false`     | Flag disabling suggestion dropdown                                           |   :x:    |
| inputComp           | string\elementType | `"input"`   | Custom Input component to be used                                            |   :x:    |
| inputValue          | string             | `undefined` | Value of input. With `onValueChange` handler prop makes component controled. |   :x:    |
| onSuggestItemSelect | func               | `undefined` | Callback called after suggestion                                             |   :x:    |
| onValueChange       | func               | `undefined` | Setter for input value. With `inputValue` prop makes component controled     |   :x:    |

## Example

```jsx live
<MapProvider center={{ lat: 50.096406, lng: 14.463071 }} id="map-example">
	<SearchInput />
	<Map />
</MapProvider>
```
