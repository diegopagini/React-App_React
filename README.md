<!-- @format -->

# Router

```javascript
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

# Nested Routes

```javascript
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

# Lazy Load

```javascript
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

# Compound Component Pattern

```javascript
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

# Extensible Styles

```javascript
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
			</div>
		</div>
	);
};
```
