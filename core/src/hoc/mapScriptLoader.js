import React, { useEffect, useState } from 'react';

// eslint-disable-next-line react/display-name
const mapScriptLoader = (Component) => (props) => {
	const [scriptLoaded, setScriptLoaded] = useState(false);

	const onLoadCallback = () => setScriptLoaded(true);

	useEffect(() => {
		const script = document.createElement('script');
		script.src = 'https://api.mapy.cz/loader.js';
		script.id = 'mapy.cz-api-script';
		script.async = true;
		script.onload = () => {
			window.Loader.async = true;
			window.Loader.load(null, { suggest: true }, onLoadCallback);
		};

		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	if (!scriptLoaded) {
		return <div>Loading map...</div>;
	}

	return <Component {...props} />;
};

export default mapScriptLoader;
