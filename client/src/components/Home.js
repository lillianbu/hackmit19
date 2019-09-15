import React from "react";
import "../css/app.css";
import Instruction from "./Instruction";
import RecordContainer from "./RecordContainer";
import RecordButton from '../css/record_button.png';

class Home extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			recordStart: true,
			meetingTitle: "",
		}
	}

	render() {
		return (
			<div>
				<form action="http://localhost:3000/record" method="post">
				     Meeting Title: <input type="text" name="title" />
				     <button className="record-button"><img src={RecordButton} onClick={this.myfunction} /></button>
				 </form>
				<Instruction/>
				<RecordContainer recordStart={this.state.recordStart}/>
			</div>
		);
	}
}

export default Home;