import { FC } from 'react';
import { Coords } from './types';
export interface PointerProps {
    coords: Coords;
    redPointer?: boolean;
    showDistance?: boolean;
}
declare const Pointer: FC<PointerProps>;
export default Pointer;
