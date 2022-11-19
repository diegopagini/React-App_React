/** @format */
import { ProductCard } from '../components/ProductCard';

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
				<ProductCard product={product} />
			</div>
		</div>
	);
};
