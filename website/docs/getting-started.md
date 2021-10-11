---
sidebar_position: 1
id: getting-started
---

# Getting started

React Mapy cz is an amazing React wrapper of mapy.cz API. It lets you render interactive map with multiple features. Lets see how you can use it in your project:

## Installation

React Mapy cz requires **React 16.13.1 or later**, so we can use React hooks and other great features.

#### Install dependency:

```bash
# If you use npm:
npm install react-mapy-cz

# Or if you use Yarn:
yarn add react-mapy-cz
```

## Rendering your first map

In order to render basic map, add lines below into your app. These lines ensure that you have Mapy.cz API script loaded and will render map instance in default view.

```jsx
import { MapProvider, Map } from 'react-mapy-cz';

<MapProvider center={{ lat: 50, lng: 15 }}>
	<Map />
</MapProvider>
```

And done! Now you should be successfully running a static mapy.cz map in our app.

## Next steps

If you'd like to know more or just make the map interactive, take a look at our [Tutorials](https://lundegaard.github.io/react-mapy-cz/docs/Tutorial/quick-start).

Or, if you'd like to take a look at all the features, look into [API Reference](https://lundegaard.github.io/react-mapy-cz/docs/API/map-provider).
