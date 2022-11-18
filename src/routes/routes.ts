/** @format */
import { lazy, LazyExoticComponent } from 'react';

type JSXComponente = () => JSX.Element;

interface Route {
	to: string;
	path: string;
	Component: LazyExoticComponent<JSXComponente> | JSXComponente;
	name: string;
}

// Lazy Load
const Lazy1 = lazy(() => import('../01-layload/pages/LazyPage1'));
const Lazy2 = lazy(() => import('../01-layload/pages/LazyPage2'));
const Lazy3 = lazy(() => import('../01-layload/pages/LazyPage3'));

export const routes: Route[] = [
	{
		to: '/lazy1',
		path: 'lazy1',
		Component: Lazy1,
		name: 'Lazy-1',
	},
	{
		to: '/lazy2',
		path: 'lazy2',
		Component: Lazy2,
		name: 'Lazy-2',
	},
	{
		to: '/lazy3',
		path: 'lazy3',
		Component: Lazy3,
		name: 'Lazy-3',
	},
];
