import React from 'react';
import TodoInput from './TodoInput';
import PropTypes from 'prop-types';

class TodoForm extends React.Component{
	render() {
		return (
			<div className="todo-input">
				<TodoInput addTodos={this.props.addTodos} />
			</div>
		);
	}
}

TodoForm.propTypes = {
	addTodos: PropTypes.func.isRequired
};

export default TodoForm;