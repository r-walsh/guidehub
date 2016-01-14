export default class GuideInfoCard extends React.Component {
	render() {
		return (
			<div className="guide-info-wrapper">
				<div className="guide-info-card">

					<div className="card-section">
						<h2 className="info-header info-title"><span className="underline">Title:</span> { this.props.title }</h2>
						<p className="info-author"><span className="underline">Author:</span> { this.props.author }</p>
					</div>

					<div className="card-section">
						<h3 className="info-header info-tags"><span className="underline">Tags:</span></h3>
						<p className="tags-list">JavaScript, ES6, React, Node</p>
					</div>

					<div className="card-section">
						<h3 className="info-header info-favorites"><span className="underline">Favorites:</span> { this.props.favorites }</h3>
						<h3 className="info-header info-rating"><span className="underline">Rating:</span> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i></h3>
					</div>

					<div style={ { width: this.props.difficulty } } className="difficulty-bar"></div>

				</div>
			</div>
		);
	};
};