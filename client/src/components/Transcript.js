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
			selectedSentences: [],
		}
	}

	handleChange = (event) => {
		let words = event.target.value;
		let wordsList = words.split(", ")
	    this.setState({words: wordsList});
	  };

	handleClick = (i) => {
		console.log(i);
		let newSelectedSentences = this.state.selectedSentences.concat(this.props.transcript[i]);
		this.setState({selectedSentences: newSelectedSentences})
		console.log(this.state.selectedSentences);
	};

	render() {
		let sentences = [];
		console.log(this.state.words);
		console.log(this.state.selectedSentences);
		console.log(this.state.words.concat(this.state.selectedSentences));
		for (var i = 0; i < this.props.transcript.length; i++) {
			let sentence = this.props.transcript[i];

			sentences.push(<div key={i}>
				<button onClick={this.handleClick.bind(this, i)}>{i+1}</button>
				<Highlighter
				    searchWords={this.state.words.concat(this.state.selectedSentences)}
				    autoEscape={true}
				    textToHighlight={sentence}
				  />
				  </div>);
		}
		return (
			<div className="transcript-container">
				<input className="input-box" 
	                      onChange={this.handleChange} 
	                      autoComplete="off" 
	                      placeholder="Enter words"
	                      onFocus={(e) => e.target.placeholder = ""} 
	                      onBlur={(e) => e.target.placeholder = "Enter words"}/>
				<div className="textbox">
				  {sentences}
				</div>
			</div>
		);
	}
}

export default Transcript;