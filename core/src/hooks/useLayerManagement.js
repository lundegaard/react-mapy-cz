import { useCallback, useState } from 'react';

const useLayerManagement = () => {
	const [activeLayers, setActiveLayers] = useState([]);

	const registerActiveLayer = useCallback((layer, layerType) => {
		setActiveLayers((prevLayers) => {
			if (prevLayers.some(({ type }) => type === layerType)) {
				throw new Error(
					`There can be only one rendered layer of type ${layerType} in map`
				);
			}

			return [...prevLayers, { type: layerType, data: layer }];
		});
	}, []);

	const getActiveLayerByType = useCallback(
		(desiredType) => {
			const foundLayer = activeLayers.find(({ type }) => type === desiredType);

			return foundLayer?.data;
		},
		[activeLayers]
	);

	return { activeLayers, getActiveLayerByType, registerActiveLayer };
};

export default useLayerManagement;
