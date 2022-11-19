/** @format */
import { useContext } from 'react';

import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';


export const ProducTitle = ({ title }: { title?: string }) => {
	const { product } = useContext(ProductContext);

	return <span className={styles.productDescription}>{title ? title : product.title}</span>;
};
