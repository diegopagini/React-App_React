/** @format */
import { useContext } from 'react';

import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

export interface Props {
	className?: string;
}

export const ProductButtons = ({ className }: Props) => {
	const { increaseBy, counter } = useContext(ProductContext);

	return (
		<div className={`${styles.buttonsContainer} ${className}`}>
			<button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>
				-
			</button>
			<div className={styles.countLabel}>{counter}</div>
			<button onClick={() => increaseBy(+1)} className={styles.buttonAdd}>
				+
			</button>
		</div>
	);
};
