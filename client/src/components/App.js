import React from "react";
import "../css/app.css";
import Home from "./Home";
import Record from "./Record";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
		        <Switch>
		          <Route exact path="/" component={Home} />
		          <Route exact path="/record" component={Record} />
		        </Switch>
		      </div>
		);
	}
}

export default App;