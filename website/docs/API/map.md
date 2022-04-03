---
id: map
---

# Map

Base component that holds rendered map with all its parts.

Consumes id provided in [MapProvider](/docs/API/map-provider) component and renders element with that `id`. Component serves as a map root that defines base wrapper for internal map structure and defines its dimensions.

## How to use it

```js
import { Map } from 'mapy-cz-react';

<Map>...other components, controls, markers, etc...</Map>;
```

## Props

| Name   | Type   | Default  | Description   | Required |
| ------ | ------ | -------- | ------------- | :------: |
| width  | string | `"100%"` | Width of map  |   :x:    |
| height | string | `"auto"` | Height of map |   :x:    |
