import React, { FC, ReactElement, memo } from 'react';

import styles from '../css/base.module.css';

import { useMap } from './MapContext';

export interface MapProps {
	children?: ReactElement;
	height?: string;
	width?: string;
}

const Map: FC<MapProps> = ({ children, width = '100%', height = 'auto' }) => {
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

export default memo(Map);
