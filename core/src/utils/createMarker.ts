import { MarkerType } from '../components/types';

const createMarker = ({
	cardBodyText,
	cardHeaderText,
	coords,
	enableCard,
	imgSrc,
	tooltip,
	...props
}: MarkerType) => {
	const options = {
		...(imgSrc ? { url: imgSrc } : undefined),
		...(tooltip ? { title: tooltip } : undefined),
		...props,
	};

	const mapCoords = window.SMap.Coords.fromWGS84(
		coords.longitude,
		coords.latitude
	);
	const marker = new window.SMap.Marker(
		mapCoords,
		false,
		Object.keys(options).length > 0 ? options : undefined
	);

	if (enableCard) {
		const card = new window.SMap.Card();

		card.getHeader().innerHTML = cardHeaderText ?? '';
		card.getBody().innerHTML = cardBodyText ?? '';
		marker.decorate(window.SMap.Marker.Feature.Card, card);
	}

	return marker;
};

export default createMarker;
