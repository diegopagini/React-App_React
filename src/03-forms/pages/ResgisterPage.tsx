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

export const ResgisterPage = () => {
	const { onChange, formData } = useForm<RegisterForm>({
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
				<input name='name' type='text' placeholder='Name' value={name} onChange={onChange} />

				<input name='email' type='email' placeholder='Email' value={email} onChange={onChange} />

				<input
					name='password1'
					type='password'
					placeholder='Password'
					value={password1}
					onChange={onChange}
				/>

				<input
					name='password2'
					type='password'
					placeholder='Repeat Password'
					value={password2}
					onChange={onChange}
				/>

				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};
