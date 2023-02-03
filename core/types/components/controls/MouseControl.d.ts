import { FC } from 'react';
export interface MouseControlProps {
    pan?: boolean;
    wheel?: boolean;
    zoom?: boolean;
    options?: {
        driftSlowdown: number;
        driftTreshold: number;
        idleDelay: number;
        maxDriftSpeed: number;
        minDriftSpeed: number;
        scrollDelay: number;
    };
}
declare const MouseControl: FC<MouseControlProps>;
export default MouseControl;
