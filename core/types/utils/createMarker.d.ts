import { MarkerType } from '../components/types';
declare const createMarker: ({ cardBodyText, cardHeaderText, coords, enableCard, imgSrc, tooltip, ...props }: MarkerType) => SMap.Marker;
export default createMarker;
