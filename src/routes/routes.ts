/** @format */
import { LazyExoticComponent } from 'react';

import { FormikBasicPage } from '../03-forms/pages/FormikBasicPage';
import { FormikComponents } from '../03-forms/pages/FormikComponents';
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
		name: 'Formik Basic',
	},
	{
		to: '/yup',
		path: '/yup',
		Component: FormikYupPage,
		name: 'Formik Yup',
	},
	{
		to: '/components',
		path: '/components',
		Component: FormikComponents,
		name: 'Formik Components',
	},
];
