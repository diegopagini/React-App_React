/** @format */
import { createContext, ReactElement } from 'react';

import { useProduct } from '../hooks/useProduct';
import { OnChangeArgs, Product, ProductContextProps } from '../interfaces/product.interfaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
	product: Product;
	children?: ReactElement | ReactElement[];
	className?: string;
	style?: React.CSSProperties;
	onChange?: (args: OnChangeArgs) => void;
}

export const ProductCard = ({ children, product, className, style, onChange }: Props) => {
	const { counter, increaseBy } = useProduct({ onChange, product });

	return (
		<Provider
			value={{
				counter,
				increaseBy,
				product,
			}}>
			{/* To use more than one style class */}
			<div className={`${styles.productCard} ${className}`} style={style}>
				{children}
			</div>
		</Provider>
	);
};
