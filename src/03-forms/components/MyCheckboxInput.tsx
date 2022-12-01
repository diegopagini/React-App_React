/** @format */
import { ErrorMessage, useField } from 'formik';

interface Props {
	label: string;
	name: string;
	[x: string]: any;
}

export const MyCheckboxInput = ({ label, ...props }: Props) => {
	const [field] = useField({ ...props, type: 'checkbox' });

	return (
		<>
			<label htmlFor={props.id || props.name}>
				<input id={props.id || props.name} type='checkbox' {...field} {...props} />
				{label}
			</label>
			<ErrorMessage name={props.name} component='span' />
		</>
	);
};
