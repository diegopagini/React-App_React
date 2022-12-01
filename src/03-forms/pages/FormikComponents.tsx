/** @format */
import '../styles/styles.css';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

export const FormikComponents = () => {
	return (
		<div>
			<h1>Formik Yup Tutorial</h1>

			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
					terms: false,
					jobType: '',
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					firstName: Yup.string()
						.max(15, 'Debe de tener 15 caracteres o menos.')
						.required('Requerido.'),
					lastName: Yup.string()
						.max(12, 'Debe de tener 12 caracteres o menos.')
						.required('Requerido.'),
					email: Yup.string().required('Requerido.').email(),
					jobType: Yup.string().required().notOneOf(['it-jr'], 'Esta opción no es permitida.'),
					terms: Yup.boolean().oneOf([true], 'Debe de aceptar los terminos y condiciones.'),
				})}>
				{(formik) => (
					<Form>
						<label htmlFor='firstName'>First Name</label>
						<Field name='firstName' type='text' id='firstName' />
						<ErrorMessage name='firstName' component={'span'} />

						<label htmlFor='lastName'>Last Name</label>
						<Field name='lastName' type='text' id='lastName' />
						<ErrorMessage name='lastName' component={'span'} />

						<label htmlFor='email'>Email Address</label>
						<Field name='email' type='email' id='email' />
						<ErrorMessage name='email' component={'span'} />

						<label htmlFor='jobType'>Job Type</label>
						<Field name='jobType' as='select' id='jobType'>
							<option value={''}>Pick somenthing</option>
							<option value='developer'>Developer</option>
							<option value='designer'>Designer</option>
							<option value='it-senior'>IT Senior</option>
							<option value='it-jr'>IT Jr</option>
						</Field>
						<ErrorMessage name='jobType' component={'span'} />

						<label htmlFor='terms'>
							<Field name='terms' type='checkbox' id='terms' />
							Terms and conditions
						</label>
						<ErrorMessage name='terms' component={'span'} />

						<button type='submit'>Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
