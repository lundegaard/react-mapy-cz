import { bool, number, oneOfType, shape, string } from 'prop-types';

export const coordsShape = {
	lng: oneOfType([number, string]),
	lat: oneOfType([number, string]),
};

export const markerShape = {
	cardBodyText: string,
	cardHeaderText: string,
	coords: shape({ lng: number, lat: number }).isRequired,
	enableCard: bool,
	imgSrc: string,
	tooltip: string,
};
