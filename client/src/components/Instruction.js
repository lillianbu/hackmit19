import React from "react";
import "../css/app.css";

class Instruction extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="center-textbox">
				<p>Welcome to Note-ify, the easy-to-use digital secretary! Through the power of Rev.ai's accurate Speech-to-Text technology, Note-ify records anything said during a meeting, lecture, or other such event. 
				Upon clicking the microphone button, this application begins to transcribe what is said. Clicking the microphone again results in the recorded message appearing on the home screen, where the user can highlight key words and phrases. 
				When the transcription is marked up as desired, Note-ify allows the user to download the meeting notes for future reference.</p>
			</div>
		);
	}
}

export default Instruction;