/** @format */
import { ProductButtons, ProductCard, ProductImage, ProducTitle } from '../components';


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
				{/* <ProductCard product={product}>
					<ProductCard.Image />
					<ProductCard.Title />
					<ProductCard.Buttons />
				</ProductCard> */}

				<ProductCard product={product}>
					<ProductImage />
					<ProducTitle />
					<ProductButtons />
				</ProductCard>
			</div>
		</div>
	);
};
