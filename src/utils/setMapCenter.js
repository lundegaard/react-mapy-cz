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
const setMapCenter =
	(map) =>
	(longitude, latitude, zoom = 17, animate = true) => {
		const newCoords = window.SMap.Coords.fromWGS84(longitude, latitude);
		map.setCenterZoom(newCoords, zoom, animate);
	};

export default setMapCenter;
