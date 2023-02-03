import { ReactElement } from 'react';
import { ContextType, Coords } from '../components/types';
export declare const useMap: () => ContextType;
export interface MapProviderProps {
    center: Coords;
    children?: ReactElement;
    id?: string;
    mapLayers?: string[];
    maxZoom?: number;
    minZoom?: number;
    zoom?: number;
}
declare const _default: (props: MapProviderProps) => JSX.Element;
export default _default;
