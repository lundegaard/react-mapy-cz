---
id: 04-interactive-map-multiple-markers
---

import { Clusterer, KeyboardControl,Map,
MapProvider, MarkerLayer, MouseControl, MultipleMarkers, ZoomControl} from '../../../core/src';
import styles from '../../src/pages/index.module.css';

# Interactive map with multiple markers

Interactive map with controls and multiple markers with marker clustering. Markers of close proximity are combined into clusters.

<div>
  <section className={styles.sMap}>
		<MapProvider center={{lng:  14.4608576, lat: 50.0963478}}>
			<Map>
				<ZoomControl />
				<KeyboardControl />
				<MouseControl zoom pan wheel />
				<MarkerLayer >
					<Clusterer />
					<MultipleMarkers markersData={[{gps: {longitude: 14.4608576, latitude: 50.0963478}, name: "Lundegaard s.r.o."}, {gps: {longitude: 16.6231535, latitude: 49.186054}, name: "Lundegaard s.r.o."}, {gps: {longitude: 15.8287533, latitude: 50.2092489}, name: "Lundegaard s.r.o."}, {gps: {longitude: 21.2391831, latitude: 48.7287386}, name: "Lundegaard Slovensko s.r.o."}, {gps: {longitude: 11.0712403, latitude: 49.4517557}, name: "Lundegaard s.r.o."}].map((point) => ({
					coords: point.gps,
					tooltip: point.name,
					...point,
					}))}
					/>
				</MarkerLayer>
			</Map>
		</MapProvider>
	</section>
</div>

<br />

**Code**

```
<MapProvider center={{lng:  14.4608576, lat: 50.0963478}}>
		<Map>
			<ZoomControl />
			<KeyboardControl />
			<MouseControl zoom pan wheel />
			<MarkerLayer >
				<Clusterer />
				<MultipleMarkers markersData={[{gps: {longitude: 14.4608576, latitude: 50.0963478}, name: "Lundegaard s.r.o."}, {gps: {longitude: 16.6231535, latitude: 49.186054}, name: "Lundegaard s.r.o."}, {gps: {longitude: 15.8287533, latitude: 50.2092489}, name: "Lundegaard s.r.o."}, {gps: {longitude: 21.2391831, latitude: 48.7287386}, name: "Lundegaard Slovensko s.r.o."}, {gps: {longitude: 11.0712403, latitude: 49.4517557}, name: "Lundegaard s.r.o."}].map((point) => ({
				coords: point.gps,
				tooltip: point.name,
				...point,
				}))}
				/>
			</MarkerLayer>
		</Map>
	</MapProvider>
```
