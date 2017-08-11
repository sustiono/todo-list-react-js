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
		this.setState({todo: todo.trim()});
	}

	onAddTodos(e) {
		if (e.keyCode === 13) {
			this.setState({todo: ''});
			this.props.addTodos(this.state.todo);
		}
	}

	render() {
		return (
			<input type="text"
				onChange={this.changeTodo}
				value={this.state.todo}
				onKeyDown={this.onAddTodos}
				autoFocus
			/>
		);
	}
}

TodoInput.propTypes = {
	addTodos: PropTypes.func.isRequired
};

export default TodoInput;