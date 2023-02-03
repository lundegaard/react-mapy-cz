import { FC } from 'react';
export interface ZoomControlProps {
    labels?: {
        [key: number]: string;
    };
    showZoomMenu?: boolean;
    sliderHeight?: number;
    stepHeight?: number;
}
declare const ZoomControl: FC<ZoomControlProps>;
export default ZoomControl;
