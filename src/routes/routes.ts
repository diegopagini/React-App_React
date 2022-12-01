/** @format */
import { LazyExoticComponent } from 'react';

import { FormikBasicPage } from '../03-forms/pages/FormikBasicPage';
import { FormikYupPage } from '../03-forms/pages/FormikYupPage';

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
	{
		to: '/yup',
		path: '/yup',
		Component: FormikYupPage,
		name: 'Formik Yup Page',
	},
];
