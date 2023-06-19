/**
 * Function is initialized in MapProvider and served in that context.
 * Passed parameters are used to set map to new center location, with
 * optional zoom and animate parameter
 *
 * @param {number} longitude
 * @param {number} latitude
 * @param {number=} zoom : ;
 * @param {boolean=} animate
 * @returns null
 */

import { SmapType } from '../components/types';

const setMapCenter =
	(map: SMap | undefined, SMap: SmapType) =>
	(longitude: number, latitude: number, zoom = 17, animate = false) => {
		const newCoords = SMap.Coords.fromWGS84(longitude, latitude);
		map?.setCenterZoom(newCoords, zoom, animate);
	};

export default setMapCenter;
