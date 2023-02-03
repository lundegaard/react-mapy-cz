import { Context } from 'react';
export declare const getContextHook: <T>(Context: Context<T>, providerName: string) => () => T & ({} | null);
