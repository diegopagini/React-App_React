/** @format */
import { useEffect, useRef, useState } from 'react';

import { OnChangeArgs, Product } from '../interfaces/product.interfaces';

interface UseProductArgs {
	product: Product;
	onChange?: (args: OnChangeArgs) => void;
	value?: number;
}

export const useProduct = ({ onChange, product, value = 0 }: UseProductArgs) => {
	const [counter, setCounter] = useState(value);

	const isCrontrolled = useRef(!!onChange);

	const increaseBy = (value: number) => {
		if (isCrontrolled.current) return onChange!({ count: value, product });

		const newValue = Math.max(counter + value, 0);
		setCounter(newValue);

		onChange &&
			onChange({
				count: newValue,
				product,
			}); // same to do if(onChange) onChange();
	};

	// When the value that comes from props change...
	useEffect(() => {
		setCounter(value);
	}, [value]);

	return {
		counter,
		increaseBy,
	};
};
