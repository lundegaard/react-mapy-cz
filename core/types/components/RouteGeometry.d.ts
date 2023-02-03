import { FC } from 'react';
import { Coords, RouteType } from './types';
export interface RouteGeometryProps {
    coords: Coords[];
    id: string;
    color?: string;
    routeType?: RouteType;
    width?: number;
}
declare const RouteGeometry: FC<RouteGeometryProps>;
export default RouteGeometry;
