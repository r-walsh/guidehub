export default class NavBar extends React.Component {
	render() {
		return (
			<nav className="nav-bar">
				<img src="../assets/img/logo.png" className="logo" />

				<ul className="nav-list">
					<li className="nav-item"><a href="/">Browse</a></li>
					<li className="nav-item"><a href="/auth/github">Login</a></li>
				</ul>
			</nav>
		);
	};
}