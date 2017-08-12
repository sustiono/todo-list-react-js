import React from 'react';
import PropTypes from 'prop-types';

class TodoInput extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {todo: ''};

	  this.changeTodo = this.changeTodo.bind(this);
	  this.onAddTodos = this.onAddTodos.bind(this);
	}

	changeTodo(e) {
		var todo = e.target.value;
		this.setState({todo: todo});
	}

	onAddTodos(e) {
		var todo = this.state.todo.trim()
		if (e.keyCode === 13 && todo) {
			this.setState({todo: ''});
			this.props.addTodos(todo);
		}
	}

	render() {
		return (
			<input type="text"
				onChange={this.changeTodo}
				value={this.state.todo}
				onKeyDown={this.onAddTodos}
				placeholder='What needs to be done?'
				autoFocus
			/>
		);
	}
}

TodoInput.propTypes = {
	addTodos: PropTypes.func.isRequired
};

export default TodoInput;