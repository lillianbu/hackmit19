import React, { Component } from "react";
import Greet from './Greet';

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {isExcited:true};
	}

	componentDidMount() {
		document.addEventListener('keydown', this.onKeyDown);
	}

	onKeyDown = (event) => {
		if (event.key === 'd') {
			this.setState({
				isExcited: !this.state.isExcited
			})
		}
	}

	render() {
		return (
			<div id="app">
				<Greet text="henlo" isExcited={this.state.isExcited}/>
				<Greet text="goodbye" isExcited={this.state.isExcited}/>
				<Greet text="quack" isExcited={this.state.isExcited}/>
			</div>
		);
	}
}

export default App;