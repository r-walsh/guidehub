// Component imports
import { Router, Route } from 'react-router';
import NavBar from './components/navBar';
import WelcomeSplash from './components/welcomeSplash';
import LandingPageSearch from './components/landingPageSearch';
import Footer from './components/footer';

// Style Import for Webpack
import '../styles/main.less';

// Creating the Main component
export default class Home extends React.Component {
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