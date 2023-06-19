export interface Coords {
	lng: number;
	lat: number;
}

export type RouteType =
	| 'fast'
	| 'short'
	| 'bike1'
	| 'bike2'
	| 'bike3'
	| 'turist1'
	| 'turist2';

export interface MarkerType {
	coords: { longitude: number; latitude: number };
	cardBodyText?: string;
	cardHeaderText?: string;
	enableCard?: boolean;
	imgSrc?: string;
	tooltip?: string;
}

export type LayerType = 'CANVAS' | 'GEOMETRY' | 'HUD' | 'IMAGE' | 'MARKER';

export type SmapType = typeof SMap;

export interface ContextType {
	activeLayers?: {
		type: LayerType;
		data: SMap.Layer;
	}[];
	getActiveLayerByType: (desiredType: LayerType) => unknown;
	registerActiveLayer: (layer: SMap.Layer, layerType: LayerType) => void;
	id: string;
	map: SMap | undefined;
	mapLayers: string[] | number[];
	setMapCenter: (
		longitude: number,
		latitude: number,
		zoom?: number,
		animate?: boolean
	) => void;
	SMap: SmapType;
}

export type MarkerContext = SMap.Layer.Marker;

export type LayerContext = SMap.Layer;

export type SuggestConfig = {
	bounds?: string;
	enableCategories?: 0 | 1;
	lang?: string;
};
