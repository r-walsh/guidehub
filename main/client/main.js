class Main extends React.Component {
	render() {
		return (
			<h2>Test</h2>
		);
	}
}

let documentReady = () => {
	let reactNode = document.getElementById('react-node');

	if (reactNode) {
		ReactDOM.render(<Main />, reactNode);
	}
}

documentReady();