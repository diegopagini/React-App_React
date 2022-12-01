/** @format */
import '../styles/styles.css';

import { FormikErrors, useFormik } from 'formik';

interface FormValues {
	firstName: string;
	lastName: string;
	email: string;
}

export const FormikBasicPage = () => {
	const validate = ({ firstName, lastName, email }: FormValues) => {
		const errors: FormikErrors<FormValues> = {};
		// firstName
		if (!firstName) errors.firstName = 'Required';
		else if (firstName.length >= 15) errors.firstName = 'Must be 15 characters or less';
		// lastName
		if (!lastName) errors.lastName = 'Required';
		else if (firstName.length >= 12) errors.lastName = 'Must be 12 characters or less';
		// email
		if (!email) errors.email = 'Required';
		else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
			errors.email = 'Invalid email address';

		return errors;
	};

	const { handleChange, values, handleSubmit } = useFormik<FormValues>({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
		},
		onSubmit: (values) => {
			console.log(values);
		},
		validate,
	});

	return (
		<div>
			<h1>Formik Basic Tutorial</h1>

			<form noValidate onSubmit={handleSubmit}>
				<label htmlFor='firstName'>First Name</label>
				<input
					type='text'
					id='firstName'
					name='firstName'
					onChange={handleChange}
					value={values.firstName}
				/>
				<span>First name is required</span>

				<label htmlFor='lastName'>Last Name</label>
				<input
					type='text'
					id='lastName'
					name='lastName'
					onChange={handleChange}
					value={values.lastName}
				/>
				<span>Last name is required</span>

				<label htmlFor='email'>Email Address</label>
				<input type='email' id='email' name='email' onChange={handleChange} value={values.email} />
				<span>Email is required</span>
				<span>Check for an valid email format</span>

				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};
