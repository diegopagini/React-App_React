/** @format */
import { LazyExoticComponent } from 'react';

import { FormikBasicPage } from '../03-forms/pages/FormikBasicPage';

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
		Component: FormikBasicPage,
		name: 'Formik Basic Page',
	},
];
