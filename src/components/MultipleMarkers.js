import { useContext, useEffect } from 'react';
import { arrayOf, shape } from 'prop-types';

import { markerShape } from '../utils/shapes';

import { MarkerLayerContext } from './MarkerLayer';

/**
 * Component for rendering large numbers of markers at once.
 * Hugely more performant than rendering markers one by one.
 *
 * Generally if you have more than 100 markers, you should consider using this component
 * indead of creating individual markers by yourself.
 *
 * @param {*} markersData
 * @returns component
 */
const MultipleMarkers = ({ markersData }) => {
	const markerLayer = useContext(MarkerLayerContext);

	useEffect(() => {
		markerLayer?.removeAll();

		const markersArray = markersData.map(
			({ coords, imgSrc, tooltip, ...props }) => {
				const options = {
					...(imgSrc ? { url: imgSrc } : undefined),
					...(tooltip ? { title: tooltip } : undefined),
					...props,
				};
				const mapCoords = window.SMap.Coords.fromWGS84(
					coords.longitude,
					coords.latitude
				);

				return new window.SMap.Marker(
					mapCoords,
					false,
					Object.keys(options).length > 0 ? options : undefined
				);
			}
		);

		markerLayer?.addMarker(markersArray);

		return () => {
			markerLayer?.removeMarker(markersArray, true);
		};
	}, [markerLayer, markersData]);

	return null;
};

MultipleMarkers.propTypes = {
	markersData: arrayOf(shape(markerShape)),
};

export default MultipleMarkers;
