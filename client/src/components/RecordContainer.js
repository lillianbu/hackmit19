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
			transcript: "1. The dog is chasing the cat. 2. Or perhaps they're just playing? 3. Where is the dog?",
		}
	}

	render() {
		switch(this.props.recordStart) {
			case true:
				switch (this.state.recordStatus) {
					case 0:
						return (
							<div>
							<OnButton/>
							<Record recordStatus={this.state.recordStatus}/>
							</div>
						);
					case 1:
						return (
							<div>
							<OnButton/>
							<Result transcript={this.state.transcript}/>
							</div>
						);
					case 2:
						return (
							<div>
							<OnButton/>
							<End/>
							</div>
						);
				}
			case false:
				return (
					<div>
					<OffButton/>
					</div>
				);
		}
	}
}

export default RecordContainer;