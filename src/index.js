import React from 'react';
import { render } from 'react-dom';
import './styles/styles.scss';

const App = () => (
	<div>
		<header className="page-header">
			<section className="title">
				<img className="logo" src="./img/logo.svg" alt="logo" />
				<h1>Lorem Ipsum Title</h1>
				<div className="user">
					<img
						className="light-mode"
						src="./img/icon/light-mode.svg"
						alt="light mode switch"
					/>
					<img className="user-img" src="./img/icon/user-default.svg" alt="user" />
					<ul className="user-menu">
						<li className="user-name">email@website.com</li>
						<li>
							<a href="#">
								<img className="icon" src="./img/icon/user.svg" alt="profile" />
								Profile
							</a>
						</li>
						<li>
							<a href="#">
								<img className="icon" src="./img/icon/logout.svg" alt="logout" />
								Log Out
							</a>
						</li>
					</ul>
				</div>
			</section>

			<nav className="tab-menu">
				<ul>
					<li className="active">
						<a href="#">Totals</a>
					</li>
					<li>
						<a href="#">Consoles</a>
					</li>
					<li>
						<a href="#">Games</a>
					</li>
					<li>
						<a href="#">Controllers</a>
					</li>
					<li>
						<a href="#">Peripherals</a>
					</li>
					<li>
						<a href="#">Amiibo</a>
					</li>
				</ul>
			</nav>

			<table>
				<thead>
					<tr>
						<td>
							<input className="selectAll" type="checkbox" />
							<p>
								<img
									className="icon"
									src="./src/img/icons/single-line-text.svg"
									alt="single line text"
								/>
								Console Name
							</p>
							<img className="icon" src="./src/img/icons/arrow-down.svg" alt="more" />
						</td>
						<td>
							<p>
								<img
									className="icon"
									src="./src/img/icons/formula.svg"
									alt="formula"
								/>
								Total Consoles
							</p>
							<img className="icon" src="./src/img/icons/arrow-down.svg" alt="more" />
						</td>
						<td>
							<p>
								<img
									className="icon"
									src="./src/img/icons/formula.svg"
									alt="formula"
								/>
								Total Games
							</p>
							<img className="icon" src="./src/img/icons/arrow-down.svg" alt="more" />
						</td>
						<td>
							<p>
								<img
									className="icon"
									src="./src/img/icons/formula.svg"
									alt="formula"
								/>
								CIB
							</p>
							<img className="icon" src="./src/img/icons/arrow-down.svg" alt="more" />
						</td>
						<td>
							<p>
								<img
									className="icon"
									src="./src/img/icons/formula.svg"
									alt="formula"
								/>
								Loose
							</p>
							<img className="icon" src="./src/img/icons/arrow-down.svg" alt="more" />
						</td>
						<td>
							<p>
								<img
									className="icon"
									src="./src/img/icons/formula.svg"
									alt="formula"
								/>
								Other
							</p>
							<img className="icon" src="./src/img/icons/arrow-down.svg" alt="more" />
						</td>
					</tr>
				</thead>
			</table>
		</header>
	</div>
);

render(<App />, document.getElementById('app'));
