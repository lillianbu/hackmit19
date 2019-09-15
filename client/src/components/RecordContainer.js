import React from "react";
import "../css/app.css";
import OffButton from "./OffButton";
import OnButton from "./OnButton";
import Record from "./Record";
import Result from "./Result";
import End from "./End";

class RecordContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			recordStatus: 0, //0 is recording, 1 is result, 2 is end
			transcript: ["You can work with a partner up to two people can submit one entry, but one person can't be part of two groups.",
  'Your score for the whole contest is the number of other entries against which you win more than half the time.',
  "Now we don't just play a few games.",
  'Instead we compute how often one strategy would win against another if they played forever on average.',
  "So actually there's no randomness in this contest.",
  'Strategies are time limited.',
  "If your strategy takes a long time to run, please let us know and we'll give you some guidelines about whether it's too slow.",
  "All strategies must be deterministic, pure functions of the players' scores.",
  "You get to look at your score and their score and make a decision about how many dicey we'll roll, but you cannot look at the history of the game and yet there's a rule that depends on the history of the game and so you cannot optimize for that directly.",
  'Instead you just have to guess what you roll the last turn.',
  'In order to try it to get that feral hogs points.',
  "Winning entries, we'll receive a truly insignificant amount of extra credit, which is certainly not worth the effort required in order to create a winning entry.",
  'Therefore, this is a terrible way to try to earn extra credit points in the class.',
  'You would be much better off just studying for the exam.',
  "However, there's something else you can win, honor and glory, not just this semester but for all time.",
  "Here are the winners of every hog strategy contest that I've ever run back from 2011 when I started teaching this course all the way to the present.",
  'And your name could be on this set of slides forever, at least until I stopped teaching cs 61 a what to prize that is.',
  "So if you don't want to participate, don't worry about it.",
  'But if you do, please enter any strategy you want.',
  "You might've developed one already.",
  'You might want to keep tweaking it, and as soon as you start submitting your strategies, we will start running tournaments and telling you the results so that you could refine your strategies over time next week if you want.',
  "And we'll keep going until a week from Monday."],
		}
	}

	componentDidMount() {
		if (this.state.recordStatus == 0) {
			setTimeout(function() { //Start the timer
		        this.setState({recordStatus: 1}) //After 1 second, set render to true
		    }.bind(this), 5000)
	  	}
	}
	componentWillUnmount() {
	  clearInterval(this.interval);
	}

	render() {
		switch(this.props.recordStart) {
			case true:
				switch (this.state.recordStatus) {
					case 0:
						return (
							<div>
							<Record recordStatus={this.state.recordStatus}/>
							</div>
						);
					case 1:
						return (
							<div>
							<Result transcript={this.state.transcript}/>
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
					</div>
				);
		}
	}
}

export default RecordContainer;