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
				<div className="list-content">
					<div className="pull-left list-text">
						{this.props.todo}
					</div>
					<div className="pull-right btn-remove-todo">
						<i className="fa fa-times" onClick={this.onRemoveTodo} />
					</div>
				</div>
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