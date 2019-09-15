import React from "react";
import ReactDOM from "react-dom";
import Highlighter from "react-highlight-words";
import "../css/app.css";
var Highlight = require('react-highlighter');

class Transcript extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			words: [],
		}
	}

	handleChange = (event) => {
		let words = event.target.value;
		let wordsList = words.split(", ")
	    this.setState({words: wordsList});
	  };

	render() {
		return (
			<div className="transcript-container">
				<input className="input-box" 
	                      onChange={this.handleChange} 
	                      autoComplete="off" 
	                      placeholder="Enter words"
	                      onFocus={(e) => e.target.placeholder = ""} 
	                      onBlur={(e) => e.target.placeholder = "Enter words"}/>
				<div className="textbox">
				  <Highlighter
				    searchWords={this.state.words}
				    autoEscape={true}
				    textToHighlight="The dog is chasing the cat. Or perhaps they're just playing? Where is the dog?"
				  />
				</div>
			</div>
		);
	}
}

export default Transcript;