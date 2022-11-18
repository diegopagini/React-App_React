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
