import { Router, Route, Redirect } from 'react-router';
import Home from './home.js';
import Profile from './profile.js';
import SearchResults from './searchResults';
import Moderator from './moderator';
import Admin from './admin';
import Guide from './guide';

// Render the Main component if the element has loaded
document.addEventListener('DOMContentLoaded', () => {
	let reactNode = document.getElementById('react-node');

	if (reactNode) {
		ReactDOM.render((
			<Router>
				<Route path="/" component={ Home } />
				<Route path="/profile" component={ Profile } />
				<Route path="/results" component={ SearchResults } />
				<Route path="/guide/:guideId" component={ Guide } />
				<Route path="/moderator" component={ Moderator } />
				<Route path="/admin" component={ Admin } />
			</Router>
		), reactNode);
	}
});