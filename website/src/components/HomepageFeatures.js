import React, { Fragment } from 'react';
import clsx from 'clsx';

import styles from './HomepageFeatures.module.css';

const featureList = [
	{
		title: 'Easy to Use',
		description: (
			<Fragment>
				Render from simple map, to a complex map with thousands of clustered
				points easily with component API.
			</Fragment>
		),
	},
	{
		title: 'Lots of features',
		description: (
			<Fragment>
				From ordinary markers through routes to location services and
				autosuggesting places. Nearly all the might of Mapy.cz API at your
				disposal in a nice React wrapper.
			</Fragment>
		),
	},
	{
		title: 'Completely open-source',
		description: (
			<Fragment>
				This library is completely open-source. Take a look at our code in
				Github, and help us make it even better.
			</Fragment>
		),
	},
];

const HomepageFeatures = () => (
	<section className={styles.features}>
		<div className="container">
			<div className="row">
				{featureList.map(({ title, description }, idx) => (
					<div className={clsx('col col--4')} key={idx}>
						<div className="text--center padding-horiz--md">
							<h3>{title}</h3>
							<p>{description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	</section>
);

export default HomepageFeatures;
