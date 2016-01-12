// Component imports
import NavBar from './components/navBar';
import WelcomeSplash from './components/welcomeSplash';

// Style Import for Webpack
import '../styles/main.less';

// Creating the Main component
class Main extends React.Component {
	render() {
		return (
			<div>
				<NavBar />
				<WelcomeSplash />
			</div>
		);
	}
}

// Render the Main component if the element has loaded
let documentReady = () => {
	let reactNode = document.getElementById('react-node');

	if (reactNode) {
		ReactDOM.render(<Main />, reactNode);
	}
}
documentReady();