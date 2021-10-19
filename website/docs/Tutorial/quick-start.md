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

First, we need to have react-mapy-cz installed as a dependency, as shown in [Getting started](../getting-started#installation).

Next, wrap subtree of your application that will contain map in `MapProvider`.
This component takes care of adding mapy.cz API script into document head.

In code, it could look something like this:

```jsx
import React from 'react';
import { MapProvider } from 'react-mapy-cz';

const MyApp = () => (
	<div id="my-app-root">
		... Some components
		<MapProvider center={{ lat: 50, lng: 15 }}>
			... Some other components that depend on map being present
		</MapProvider>
	</div>
);
```

## Making map interactive with Controls

:construction: Sorry, we are still writing this section, check again in some time.

## Adding points to map - Markers

:construction: Sorry, we are still writing this section, check again in some time

## How to listen to events on map

:construction: Sorry, we are still writing this section, check again in some time
