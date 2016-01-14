export default class ProfileInfo extends React.Component {
	render() {
		return (
			<div className="profile-info-container">

				<div className="profile-image-wrapper">
					<img className="profile-image" src="https://avatars1.githubusercontent.com/u/12636781?v=3&s=460" />
				</div>

				<div className="name-info-container">
					<h2 className="display-name">Ryan Walsh</h2>
					<h3 className="username">r-walsh</h3>
				</div>
				
				<table className="profile-guide-info">
					<tr className="number-container">
						<th className="guide-info-number">12</th>
						<th className="guide-info-number">20</th>
						<th className="guide-info-number">47</th>
					</tr>

					<tr>
						<td><i className="fa fa-pencil"></i></td>
						<td><i className="fa fa-heart"></i></td>
						<td><i className="fa fa-eye"></i></td>
					</tr>
				</table>
			</div>
		);
	};
};