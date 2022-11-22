/** @format */
import '../styles/custom-styles.css';

import ProductCard from '../components';
import { ProductButtons } from '../components/ProductButtons';
import { ProductImage } from '../components/ProductImage';
import { ProducTitle } from '../components/ProductTitle';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';

export const ShoppingPage = () => {
	const { onProductCountChange, shoppingCart } = useShoppingCart();

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
