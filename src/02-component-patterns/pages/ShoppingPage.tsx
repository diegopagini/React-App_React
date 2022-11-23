/** @format */
import '../styles/custom-styles.css';

import ProductCard from '../components';
import { ProductButtons } from '../components/ProductButtons';
import { ProductImage } from '../components/ProductImage';
import { ProducTitle } from '../components/ProductTitle';
import { products } from '../data/products';

const product = products[0];

export const ShoppingPage = () => {
	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />
			<ProductCard
				product={product}
				initialValues={{
					count: 4,
					maxCount: 10,
				}}>
				{({ reset, increaseBy, count, isMaxCountReached }) => (
					<div
						style={{
							alignItems: 'center',
							display: 'flex',
							justifyContent: 'center',
							flexDirection: 'column',
						}}>
						<ProductImage />
						<ProducTitle />
						<ProductButtons />
						<button onClick={reset}>Reset</button>
						<button onClick={() => increaseBy(-2)}>-2</button>
						{!isMaxCountReached && <button onClick={() => increaseBy(+2)}>+2</button>}
						<span>{count}</span>
					</div>
				)}
			</ProductCard>
		</div>
	);
};
