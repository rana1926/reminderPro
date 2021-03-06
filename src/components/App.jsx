import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminders} from '../actions';
import '../index.css';
import moment from 'moment';

class App extends Component{
	constructor(props) {
		super(props);
		this.state = {
			text: '', 
			dueDate: ''
		}
	}
	addReminder(){
		this.props.addReminder(this.state.text, this.state.dueDate);
	}
	deleteReminder(id){
		this.props.deleteReminder(id);
	}
	renderReminders(){
		const { reminders } = this.props;
		return (
			<ul className="list-group">
				{
					reminders.map(reminder =>{
						return (
							<li key={reminder.id} className="list-group-item">
								<div className="list-item">
									<div>{reminder.text}</div>
									<div>{moment(new Date(reminder.dueDate)).fromNow()}</div>
								</div>
								<div className="list-item delete-button" onClick={()=>this.deleteReminder(reminder.id)}>&#x2715;</div>
							</li>
						)
					})					
				}
			</ul>
		)
	}
	render(){
		return (
			<div className="App">
				<div className="title">
					Reminder Pro
				</div>
				<div className="form-inline reminder-form">
					<div className="form-group">
						<input
							className="form-control"
							type="text"
							placeholder="I have to..."
							onChange={event => this.setState({text: event.target.value})}
						/>
						<input 
							className="form-control"
							type="datetime-local"
							onChange={event => this.setState({dueDate: event.target.value})}
						/>
					</div>
					<button 
						className="btn btn-success" 
						type="button" 
						onClick={()=>this.addReminder()}>Add Reminder
					</button>
					<div
						className="btn btn-danger"
						onClick={()=>this.props.clearReminders()}
					>
						Clear Reminders
					</div>
				</div>
				{this.renderReminders()}
			</div>
		)
	}
}
function mapStateToProps(state){
	return {
		reminders: state
	}
}

export default connect(mapStateToProps, {addReminder, deleteReminder, clearReminders })(App);