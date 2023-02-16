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

You can interact with the map with controls. Try to add `ZoomControl`, `KeyboardControl` or `MouseControl` and see what happens.

```jsx
import React from 'react';
import {
	KeyboardControl,
	MapProvider,
	Map,
	MouseControl,
	ZoomControl,
} from 'mapy-cz-react';

const MyApp = () => (
	<div id="my-app-root">
		... Some components
		<MapProvider center={{ lng: 14.4608576, lat: 50.0963478 }} zoom={16}>
			<Map>
				<ZoomControl />
				<KeyboardControl />
				<MouseControl zoom pan wheel />
			</Map>
		</MapProvider>
	</div>
);
```

## Adding points to map - Markers

In case you want to indicate the exact location, you can add `MarkerLayer` and `Marker` with location coordinates.

```jsx
import React from 'react';
import { MapProvider, Map, Marker, MarkerLayer } from 'mapy-cz-react';

const MyApp = () => (
	<div id="my-app-root">
		... Some components
		<MapProvider center={{ lng: 14.4608576, lat: 50.0963478 }} zoom={16}>
			<Map>
				<MarkerLayer>
					<Marker coords={{ longitude: 14.4608576, latitude: 50.0963478 }} />
				</MarkerLayer>
			</Map>
		</MapProvider>
	</div>
);
```

When you need to mark multiple locations, just add `MarkerLayer` with `MultipleMarkers` to the map and pass an array with points as `markersData` to the `MultipleMarkers` component. You can even add `Clusterer` component to group nearby points together.

```jsx
import React from 'react';
import {
	Clusterer,
	MapProvider,
	Map,
	MarkerLayer,
	MultipleMarkers,
} from 'mapy-cz-react';

const MyApp = () => (
	<div id="my-app-root">
		... Some components
		<MapProvider center={{ lng: 14.4608576, lat: 50.0963478 }} zoom={16}>
			<Map>
				<MarkerLayer>
					<Clusterer />
					<MultipleMarkers
						markersData={[
							{
								gps: { longitude: 14.4608576, latitude: 50.0963478 },
								name: 'Lundegaard s.r.o.',
							},
							{
								gps: { longitude: 16.6231535, latitude: 49.186054 },
								name: 'Lundegaard s.r.o.',
							},
							{
								gps: { longitude: 15.8287533, latitude: 50.2092489 },
								name: 'Lundegaard s.r.o.',
							},
							{
								gps: { longitude: 21.2391831, latitude: 48.7287386 },
								name: 'Lundegaard Slovensko s.r.o.',
							},
							{
								gps: { longitude: 11.0712403, latitude: 49.4517557 },
								name: 'Lundegaard s.r.o.',
							},
						].map((point) => ({
							coords: point.gps,
							tooltip: point.name,
							...point,
						}))}
					/>
				</MarkerLayer>
			</Map>
		</MapProvider>
	</div>
);
```

## How to listen to events on map

If you want to add custom behaviour on click events, you can do it by using `Signals`. You can easily define and pass your own `onMarkerClick` and `onClusterClick` function.

```jsx
import React from 'react';
import {
	Clusterer,
	MapProvider,
	Map,
	MarkerLayer,
	MultipleMarkers,
	Signals,
} from 'mapy-cz-react';

const MyApp = () => {
	const onMarkerClick = ({ _options }) =>
		console.log(`You clicked on marker: ${_options.title}`);

	const onClusterClick = ({ _options }) =>
		console.log(`You clicked on cluster: ${_options.title}`);

	return (
		<div id="my-app-root">
			... Some components
			<MapProvider center={{ lng: 14.4608576, lat: 50.0963478 }}>
				<Map>
					<Signals
						onMarkerClick={onMarkerClick}
						onClusterClick={onClusterClick}
					/>
					<MarkerLayer>
						<Clusterer />
						<MultipleMarkers
							markersData={[
								{
									gps: { longitude: 14.4608576, latitude: 50.0963478 },
									name: 'Lundegaard s.r.o.',
								},
								{
									gps: { longitude: 16.6231535, latitude: 49.186054 },
									name: 'Lundegaard s.r.o.',
								},
								{
									gps: { longitude: 15.8287533, latitude: 50.2092489 },
									name: 'Lundegaard s.r.o.',
								},
								{
									gps: { longitude: 21.2391831, latitude: 48.7287386 },
									name: 'Lundegaard Slovensko s.r.o.',
								},
								{
									gps: { longitude: 11.0712403, latitude: 49.4517557 },
									name: 'Lundegaard s.r.o.',
								},
							].map((point) => ({
								coords: point.gps,
								tooltip: point.name,
								...point,
							}))}
						/>
					</MarkerLayer>
				</Map>
			</MapProvider>
		</div>
	);
};
```
