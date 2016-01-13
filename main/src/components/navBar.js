export default class NavBar extends React.Component {
	render() {
		return (
			<nav className="nav-bar">
				<a href="/#/"><img src="../assets/img/logo.png" className="logo" /></a>

				<ul className="nav-list">
					<li className="nav-item"><a href="/#/browse">Browse</a></li>
					<li className="nav-item"><a href="/auth/github">Login</a></li>
				</ul>
			</nav>
		);
	};
}