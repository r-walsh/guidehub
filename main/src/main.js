// Component imports
import NavBar from './components/navBar';
import WelcomeSplash from './components/welcomeSplash';
import LandingPageSearch from './components/landingPageSearch';
import Footer from './components/footer';

// Style Import for Webpack
import '../styles/main.less';

// Creating the Main component
class Main extends React.Component {
	render() {
		return (
			<div>
				<div id="wrapper">
					<NavBar />
					<WelcomeSplash />
					<LandingPageSearch />
				</div>

				<Footer />
			</div>
		);
	};
};

// Render the Main component if the element has loaded
let documentReady = () => {
	let reactNode = document.getElementById('react-node');

	if (reactNode) {
		ReactDOM.render(<Main />, reactNode);
	}
};
documentReady();