import React from 'react';
import PropTypes from 'prop-types';
import 'icheck/skins/all.css';
import {Checkbox} from 'react-icheck';

class List extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.onRemoveTodo = this.onRemoveTodo.bind(this);
	  this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
	}

	onRemoveTodo() {
		this.props.removeTodos(this.props.index);
	}

	onChangeCheckbox(e) {
		var newIndexChecked = parseInt(e.target.value, 10);
		this.props.changeIdexChecked(newIndexChecked);
	}

	render() {
		var {todo, index, checked} = this.props;

		return (
			<li className="list">
				<div className="list-content">
					<div className="pull-left list-text">
						<Checkbox
					  		checkboxClass="iradio_square-green"
					  		increaseArea="20%"
					  		label={todo}
					  		value={index}
							checked={checked}
							onChange={this.onChangeCheckbox}
						/>
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
	removeTodos: PropTypes.func.isRequired,
	changeIdexChecked: PropTypes.func.isRequired,
	checked: PropTypes.bool.isRequired
};

export default List;