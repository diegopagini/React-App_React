/** @format */
import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';

import logo from '../logo.svg';
import { routes } from './routes';

export const Navigation = () => {
	return (
		<BrowserRouter>
			<div className='main-layout'>
				<nav>
					<img src={logo} alt='React Logo' />
					<ul>
						{routes.map(({ to, name }) => (
							<li>
								<NavLink to={to} className={({ isActive }) => (isActive ? 'nav-active' : '')}>
									{name}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>

				<Routes>
					{routes.map(({ path, Component }) => (
						<Route path={path} element={<Component />} />
					))}

					<Route path='/*' element={<Navigate to='/lazy1' replace />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};
