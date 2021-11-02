const getRandomInRange = (from, to, fixed) =>
	(Math.random() * (to - from) + from).toFixed(fixed) * 1;

export const generatePoints = (count, multipleMarkers) =>
	Array.from(Array(count), (_, index) =>
		multipleMarkers
			? {
					gps: {
						longitude: getRandomInRange(-180, 180, 5),
						latitude: getRandomInRange(-90, 90, 5),
					},
					title: `Marker ${index}`,
			  }
			: {
					longitude: getRandomInRange(-180, 180, 5),
					latitude: getRandomInRange(-90, 90, 5),
					title: `Marker ${index}`,
			  }
	);

export const onMarkerClick = ({ _options }) => {
	window.alert(`${_options.title} was clicked!`);
};

export const onClusterClick = () => {
	window.alert('Cluster was clicked!');
};
