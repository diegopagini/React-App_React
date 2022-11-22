/** @format */
import { useState } from 'react';

import { Product, ProductInCart } from '../interfaces/product.interfaces';

export const useShoppingCart = () => {
	const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

	const onProductCountChange = ({ count, product }: { count: number; product: Product }) => {
		setShoppingCart((oldShoppingCart: { [key: string]: ProductInCart }) => {
			const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };

			if (Math.max(productInCart.count + count, 0) > 0) {
				productInCart.count += count;
				return {
					...oldShoppingCart,
					[product.id]: productInCart,
				};
			}

			const { [product.id]: toDelete, ...rest } = oldShoppingCart;
			return { ...rest };

			// If the quantity is 0, we destructure the object and return only the remainder.
			// if (count === 0) {
			// 	const { [product.id]: toDelete, ...rest } = oldShoppingCart;
			// 	Other way to do it:
			// 	delete {...oldShoppingCart}[product.id]
			// 	return rest;
			// }
			// return {
			// 	...oldShoppingCart,
			// 	[product.id]: { ...product, count },
			// };
		});
	};

	return {
		onProductCountChange,
		shoppingCart,
	};
};
