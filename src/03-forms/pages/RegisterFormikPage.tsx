/** @format */
import '../styles/styles.css';

import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {
	return (
		<div>
			<h1>Register Formik Page</h1>

			<Formik
				initialValues={{
					name: '',
					email: '',
					password1: '',
					password2: '',
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					name: Yup.string().required().min(2).max(15),
					email: Yup.string().required().email(),
					password1: Yup.string().required().min(6),
					password2: Yup.string()
						.oneOf([Yup.ref('password1')])
						.required(),
				})}>
				{({ handleReset }) => (
					<Form>
						<MyTextInput label='Name' name='name' placeholder='Name' />
						<MyTextInput label='email' name='email' placeholder='Email' type='email' />
						<MyTextInput label='password' name='password1' placeholder='Password' type='password' />
						<MyTextInput label='password' name='password2' placeholder='Password' type='password' />

						<button type='submit'>Submit</button>
						<button type='button' onClick={handleReset}>
							Reset
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
