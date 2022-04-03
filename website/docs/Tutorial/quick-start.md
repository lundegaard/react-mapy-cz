---
id: quick-start
---

# Quick start

React Mapy cz is created with the sole purpose of enabling React developers render maps from mapy.cz in their React apps without too much hustle.

## What you'll learn in this tutorial:

- [How to render simple map](#rendering-simple-map)
- [What are controls and how to use them](#making-map-interactive-with-controls)
- [Adding first markers](#adding-points-to-map---markers)
- [Listening to click events on markers](#how-to-listen-to-events-on-map)

So lets get started! :)

## Rendering simple map

First, we need to have `mapy-cz-react` installed as a dependency, as shown in [Getting started](../getting-started#installation).

Then, add `MapProvider` and `Map` as its child to the place where you want the map to be rendered. The provider component takes care of adding mapy.cz API script into document head, so all features are available.

In code, it could look something like this:

```jsx
import React from 'react';
import { MapProvider, Map } from 'mapy-cz-react';

const MyApp = () => (
	<div id="my-app-root">
		... Some components
		<MapProvider center={{ lat: 50, lng: 15 }}>
			<Map />
		</MapProvider>
	</div>
);
```

### Important

MapProvider injects scripts into head of document and waits for them to load. Until everything is loaded, provider renders a loading string instead of children.
This is due to the fact, that without loaded API we cannot create map instance.

## Making map interactive with Controls

:construction: Sorry, we are still writing this section, check again in some time.

## Adding points to map - Markers

:construction: Sorry, we are still writing this section, check again in some time

## How to listen to events on map

:construction: Sorry, we are still writing this section, check again in some time
