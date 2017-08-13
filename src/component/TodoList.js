import React from 'react';
import PropTypes from 'prop-types';
import List from './List';
import TodoFooter from './TodoFooter';

class TodoList extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {indexCheckeds: []};

	  this.changeIdexChecked = this.changeIdexChecked.bind(this);
	  this.renderFooterTodo = this.renderFooterTodo.bind(this);
	  this.getAllIndex = this.getAllIndex.bind(this);
	  this.selectAll = this.selectAll.bind(this);
	  this.clearSelect = this.clearSelect.bind(this);
	}

	getAllIndex(array) {
		var index = []
		array.map((arr, idx) =>
			index.push(idx)
		);

		return index;
	}

	changeIdexChecked(value) {
		var {indexCheckeds} = this.state
		var index = indexCheckeds.indexOf(value);
		if (index >= 0) {
			indexCheckeds.splice(index, 1);
		} else {
			indexCheckeds.push(value);
		}

		this.setState({indexCheckeds: indexCheckeds});
	}

	selectAll() {
		var allIndex = this.getAllIndex(this.props.todos);
		this.setState({indexCheckeds: allIndex});
	}

	clearSelect() {
		this.setState({indexCheckeds: []});
	}

	renderFooterTodo() {
		var {todos, removeTodos} = this.props
		if (todos.length) {
			return (
				<TodoFooter
					ttlIndexCheckeds={this.state.indexCheckeds.length}
					ttlTodos={todos.length}
					selectAll={this.selectAll}
					clearSelect={this.clearSelect}
					removeTodos={removeTodos}
				/>
			)
		} else {
			return null;
		}
	}

	render() {
		var {indexCheckeds} = this.state
		var {removeTodos, todos} = this.props

		return (
			<ul className="todo-list">
				{todos.map((todo, index) =>
					<List key={todo + '- ' + index}
						todo={todo}
						index={index}
						checked={indexCheckeds.includes(index)}
						indexCheckeds={indexCheckeds}
						changeIdexChecked={this.changeIdexChecked}
						removeTodos={removeTodos}
					/>
				)}
				{this.renderFooterTodo()}
			</ul>
		);
	}
}

TodoList.propTypes = {
	todos: PropTypes.array,
	removeTodos: PropTypes.func.isRequired
};

export default TodoList;