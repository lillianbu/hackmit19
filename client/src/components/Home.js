import React from "react";
import "../css/app.css";
import Instruction from "./Instruction";
import RecordContainer from "./RecordContainer";
import RecordButton from '../css/record_button.png';
import Navbar from './Navbar';
import Iroh from '../humana.png';

class Home extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			recordStart: false,
			meetingTitle: "",
		}
	}

	navigate = (event) => {
		this.setState({recordStart: true});
	}

	render() {
		return (
			<div>
			<Navbar/>
				<div className="home-container pad">
				     Meeting Title: <input type="text body" name="title" className="form-border"/>
				     <button className="record-button"><img src={RecordButton} onClick={this.navigate} /></button>
					<Instruction/>
					<RecordContainer recordStart={this.state.recordStart}/>
				</div>
			</div>
		);
	}
}

export default Home;