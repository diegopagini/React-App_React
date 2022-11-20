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
					<ProductCard.Image className='custom-image' />
					<ProductCard.Title />
					<ProductCard.Buttons />
				</ProductCard>
				{/* or */}
				<ProductCard product={product} className='bg-dark text-white'>
					<ProductImage className='custom-image' />
					<ProducTitle className='text-bold' />
					<ProductButtons className='custom-buttons' />
				</ProductCard>
				{/* or */}
				<ProductCard
					product={product}
					style={{
						backgroundColor: '#ff00ff',
						padding: '1rem',
					}}>
					<ProductImage />
					<ProducTitle />
					<ProductButtons
						style={{
							justifyContent: 'space-between',
						}}
					/>
				</ProductCard>
			</div>
		</div>
	);
};
