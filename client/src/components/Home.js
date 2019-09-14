import React from "react";
import "../css/app.css";
import Instruction from "./Instruction";
import RecordContainer from "./RecordContainer";

class Home extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			recordStart: false,
		}
	}

	render() {
		return (
			<div>
				This is home.js
				<Instruction/>
				<RecordContainer recordStart={this.state.recordStart}/>
			</div>
		);
	}
}

export default Home;