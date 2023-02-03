import { FC } from 'react';
/**
 * Clusterer for markers.
 * Sets default clusterer for parent Marker layer.
 *
 * Usage - Add as a child of MarkerLayer component
 *
 * @returns null
 */
export interface ClustererProps {
    maxDistance?: number;
}
declare const Clusterer: FC<ClustererProps>;
export default Clusterer;
