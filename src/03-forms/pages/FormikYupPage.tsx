/** @format */
import '../styles/styles.css';

import { useFormik } from 'formik';
import * as Yup from 'yup';

interface FormValues {
	firstName: string;
	lastName: string;
	email: string;
}

export const FormikYupPage = () => {
	const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik<FormValues>(
		{
			initialValues: {
				firstName: '',
				lastName: '',
				email: '',
			},
			onSubmit: (values) => {
				console.log(values);
			},
			validationSchema: Yup.object({
				firstName: Yup.string()
					.max(15, 'Debe de tener 15 caracteres o menos')
					.required('Requerido'),
				lastName: Yup.string().max(12, 'Debe de tener 12 caracteres o menos').required('Requerido'),
				email: Yup.string().required('Requerido').email(),
			}),
		}
	);

	return (
		<div>
			<h1>Formik Yup Tutorial</h1>

			<form noValidate onSubmit={handleSubmit}>
				<label htmlFor='firstName'>First Name</label>
				<input
					type='text'
					id='firstName'
					name='firstName'
					onBlur={handleBlur}
					onChange={handleChange}
					value={values.firstName}
				/>
				{touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

				<label htmlFor='lastName'>Last Name</label>
				<input
					type='text'
					id='lastName'
					name='lastName'
					onBlur={handleBlur}
					onChange={handleChange}
					value={values.lastName}
				/>
				{touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

				<label htmlFor='email'>Email Address</label>
				<input
					type='email'
					id='email'
					name='email'
					onBlur={handleBlur}
					onChange={handleChange}
					value={values.email}
				/>
				{touched.email && errors.email && <span>{errors.email}</span>}

				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};
