import { Context, useContext } from 'react';

export const getContextHook =
	<T>(Context: Context<T>, providerName: string) =>
	() => {
		const context = useContext(Context);

		if (context === undefined) {
			throw new Error(
				`${Context.displayName} must be used within ${providerName}`
			);
		}

		return context;
	};
