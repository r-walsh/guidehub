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
						<th className="guide-info-number"><span className="profile-authored"><a href="/profile">12</a></span></th>
						<th className="guide-info-number"><span className="profile-favorites"><a href="/profile">20</a></span></th>
						<th className="guide-info-number"><span className="profile-followers"><a href="/profile">47</a></span></th>
					</tr>

					<tr>
						<td><span className="profile-authored"><a href="/profile"><i className="fa fa-pencil"></i></a></span></td>
						<td><span className="profile-favorites"><a href="/profile"><i className="fa fa-heart"></i></a></span></td>
						<td><span className="profile-followers"><a href="/profile"><i className="fa fa-eye"></i></a></span></td>
					</tr>
				</table>

			</div>
		);
	};
};