import React, { memo } from 'react';
import { node, string } from 'prop-types';

import styles from '../css/base.module.css';

import { useMap } from './MapContext';

const Map = ({ children, width = '100%', height = 'auto' }) => {
	const { map, id } = useMap();

	return (
		<div
			style={{
				width,
				height,
				minHeight: '150px',
			}}
			id={id}
			className={styles.smap}
		>
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
