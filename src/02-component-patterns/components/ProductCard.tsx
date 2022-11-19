/** @format */
import styles from '../styles/styles.module.css';

export const ProductCard = () => {
	return (
		<div className={styles.productCard}>
			<img className={styles.productImg} src='./coffee-mug.png' alt='Coffee Mug' />
			{/* <img className={styles.productImg} src={noImage} alt='No Image' /> */}
			<span className={styles.productDescription}>Coffee Mug</span>

			<div className={styles.buttonsContainer}>
				<button className={styles.buttonMinus}>-</button>
				<div className={styles.countLabel}>0</div>
				<button className={styles.buttonAdd}>+</button>
			</div>
		</div>
	);
};
