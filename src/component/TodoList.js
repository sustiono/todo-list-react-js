import React from 'react';
import List from './List';
import PropTypes from 'prop-types';

class TodoList extends React.Component {
	render() {
		return (
			<ul className="todo-list">
				{this.props.todos.map((todo, index) =>
					<List key={todo + '- ' + index}
						todo={todo}
						index={index}
					/>
				)}
			</ul>
		);
	}
}

TodoList.propTypes = {
	todos: PropTypes.array
};

export default TodoList;