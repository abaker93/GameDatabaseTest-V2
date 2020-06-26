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

			<section class="table-header">
				<div class="col">
					<input className="selectAll" type="checkbox" />
					<p>
						<img
							className="icon"
							src="./img/icon/single-line-text.svg"
							alt="single line text"
						/>
						Console Name
					</p>
					<img className="drop-down" src="./img/icon/arrow-down.svg" alt="more" />
				</div>
				<div>
					<p>
						<img className="icon" src="./img/icon/formula.svg" alt="formula" />
						Total Consoles
					</p>
					<img className="drop-down" src="./img/icon/arrow-down.svg" alt="more" />
				</div>
				<div>
					<p>
						<img className="icon" src="./img/icon/formula.svg" alt="formula" />
						Total Games
					</p>
					<img className="drop-down" src="./img/icon/arrow-down.svg" alt="more" />
				</div>
				<div>
					<p>
						<img className="icon" src="./img/icon/formula.svg" alt="formula" />
						CIB
					</p>
					<img className="drop-down" src="./img/icon/arrow-down.svg" alt="more" />
				</div>
				<div>
					<p>
						<img className="icon" src="./img/icon/formula.svg" alt="formula" />
						Loose
					</p>
					<img className="drop-down" src="./img/icon/arrow-down.svg" alt="more" />
				</div>
				<div>
					<p>
						<img className="icon" src="./img/icon/formula.svg" alt="formula" />
						Other
					</p>
					<img className="drop-down" src="./img/icon/arrow-down.svg" alt="more" />
				</div>
				<div>
					<p>
						<img className="icon" src="./img/icon/formula.svg" alt="formula" />
						SIB
					</p>
					<img className="drop-down" src="./img/icon/arrow-down.svg" alt="more" />
				</div>
				<div>
					<p>
						<img className="icon" src="./img/icon/formula.svg" alt="formula" />
						Digital
					</p>
					<img className="drop-down" src="./img/icon/arrow-down.svg" alt="more" />
				</div>
				<div>
					<p>
						<img className="icon" src="./img/icon/formula.svg" alt="formula" />
						Paid
					</p>
					<img className="drop-down" src="./img/icon/arrow-down.svg" alt="more" />
				</div>
				<div>
					<p>
						<img className="icon" src="./img/icon/formula.svg" alt="formula" />
						Value
					</p>
					<img className="drop-down" src="./img/icon/arrow-down.svg" alt="more" />
				</div>
				<div>
					<p>
						<img className="icon" src="./img/icon/formula.svg" alt="formula" />
						Appreciation
					</p>
					<img className="drop-down" src="./img/icon/arrow-down.svg" alt="more" />
				</div>
				<div>
					<p>
						<img className="icon" src="./img/icon/formula.svg" alt="formula" />
						Wish List
					</p>
					<img className="drop-down" src="./img/icon/arrow-down.svg" alt="more" />
				</div>
			</section>
		</header>
	</div>
);

render(<App />, document.getElementById('app'));
