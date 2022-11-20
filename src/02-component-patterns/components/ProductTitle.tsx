/** @format */
import { useContext } from 'react';

import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

export interface Props {
	title?: string;
	className?: string;
}

export const ProducTitle = ({ title, className }: Props) => {
	const { product } = useContext(ProductContext);

	return (
		<span className={`${styles.productDescription} ${className}`}>
			{/* If title is passed by props is going to use title, if not, the one from the product. */}
			{title ? title : product.title}
		</span>
	);
};
