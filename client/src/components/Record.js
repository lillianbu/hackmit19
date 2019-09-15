import React from "react";
import "../css/app.css";

class Record extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
      fetch('/record')
        .then(res => res.json())
        .then(users => this.setState({ users }));
    }

	render() {
		return (
			<div>
				This is record.js
			</div>
		);
	}
}

export default Record;