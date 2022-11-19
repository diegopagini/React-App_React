/** @format */
import { lazy, LazyExoticComponent } from 'react';

import { NoLazy } from '../01-layload/pages/NoLazy';

type JSXComponente = () => JSX.Element;

interface Route {
	to: string;
	path: string;
	Component: LazyExoticComponent<JSXComponente> | JSXComponente;
	name: string;
}

// Lazy Load
const LazyLayout = lazy(
	() => import(/* webpackChunkName: "LazyLayout" */ '../01-layload/layout/LazyLayout')
);

export const routes: Route[] = [
	{
		to: '/lazyload/',
		path: '/lazyload/*',
		Component: LazyLayout,
		name: 'Lazy Layout',
	},
	{
		to: '/no-lazy',
		path: 'no-lazy',
		Component: NoLazy,
		name: 'No Lazy',
	},
];
