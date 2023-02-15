import { FC, useEffect, useRef } from 'react';

import createMarker from '../utils/createMarker';

import { MarkerType } from './types';
import { useMarkerLayer } from './MarkerLayer';
import { useMap } from './MapContext';

/**
 * Component for rendering large numbers of markers at once.
 * Hugely more performant than rendering markers one by one.
 *
 * Generally if you have more than 100 markers, you should consider using this component
 * instead of creating individual markers by yourself.
 *
 * @param {*} markersData
 * @returns component
 */

export interface MultipleMarkersProps {
	markersData: MarkerType[];
}

const MultipleMarkers: FC<MultipleMarkersProps> = ({ markersData }) => {
	const markerLayer = useMarkerLayer();
	const { SMap } = useMap();
	const markersDataRef = useRef<MarkerType[]>();
	const markersRef = useRef<SMap.Marker[]>();

	useEffect(() => {
		if (
			Array.isArray(markersData) &&
			JSON.stringify(markersDataRef.current) !== JSON.stringify(markersData)
		) {
			const markersArray = markersData.map(createMarker);

			if (markersRef.current) {
				markerLayer?.removeMarker(markersRef.current);
			}
			markerLayer?.addMarker(markersArray);

			markersDataRef.current = markersData;
			markersRef.current = markersArray;
		}
	}, [markerLayer, markersData, SMap]);

	return null;
};

export default MultipleMarkers;
