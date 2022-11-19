/** @format */
import noImage from '../assets/no-image.jpg';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';

interface Props {
	product: Product;
}

interface Product {
	id: string;
	title: string;
	img?: string;
}

interface ProductButtonsProps {
	increaseBy: (value: number) => void;
	counter: number;
}

export const ProductImage = ({ img = '' }) => {
	return <img className={styles.productImg} src={img ? img : noImage} alt='Product' />;
};

export const ProducTitle = ({ title }: { title: string }) => {
	return <span className={styles.productDescription}>{title}</span>;
};

export const ProductButtons = ({ increaseBy, counter }: ProductButtonsProps) => {
	return (
		<div className={styles.buttonsContainer}>
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

export const ProductCard = ({ product }: Props) => {
	const { counter, increaseBy } = useProduct();

	return (
		<div className={styles.productCard}>
			<ProductImage img={product.img} />
			<ProducTitle title={product.title} />
			<ProductButtons increaseBy={increaseBy} counter={counter} />
		</div>
	);
};
