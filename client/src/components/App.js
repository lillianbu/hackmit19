import React from "react";
import "../css/app.css";
import Home from "./Home";

class App extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<Home/>
			</div>
		);
	}
}

export default App;