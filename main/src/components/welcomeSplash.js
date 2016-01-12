export default class WelcomeSplash extends React.Component {
	render() {
		return (
			<div className="splash-wrapper">
				<article className="splash-text-box">
					<h1 className="splash-header">Guides<br />for Programming</h1>
					<p className="splash-text">
						Step by step guides written by professionals in the industry. These guides are easy to follow, feature code snippets, and are updated regularly to utilize the latest build systems, modules, and more. Want to contribute? Sign up and start writing your own guide!
					</p>
				</article>

				<div className="splash-image-box">
					<img src="../assets/img/splash-code-snippet.png" />
				</div>
			</div>
		);
	};
}