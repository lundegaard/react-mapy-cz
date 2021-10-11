import React, { memo, useContext } from 'react';
import { node, string } from 'prop-types';

import { MapContext } from './MapProvider';

const Map = ({ children, width = '100%', height = '300px' }) => {
	const { map, id } = useContext(MapContext);

	return (
		<div style={{ width, height }} id={id}>
			{map && children}
		</div>
	);
};

Map.propTypes = {
	children: node,
	height: string,
	width: string,
};

export default memo(Map);
