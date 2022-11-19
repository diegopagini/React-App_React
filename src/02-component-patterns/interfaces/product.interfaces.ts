/** @format */
import { ReactElement } from 'react';

export interface ProductCardProps {
	product: Product;
	children?: ReactElement | ReactElement[];
}

interface Product {
	id: string;
	title: string;
	img?: string;
}

export interface ProductContextProps {
	counter: number;
	increaseBy: (value: number) => void;
	product: Product;
}
