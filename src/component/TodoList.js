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
	  this.onRemoveTodo = this.onRemoveTodo.bind(this);
	  this.getAllIndex = this.getAllIndex.bind(this);
	}

	getAllIndex(array) {
		var index = []
		array.map((arr, idx) =>
			index.push(idx)
		);
		return index;
	}

	onRemoveTodo(index) {
		var {indexCheckeds} = this.state
		var minValue = Math.min(...indexCheckeds);
		var maxValue = Math.max(...indexCheckeds);
		if (indexCheckeds.includes(index)) {
			indexCheckeds = indexCheckeds.filter((idx) => idx !== index);
			if (index !== maxValue) {
				indexCheckeds = indexCheckeds.map((idx) => idx > index ? idx-1 : idx);
			}
		} else if (index < minValue) {
			indexCheckeds = indexCheckeds.map((idx) => idx-1);
		} else if (index > minValue && index < maxValue) {
			indexCheckeds = indexCheckeds.map((idx) => idx > index ? idx-1 : idx);
		}

		this.setState({indexCheckeds});
		this.props.removeTodos(index);
	}

	changeIdexChecked(value) {
		var {indexCheckeds} = this.state
		var index = indexCheckeds.indexOf(value);
		if (index >= 0) {
			indexCheckeds.splice(index, 1);
		} else {
			indexCheckeds.push(value);
		}

		this.setState({indexCheckeds});
	}

	renderFooterTodo() {
		var {todos, removeTodos} = this.props
		if (todos.length) {
			return (
				<TodoFooter
					indexCheckeds={this.state.indexCheckeds}
					ttlTodos={todos.length}
					selectAll={() => this.setState({indexCheckeds: this.getAllIndex(todos)})}
					clearSelect={() => this.setState({indexCheckeds: []})}
					removeTodos={removeTodos}
				/>
			)
		} else {
			return null;
		}
	}

	render() {
		var {indexCheckeds} = this.state
		var {todos} = this.props

		return (
			<ul className="todo-list">
				{todos.map((todo, index) =>
					<List key={todo + '- ' + index}
						todo={todo}
						index={index}
						checked={indexCheckeds.includes(index)}
						indexCheckeds={indexCheckeds}
						changeIdexChecked={this.changeIdexChecked}
						onRemoveTodo={this.onRemoveTodo}
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