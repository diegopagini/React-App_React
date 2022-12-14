<!-- @format -->

# Router

```tsx
<Suspense fallback={<span>Loading...</span>}>
	<BrowserRouter>
		<div className='main-layout'>
			<nav>
				<img src={logo} alt='React Logo' />
				<ul>
					{routes.map(({ to, name }) => (
						<li key={to}>
							<NavLink to={to} className={({ isActive }) => (isActive ? 'nav-active' : '')}>
								{name}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>

			<Routes>
				{routes.map(({ path, Component }) => (
					<Route key={path} path={path} element={<Component />} />
				))}

				<Route path='/*' element={<Navigate to={routes[0].to} replace />} />
			</Routes>
		</div>
	</BrowserRouter>
</Suspense>
```

---

# Nested Routes

```tsx
export const routes: Route[] = [
	{
		to: '/lazyload/',
		path: '/lazyload/*',
		Component: LazyLayout,
		name: 'Lazy Layout',
	},
	{
		to: '/no-lazy',
		path: 'no-lazy',
		Component: NoLazy,
		name: 'No Lazy',
	},
];

export const Navigation = () => {
	return (
		<Suspense fallback={<span>Loading...</span>}>
			<BrowserRouter>
				<div className='main-layout'>
					<nav>
						<img src={logo} alt='React Logo' />
						<ul>
							{routes.map(({ to, name }) => (
								<li key={to}>
									<NavLink to={to} className={({ isActive }) => (isActive ? 'nav-active' : '')}>
										{name}
									</NavLink>
								</li>
							))}
						</ul>
					</nav>

					<Routes>
						{routes.map(({ path, Component }) => (
							<Route key={path} path={path} element={<Component />} />
						))}

						<Route path='/*' element={<Navigate to={routes[0].to} replace />} />
					</Routes>
				</div>
			</BrowserRouter>
		</Suspense>
	);
};

export const LazyLayout = () => {
	return (
		<div>
			<h1>LazyLayout Page</h1>

			<ul>
				<li>
					<NavLink to='lazy1'>Lazy 1</NavLink>
				</li>
				<li>
					<NavLink to='lazy2'>Lazy 2</NavLink>
				</li>
				<li>
					<NavLink to='lazy3'>Lazy 3</NavLink>
				</li>
			</ul>

			<Routes>
				<Route path='lazy1' element={<LazyPage1 />} />
				<Route path='lazy2' element={<LazyPage2 />} />
				<Route path='lazy3' element={<LazyPage3 />} />

				<Route path='*' element={<Navigate replace to='lazy1' />} />
			</Routes>
		</div>
	);
};
```

---

# Lazy Load

```typescript
import { lazy, LazyExoticComponent } from 'react';

type JSXComponente = () => JSX.Element;

interface Route {
	to: string;
	path: string;
	Component: LazyExoticComponent<JSXComponente> | JSXComponente;
	name: string;
}

// Lazy Load
const Lazy1 = lazy(() => import('../01-layload/pages/LazyPage1'));
const Lazy2 = lazy(() => import('../01-layload/pages/LazyPage2'));
const Lazy3 = lazy(() => import('../01-layload/pages/LazyPage3'));

export const routes: Route[] = [
	{
		to: '/lazy1',
		path: 'lazy1',
		Component: Lazy1,
		name: 'Lazy-1',
	},
	{
		to: '/lazy2',
		path: 'lazy2',
		Component: Lazy2,
		name: 'Lazy-2',
	},
	{
		to: '/lazy3',
		path: 'lazy3',
		Component: Lazy3,
		name: 'Lazy-3',
	},
];
```

---

# Compound Component Pattern

```tsx
const product = {
	id: '1',
	title: 'Coffee Mug - Card',
	img: './coffee-mug.png',
};

export const ShoppingPage = () => {
	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />

			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap',
					gap: '1rem',
				}}>
				{/* Differents ways to do it. */}
				<ProductCard product={product}>
					<ProductCard.Image />
					<ProductCard.Title />
					<ProductCard.Buttons />
				</ProductCard>
				{/* Or */}
				<ProductCard product={product}>
					<ProductImage />
					<ProducTitle />
					<ProductButtons />
				</ProductCard>
			</div>
		</div>
	);
};
```

---

# Extensible Styles

```tsx
export const ShoppingPage = () => {
	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />

			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap',
					gap: '1rem',
				}}>
				{/* Differents ways to do it. */}
				<ProductCard product={product}>
					<ProductCard.Image className='custom-image' />
					<ProductCard.Title />
					<ProductCard.Buttons />
				</ProductCard>
				{/* or */}
				<ProductCard product={product} className='bg-dark text-white'>
					<ProductImage className='custom-image' />
					<ProducTitle className='text-bold' />
					<ProductButtons className='custom-buttons' />
				</ProductCard>
				{/* or */}
				<ProductCard
					product={product}
					style={{
						backgroundColor: '#ff00ff',
						padding: '1rem',
					}}>
					<ProductImage />
					<ProducTitle />
					<ProductButtons
						style={{
							justifyContent: 'space-between',
						}}
					/>
				</ProductCard>
			</div>
		</div>
	);
};
```

---

# Control Props

```tsx
export const ShoppingPage = () => {
	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />
			<ProductCard
				product={product}
				initialValues={{
					count: 4,
					maxCount: 10,
				}}>
				{({ reset, increaseBy, count, isMaxCountReached }) => (
					<div
						style={{
							alignItems: 'center',
							display: 'flex',
							justifyContent: 'center',
							flexDirection: 'column',
						}}>
						<ProductImage />
						<ProducTitle />
						<ProductButtons />
						<button onClick={reset}>Reset</button>
						<button onClick={() => increaseBy(-2)}>-2</button>
						{!isMaxCountReached && <button onClick={() => increaseBy(+2)}>+2</button>}
						<span>{count}</span>
					</div>
				)}
			</ProductCard>
		</div>
	);
};
```

---

# Forms

```tsx
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
```

---

# Forms With Formik And Yup

```tsx
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
```
