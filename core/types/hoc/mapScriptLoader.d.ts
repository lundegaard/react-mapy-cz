import { FC } from 'react';
import { MapProviderProps } from '../components/MapContext';
import { SmapType } from '../components/types';
declare global {
    interface Window {
        SMap: SmapType;
        Loader: {
            apiKey: string;
            base: string;
            lang: string;
            async: boolean;
            load: (key: string | null, options: {
                suggest: boolean;
            }, callback: () => void) => void;
        };
        JAK: {
            gel: (id: string) => Node;
        };
    }
}
declare const mapScriptLoader: (Component: FC<MapProviderProps>) => (props: MapProviderProps) => JSX.Element;
export default mapScriptLoader;
