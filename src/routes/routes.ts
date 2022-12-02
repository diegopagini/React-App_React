/** @format */
import { LazyExoticComponent } from 'react';

import {
  DynamicForm,
  FormikAbstract,
  FormikBasicPage,
  FormikComponents,
  FormikYupPage,
  RegisterFormikPage,
  RegisterPage,
} from '../03-forms/pages';

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
		to: '/register',
		path: '/register',
		Component: RegisterPage,
		name: 'Register Page',
	},
	{
		to: '/register-formik',
		path: '/register-formik',
		Component: RegisterFormikPage,
		name: 'Register Formik Page',
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
	{
		to: '/abstract',
		path: '/abstract',
		Component: FormikAbstract,
		name: 'Formik Abstract',
	},
	{
		to: '/dynamic',
		path: '/dynamic',
		Component: DynamicForm,
		name: 'Dynamic Form',
	},
];
