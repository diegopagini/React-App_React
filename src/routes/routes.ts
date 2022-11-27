/** @format */
import { LazyExoticComponent } from 'react';

import { ResgisterPage } from '../03-forms/pages/ResgisterPage';

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
		Component: ResgisterPage,
		name: 'Register Page',
	},
];
