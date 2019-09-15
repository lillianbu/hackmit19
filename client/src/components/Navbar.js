import React from "react";
import "../css/app.css";
import Logo from "../css/noteify_logo.png"

class Navbar extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="logo">
				<img src={Logo}/>
			</div>
		);
	}
}

export default Navbar;