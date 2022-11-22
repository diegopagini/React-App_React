/** @format */
import '../styles/custom-styles.css';

import { useState } from 'react';

import ProductCard from '../components';
import { ProductButtons } from '../components/ProductButtons';
import { ProductImage } from '../components/ProductImage';
import { ProducTitle } from '../components/ProductTitle';
import { Product } from '../interfaces/product.interfaces';

const product = {
	id: '1',
	title: 'Coffee Mug - Card',
	img: './coffee-mug.png',
};

const product2 = {
	id: '2',
	title: 'Coffee Mug - Meme',
	img: './coffee-mug2.png',
};

const products: Product[] = [product, product2];

interface ProductInCart extends Product {
	count: number;
}

export const ShoppingPage = () => {
	const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

	const onProductCountChange = ({ count, product }: { count: number; product: Product }) => {
		setShoppingCart((oldShoppingCart: { [key: string]: ProductInCart }) => {
			// If the quantity is 0, we destructure the object and return only the remainder.
			if (count === 0) {
				const { [product.id]: toDelete, ...rest } = oldShoppingCart;
				// Other way to do it:
				// delete {...oldShoppingCart}[product.id]

				return rest;
			}

			return {
				...oldShoppingCart,
				[product.id]: { ...product, count },
			};
		});
	};

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
				{products.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						onChange={onProductCountChange}
						value={shoppingCart[product.id]?.count || 0}>
						<ProductImage />
						<ProducTitle />
						<ProductButtons />
					</ProductCard>
				))}
			</div>
			<div className='shopping-cart'>
				{Object.entries(shoppingCart).map(([key, product]) => (
					<ProductCard
						key={key}
						product={product}
						style={{ width: '100px' }}
						value={product.count}
						onChange={onProductCountChange}>
						<ProductImage />
						<ProducTitle />
						<ProductButtons style={{ display: 'flex', justifyContent: 'center' }} />
					</ProductCard>
				))}
			</div>
		</div>
	);
};
