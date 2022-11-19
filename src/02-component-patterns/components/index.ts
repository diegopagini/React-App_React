/** @format */
import { ProductCardHOCProps } from '../interfaces/product.interfaces';
import { ProductButtons } from './ProductButtons';
import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductImage } from './ProductImage';
import { ProducTitle } from './ProductTitle';

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
	Buttons: ProductButtons,
	Image: ProductImage,
	Title: ProducTitle,
});

export default ProductCard;
