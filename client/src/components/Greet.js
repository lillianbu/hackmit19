import React, { Component } from "react";

class Greet extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		// if (this.props.isExcited) {
		// 	return (
		// 		<div>
		// 			{this.props.text + "!!!"}
		// 		</div>
		// 	);
		// } else {
		// 	return (
		// 		<div>
		// 			{this.props.text}
		// 		</div>
		// 	);
		// }
		return (
			<div>
				{this.props.text + (this.props.isExcited ? '!!!' : '')}
			</div>

			);
	}
}

export default Greet;