import { LayerType } from '../components/types';
declare const useLayerManagement: () => {
    activeLayers: {
        type: LayerType;
        data: SMap.Layer;
    }[];
    getActiveLayerByType: (desiredType: LayerType) => SMap.Layer | undefined;
    registerActiveLayer: (layer: SMap.Layer, layerType: LayerType) => void;
};
export default useLayerManagement;
