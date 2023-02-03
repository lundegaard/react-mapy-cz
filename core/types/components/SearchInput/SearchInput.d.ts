import { ComponentPropsWithRef, FC } from 'react';
export interface SearchInputProps {
    className?: string;
    disableGeolocation?: boolean;
    disableSuggest?: boolean;
    inputComp?: FC<ComponentPropsWithRef<'input'>>;
    inputValue?: string;
    onSuggestItemSelect: (data: {
        longitude: number;
        latitude: number;
    }) => void;
    onValueChange?: (value: string) => void;
    placeholder?: string;
}
declare const SearchInput: FC<SearchInputProps>;
export default SearchInput;
