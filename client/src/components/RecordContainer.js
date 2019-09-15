import React from "react";
import "../css/app.css";
import OffButton from "./OffButton";
import OnButton from "./OnButton";
import Record from "./Record";
import Result from "./Result";
import End from "./End";

class RecordContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			recordStatus: 0, //0 is recording, 1 is result, 2 is end
			transcript: ["The dog is chasing the cat.", "Or perhaps they're just playing?", "Where is the dog?"],
		}
	}

	render() {
		switch(this.props.recordStart) {
			case true:
				switch (this.state.recordStatus) {
					case 0:
						return (
							<div>
							<Record recordStatus={this.state.recordStatus}/>
							</div>
						);
					case 1:
						return (
							<div>
							<Result transcript={this.state.transcript}/>
							</div>
						);
					case 2:
						return (
							<div>
							<End/>
							</div>
						);
				}
			case false:
				return (
					<div>
					</div>
				);
		}
	}
}

export default RecordContainer;