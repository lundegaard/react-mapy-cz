import { number, oneOfType, shape, string } from 'prop-types';

export const coordsShape = {
	lng: oneOfType([number, string]),
	lat: oneOfType([number, string]),
};

export const markerShape = {
	coords: shape({ lng: number, lat: number }).isRequired,
	imgSrc: string,
	tooltip: string,
};
