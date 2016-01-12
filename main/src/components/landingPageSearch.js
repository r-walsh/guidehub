import SearchBar from './searchBar';

export default class LandingPageSearch extends React.Component {
	render() {
		return (
			<div className="landing-page-search">

				<div className="search-text-box">
					<h2>Search for a guide...</h2>
					<p>We have guides on everything programming related. Check it out.</p>
				</div>

				<button className="home-search">Search</button>

				<div className="search-bar-wrapper-home">
					<SearchBar />
				</div>

			</div>
		)
	};
};