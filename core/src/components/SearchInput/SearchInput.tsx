import React, {
	ChangeEvent,
	ComponentPropsWithRef,
	FC,
	useEffect,
	useRef,
	useState,
} from 'react';

import useGeolocation from './hooks/useGeolocation';
import useSuggest from './hooks/useSuggest';

export interface SearchInputProps {
	className?: string;
	disableGeolocation?: boolean;
	disableSuggest?: boolean;
	inputComp?: FC<ComponentPropsWithRef<'input'>>;
	inputValue?: string;
	onSuggestItemSelect: (data: { longitude: number; latitude: number }) => void;
	onValueChange?: (value: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({
	className = '',
	disableGeolocation,
	disableSuggest,
	inputComp: Component = 'input',
	inputValue,
	onSuggestItemSelect,
	onValueChange,
}) => {
	const [searchValue, setSearchValue] = useState('');

	useEffect(() => {
		if (inputValue != null) {
			setSearchValue(inputValue);
		}
	}, [inputValue]);

	const inputRef = useRef<HTMLInputElement>(null);

	useSuggest(inputRef, disableSuggest, onSuggestItemSelect);
	const handleSubmit = useGeolocation(searchValue, disableGeolocation);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (onValueChange) {
			onValueChange(event.target.value);
		}
		setSearchValue(event.target.value);
	};

	return (
		<form onSubmit={handleSubmit}>
			<Component
				ref={inputRef}
				value={searchValue}
				onChange={handleChange}
				className={className}
			/>
			{!disableGeolocation && <input type="submit" />}
		</form>
	);
};

export default SearchInput;
