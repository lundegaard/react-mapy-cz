import { RefObject } from 'react';
declare const useSuggest: (inputRef: RefObject<HTMLInputElement>, disableSuggest: boolean | undefined, onSuggestItemSelect: (data: {
    longitude: number;
    latitude: number;
}) => void, config?: {
    bounds: string;
    enableCategories: number;
    lang: string;
}) => void;
export default useSuggest;
