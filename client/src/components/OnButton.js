import React from "react";
import "../css/app.css";
import Button from '@material-ui/core/Button';

class OnButton extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<Button>button</Button>
			</div>
		);
	}
}

export default OnButton;