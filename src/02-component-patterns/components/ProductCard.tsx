/** @format */
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';


export const ProductCard = () => {
	const { counter, increaseBy } = useProduct();

	return (
		<div className={styles.productCard}>
			<img className={styles.productImg} src='./coffee-mug.png' alt='Coffee Mug' />
			{/* <img className={styles.productImg} src={noImage} alt='No Image' /> */}
			<span className={styles.productDescription}>Coffee Mug</span>

			<div className={styles.buttonsContainer}>
				<button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>
					-
				</button>
				<div className={styles.countLabel}>{counter}</div>
				<button onClick={() => increaseBy(+1)} className={styles.buttonAdd}>
					+
				</button>
			</div>
		</div>
	);
};
