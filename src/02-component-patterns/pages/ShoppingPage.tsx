/** @format */
import '../styles/custom-styles.css';

import ProductCard from '../components';
import { ProductButtons } from '../components/ProductButtons';
import { ProductImage } from '../components/ProductImage';
import { ProducTitle } from '../components/ProductTitle';

const product = {
	id: '1',
	title: 'Coffee Mug - Card',
	img: './coffee-mug.png',
};

export const ShoppingPage = () => {
	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />

			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap',
					gap: '1rem',
				}}>
				{/* Differents ways to do it. */}
				<ProductCard product={product}>
					<ProductCard.Image />
					<ProductCard.Title />
					<ProductCard.Buttons />
				</ProductCard>
				{/* or */}
				<ProductCard product={product} className='bg-dark'>
					<ProductImage className='custom-image' />
					<ProducTitle className='text-white' />
					<ProductButtons />
				</ProductCard>
			</div>
		</div>
	);
};
