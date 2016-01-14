import NavBar from './components/navBar';
import Footer from './components/footer';
import GuideInfoCard from './components/guideInfoCard';

export default class SearchResults extends React.Component {
	render() {
		return (
			<div>
				<NavBar />
				<h1 className="results-header">Results:</h1>
				<GuideInfoCard author="Ryan Walsh" title="GuideHub" favorites="97" difficulty="75%" />
				<GuideInfoCard author="Ryan Walsh" title="Directives" favorites="22" difficulty="30%" />
				<GuideInfoCard author="Ryan Walsh" title="Life" favorites="-1" difficulty="100%" />
				<Footer />
			</div>
		);
	};
};