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
				This is home.js
				<form method='POST' action='/record'>
				     <input type='text' placeholder='Enter meeting title..' name='title'/>
				     <button className="record-button"><img src={RecordButton} onClick={this.myfunction} /></button>
				  </form>
				<Instruction/>
				<Logo/>
				<RecordContainer recordStart={this.state.recordStart}/>
			</div>
		);
	}
}

export default Home;