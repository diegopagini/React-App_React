/** @format */
import { ChangeEvent, useState } from 'react';

export const useForm = <T>(initialState: T) => {
	const [formData, setFormData] = useState(initialState);

	const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setFormData((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};

	return { formData, onChange };
};
