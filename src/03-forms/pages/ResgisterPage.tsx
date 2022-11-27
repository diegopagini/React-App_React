/** @format */
import '../styles/styles.css';

import { ChangeEvent, FormEvent, useState } from 'react';

export const ResgisterPage = () => {
	const [registerData, setRegisterData] = useState({
		name: '',
		email: '',
		password1: '',
		password2: '',
	});

	const { name, email, password1, password2 } = registerData;

	const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setRegisterData((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		console.log(registerData);
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
