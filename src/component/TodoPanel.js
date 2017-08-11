import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class TodoPanel extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {todos: []};

	  this.addTodos = this.addTodos.bind(this);
	}

	addTodos(todo) {
		var todos = this.state.todos;
		todos.push(todo);
		this.setState({todos: todos});
	}

	render() {
		console.log('todos: ', this.state.todos);
		return (
			<div className="todo-panel">
				<div className="todo-form">
					<TodoForm addTodos={this.addTodos} />
				</div>
				<div className="todo-list">
					<TodoList todos={this.state.todos} />
				</div>
			</div>
		);
	}
}

export default TodoPanel;