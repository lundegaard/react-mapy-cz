import { Coords, SmapType } from '../components/types';
declare const useMapInit: (center: Coords, id: string, mapLayers: string[] | number[], maxZoom: number, minZoom: number, SMap: SmapType, zoom: number) => SMap | undefined;
export default useMapInit;
