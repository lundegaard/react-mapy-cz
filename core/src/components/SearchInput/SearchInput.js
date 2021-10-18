import { bool, elementType, func, oneOfType, string } from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

import useGeolocation from './hooks/useGeolocation';
import useSuggest from './hooks/useSuggest';

const SearchInput = ({
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

	const inputRef = useRef();

	useSuggest(inputRef, disableSuggest, onSuggestItemSelect);
	const handleSubmit = useGeolocation(searchValue, disableGeolocation);

	const handleChange = (event) => {
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

SearchInput.propTypes = {
	className: string,
	disableGeolocation: bool,
	disableSuggest: bool,
	inputComp: oneOfType([string, elementType]),
	inputValue: string,
	onSuggestItemSelect: func,
	onValueChange: func,
};

export default SearchInput;
