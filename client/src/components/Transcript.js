import React from "react";
import ReactDOM from "react-dom";
import Highlighter from "react-highlight-words";
import "../css/app.css";
import ReactPDF from '@react-pdf/renderer';
import MyDocument from './MyDocument';
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

	handleDownload = () => {
		  var element = document.createElement('a');
		  var text = this.state.selectedSentences.join("\n\u2022");
		  console.log("here");
		  // console.log(this.state.selectedSentences);
		  // for (var i = 0; i < this.state.selectedSentences; i++) {
		  // 	text = text.concat(this.state.selectedSentences[i]);
		  // }
		  console.log(text);
		  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent("title\n" + text));
		  element.setAttribute('download', "title");

		  element.style.display = 'none';
		  document.body.appendChild(element);

		  element.click();

		  document.body.removeChild(element);
	}

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
				<button className="download-button" onClick={this.handleDownload}> Download </button>
			</div>
		);
	}
}

export default Transcript;