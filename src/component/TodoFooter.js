import React from 'react';
import PropTypes from 'prop-types';
import { ButtonToolbar, Button } from 'react-bootstrap';

class TodoFooter extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.onRemoveTodos = this.onRemoveTodos.bind(this);
	}

	onRemoveTodos() {
		this.props.removeTodos(this.props.indexCheckeds);
		this.props.clearSelect();
	}

	render() {
		let {indexCheckeds, ttlTodos, selectAll, clearSelect} = this.props

		return (
			<li className="todo-footer">
				<ButtonToolbar>
				    <Button id='remove-selected' className='pull-right' bsSize="small" disabled={!indexCheckeds.length} onClick={this.onRemoveTodos}>Remove Selected</Button>
				    <Button id='clear-select' className='pull-right' bsSize="small" disabled={!indexCheckeds.length} onClick={() => clearSelect()}>Uncheck All</Button>
				    <Button id='select-all' className='pull-right' bsSize="small" disabled={indexCheckeds.length === ttlTodos} onClick={() => selectAll()}>Check All</Button>
				</ButtonToolbar>
			</li>
		)
	}
}

TodoFooter.propTypes = {
	indexCheckeds: PropTypes.array,
	ttlTodos: PropTypes.number.isRequired,
	selectAll: PropTypes.func.isRequired,
	clearSelect: PropTypes.func.isRequired,
	removeTodos: PropTypes.func.isRequired
}

export default TodoFooter;