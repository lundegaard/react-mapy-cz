const getRouteUrl = (start, destination, waypoints) => {
	const routeObject = new window.SMap.URL.Route();

	if (start) {
		const startCoords = window.SMap.Coords.fromWGS84(start.lng, start.lat);
		routeObject.addStart(startCoords);
	}

	// NOTE: Waypoints have to be added after start
	if (start && waypoints) {
		waypoints.forEach((waypoint) => {
			const waypointCoords = window.SMap.Coords.fromWGS84(
				waypoint.lng,
				waypoint.lat
			);
			routeObject.addWaypoint(waypointCoords);
		});
	}

	if (destination) {
		const destinationCoords = window.SMap.Coords.fromWGS84(
			destination.lng,
			destination.lat
		);
		routeObject.addDestination(destinationCoords);
	}

	return routeObject.toString();
};

export default getRouteUrl;
