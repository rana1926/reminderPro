import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder} from '../actions';

class App extends Component{
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		}
	}
	addReminder(){
		this.props.addReminder(this.state.text);
	}
	render(){
		return (
			<div className="App">
				<div className="title">
					Reminder Pro
				</div>
				<div className="form-inline">
					<div className="form-group">
						<input
							className="form-control"
							type="text"
							placeholder="I have to..."
							onChange={event => this.setState({text: event.target.value})}
						/>
					</div>
					<button className="btn btn-success" type="button" onClick={()=>this.addReminder()}>Add Reminder</button>
				</div>
			</div>
		)
	}
}

export default connect(null, {addReminder})(App);