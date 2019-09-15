import React from "react";
import "../css/app.css";
import Transcript from "./Transcript";

class Result extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				This is result.js
				<div className="transcript-container">
				<Transcript transcript={this.props.transcript}/>
				</div>
			</div>
		);
	}
}

export default Result;