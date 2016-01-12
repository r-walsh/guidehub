export default class NavBar extends React.Component {
	render() {
		return (
			<nav className="nav-bar">
				<img src="../assets/img/logo.png" className="logo" />

				<ul className="nav-list">
					<li className="nav-item"><b>Login</b></li>
					<li className="nav-item"><b>Browse</b></li>
				</ul>
			</nav>
		);
	};
}