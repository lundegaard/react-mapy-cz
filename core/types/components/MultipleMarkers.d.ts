import { FC } from 'react';
import { MarkerType } from './types';
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
declare const MultipleMarkers: FC<MultipleMarkersProps>;
export default MultipleMarkers;
