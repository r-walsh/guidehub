import NavBar from './components/navBar';
import Footer from './components/footer';
import ProfileInfo from './components/profileInfo';

export default class Profile extends React.Component {
	render() {
		return (
			<div>
				<NavBar />
				<ProfileInfo />
				<Footer />
			</div>
		);
	};
};