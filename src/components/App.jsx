import React, { Component } from 'react';

class App extends Component{
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
						/>
					</div>
					<button className="btn btn-success" type="button">Add Reminder</button>
				</div>
			</div>
		)
	}
}

export default App;