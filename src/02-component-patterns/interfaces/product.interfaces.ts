/** @format */
import { Props as ButtonProps } from '../components/ProductButtons';
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ImageProps } from '../components/ProductImage';
import { Props as TitleProps } from '../components/ProductTitle';

export interface ProductCardHOCProps {
	({ children, product }: ProductCardProps): JSX.Element;
	Title: (Props: TitleProps) => JSX.Element;
	Image: (Props: ImageProps) => JSX.Element;
	Buttons: (Props: ButtonProps) => JSX.Element;
}

export interface Product {
	id: string;
	title: string;
	img?: string;
}

export interface ProductContextProps {
	counter: number;
	increaseBy: (value: number) => void;
	product: Product;
}
