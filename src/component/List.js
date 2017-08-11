import React from 'react';
import PropTypes from 'prop-types';

class List extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.onRemoveTodo = this.onRemoveTodo.bind(this);
	}

	onRemoveTodo() {
		this.props.removeTodos(this.props.index);
	}

	render() {
		return (
			<li className="list">
				{this.props.todo}
				<span className="remove-todo" onClick={this.onRemoveTodo}>
					<i className="fa fa-times" />
				</span>
			</li>
		);
	}
}

List.propTypes = {
	todo: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
	removeTodos: PropTypes.func.isRequired
};

export default List;