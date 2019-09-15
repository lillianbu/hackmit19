import React from "react";
import "../css/app.css";
import Button from "./Button";
import Record from "./Record";
import Result from "./Result";
import End from "./End";

class RecordContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			recordStatus: 1, //0 is recording, 1 is result, 2 is end
		}
	}

	render() {
		switch(this.props.recordStart) {
			case true:
				switch (this.state.recordStatus) {
					case 0:
						return (
							<div>
							<Record/>
							</div>
						);
					case 1:
						return (
							<div>
							<Result/>
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
					<Button/>
					</div>
				);
		}
	}
}

export default RecordContainer;