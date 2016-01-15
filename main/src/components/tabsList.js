export default class TabsList extends React.Component {
	render() {
		return (
			<div className="tabsList">
				<div className="selected-tab tab">In Progress</div>
				<div className="tab">Favorited</div>
				<div className="tab">Authored</div>
				<div className="tab">Settings</div>
			</div>
		);
	};
};