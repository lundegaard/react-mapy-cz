---
id: sync-control
---

# Sync control

Control component adding functionality to parent [Map](/docs/API/map) component.

This component adds behaviour - map stretches to whole width and height of parent, and adjusts its dimenstions based on parents dimension changes.

## How to use it

```js
import { Map, SyncControl } from 'mapy-cz-react';

<MapProvider center={{ lat: 50.096406, lng: 14.463071 }} id="map-example">
	<Map>
		<SyncControl />
	</Map>
</MapProvider>;
```

## Props

| Name          | Type   | Default | Description                                          | Required |
| ------------- | ------ | ------- | ---------------------------------------------------- | :------: |
| bottomSpace   | number | `0`     | padding between bottom of the map and parent element |   :x:    |
| resizeTimeout | number | `100`   | miliseconds after last resize action to update map   |   :x:    |
