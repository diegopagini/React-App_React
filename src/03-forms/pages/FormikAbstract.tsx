/** @format */
import '../styles/styles.css';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import { MySelectInput } from '../components/MySelectInput';
import { MyTextInput } from '../components/MyTextInput';

export const FormikAbstract = () => {
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
						<MyTextInput label='First Name' name='firstName' placeholder='Name' />

						<MyTextInput label='Last Name' name='lastName' placeholder='LastName' />

						<MyTextInput label='email' name='email' placeholder='Email' type='email' />

						<MySelectInput name='jobType' label='Job Type' id='jobType'>
							<option value={''}>Pick somenthing</option>
							<option value='developer'>Developer</option>
							<option value='designer'>Designer</option>
							<option value='it-senior'>IT Senior</option>
							<option value='it-jr'>IT Jr</option>
						</MySelectInput>

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
