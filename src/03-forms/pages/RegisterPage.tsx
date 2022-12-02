/** @format */
import '../styles/styles.css';

import { FormEvent } from 'react';

import { useForm } from '../hooks/useForm';

interface RegisterForm {
	name: string;
	email: string;
	password1: string;
	password2: string;
}

export const RegisterPage = () => {
	const { onChange, formData, resetForm, isValidEmail } = useForm<RegisterForm>({
		name: '',
		email: '',
		password1: '',
		password2: '',
	});
	const { name, email, password1, password2 } = formData;

	const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		console.log(formData);
	};

	return (
		<div>
			<h1>Resgister Page</h1>
			<form noValidate onSubmit={onSubmit}>
				<input
					name='name'
					type='text'
					placeholder='Name'
					value={name}
					onChange={onChange}
					className={`${name.trim().length <= 0 && 'has-error'}`}
				/>
				{name.trim().length <= 0 && <span>Este campo es requerido.</span>}

				<input
					name='email'
					type='email'
					placeholder='Email'
					value={email}
					onChange={onChange}
					className={`${!isValidEmail(email) && 'has-error'}`}
				/>
				{!isValidEmail(email) && <span>Este campo es requerido.</span>}

				<input
					name='password1'
					type='password'
					placeholder='Password'
					value={password1}
					onChange={onChange}
				/>
				{password1.trim().length <= 0 && <span>Este campo es requerido.</span>}
				{password1.trim().length < 6 && password1.trim().length > 0 && (
					<span>Mínimo 6 caracteres.</span>
				)}

				<input
					name='password2'
					type='password'
					placeholder='Repeat Password'
					value={password2}
					onChange={onChange}
				/>
				{password2.trim().length <= 0 && <span>Este campo es requerido.</span>}
				{password2.trim().length > 0 && password2 !== password1 && (
					<span>Deben de ser iguales.</span>
				)}

				<button type='submit'>Submit</button>
				<button type='button' onClick={resetForm}>
					Reset
				</button>
			</form>
		</div>
	);
};
