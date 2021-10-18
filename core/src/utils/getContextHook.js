import { useContext } from 'react';

export const getContextHook = (Context, providerName) => () => {
	const context = useContext(Context);

	if (context === undefined) {
		throw new Error(
			`${Context.displayName} must be used within ${
				providerName ?? Context?.Provider?.displayName
			}`
		);
	}

	return context;
};
