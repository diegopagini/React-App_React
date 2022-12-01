/** @format */
import { useField } from 'formik';

interface Props {
	label: string;
	name: string;
	[x: string]: any;
}

export const MyCheckboxInput = ({ label, ...props }: Props) => {
	const [field, meta] = useField({ ...props, type: 'checkbox' });

	return (
		<>
			<label htmlFor={props.id || props.name}>
				<input id={props.id || props.name} type='checkbox' {...field} {...props} />
				{label}
			</label>
			{meta.touched && meta.error && <span className='error'>{meta.error}</span>}
		</>
	);
};
