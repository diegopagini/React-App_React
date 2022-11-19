/** @format */
import { LazyExoticComponent } from 'react';

import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';

type JSXComponente = () => JSX.Element;

interface Route {
	to: string;
	path: string;
	Component: LazyExoticComponent<JSXComponente> | JSXComponente;
	name: string;
}

export const routes: Route[] = [
	{
		to: '/',
		path: '/',
		Component: ShoppingPage,
		name: 'Shopping',
	},
];
