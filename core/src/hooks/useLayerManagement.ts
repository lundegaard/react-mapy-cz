import { useCallback, useState } from 'react';

import { LayerType } from '../components/types';

const useLayerManagement = () => {
	const [activeLayers, setActiveLayers] = useState<
		{ type: LayerType; data: SMap.Layer }[]
	>([]);

	const registerActiveLayer = useCallback(
		(layer: SMap.Layer, layerType: LayerType) => {
			setActiveLayers((prevLayers) => {
				if (prevLayers.some(({ type }) => type === layerType)) {
					throw new Error(
						`There can be only one rendered layer of type ${layerType} in map`
					);
				}

				return [...prevLayers, { type: layerType, data: layer }];
			});
		},
		[]
	);

	const getActiveLayerByType = useCallback(
		(desiredType: LayerType) => {
			const foundLayer = activeLayers.find(({ type }) => type === desiredType);

			return foundLayer?.data;
		},
		[activeLayers]
	);

	return { activeLayers, getActiveLayerByType, registerActiveLayer };
};

export default useLayerManagement;
