import NavBar from './components/navBar';
import WelcomeSplash from './components/welcomeSplash';
import LandingPageSearch from './components/landingPageSearch';
import Footer from './components/footer';

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