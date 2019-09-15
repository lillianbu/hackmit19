import React from "react";
import "../css/app.css";
import Instruction from "./Instruction";
import RecordContainer from "./RecordContainer";
import Logo from "./Logo";

class Home extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			recordStart: true,
		}
	}

	render() {
		return (
			<div>
				This is home.js
				<Instruction/>
				<Logo/>
				<RecordContainer recordStart={this.state.recordStart}/>
			</div>
		);
	}
}

export default Home;