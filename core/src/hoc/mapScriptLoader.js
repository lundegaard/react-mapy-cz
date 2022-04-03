import React, { useCallback, useEffect, useState } from 'react';
import invariant from 'invariant';

import {
	MAPYCZ_LOADER_SCRIPT_ID,
	MAX_RETRIES,
	RETRY_DELAY_MS,
} from '../utils/constants';

// eslint-disable-next-line react/display-name
const mapScriptLoader = (Component) => (props) => {
	const [scriptLoaded, setScriptLoaded] = useState(false);

	// Test if Loader indeed loaded everything and we can render map
	const onLoadCallback = useCallback((retryNo = 1) => {
		invariant(window, 'This library is not designed to be run on the server');

		if (window?.SMap?.Suggest) {
			setScriptLoaded(true);
		} else if (retryNo <= MAX_RETRIES) {
			setTimeout(() => onLoadCallback(false), RETRY_DELAY_MS);
		}
	}, []);

	useEffect(() => {
		// When script is already loaded, move to onLoadCallback
		if (document.getElementById('mapy.cz-api-script')) {
			onLoadCallback();
			return;
		}

		const script = document.createElement('script');
		script.src = 'https://api.mapy.cz/loader.js';
		script.id = MAPYCZ_LOADER_SCRIPT_ID;
		script.async = true;
		script.onload = () => {
			window.Loader.async = true;
			window.Loader.load(null, { suggest: true }, onLoadCallback);
		};

		document.head.appendChild(script);
	}, [onLoadCallback]);

	if (!scriptLoaded) {
		return <div>Loading map...</div>;
	}

	return <Component {...props} />;
};

export default mapScriptLoader;
