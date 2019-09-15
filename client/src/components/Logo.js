import React from "react";
import "../css/app.css";
import iroh from "../humana.png";

console.log(iroh);

class Logo extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
			<img src={iroh} alt="iroh"/>
				Hello Hello logo logo
			</div>
		);
	}
}

export default Logo;