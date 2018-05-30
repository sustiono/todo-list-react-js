import React from 'react';
import PropTypes from 'prop-types';
import 'icheck/skins/all.css';
import {Checkbox} from 'react-icheck';

class List extends React.Component {
	constructor(props) {
	  super(props);

	  this.state = {isHover: false};
	
	  this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
	  this.onHoverList = this.onHoverList.bind(this);
	  this.onMouseLeave = this.onMouseLeave.bind(this);
	}

	onChangeCheckbox(e) {
		let newIndexChecked = parseInt(e.target.value, 10);
		this.props.changeIdexChecked(newIndexChecked);
	}

	onHoverList() {
		if (!this.state.isHover) {
			this.setState({isHover: true});
		}
	}

	onMouseLeave() {
		if (this.state.isHover) {
			this.setState({isHover: false});
		}
	}

	render() {
		let {todo, index, checked, onRemoveTodo, setIndexEditing} = this.props;
		let {isHover} = this.state

		return (
			<li className="list" onMouseOver={this.onHoverList} onMouseLeave={this.onMouseLeave}>
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
					<div className="pull-right btn-action-todo" style={{display: isHover? 'block' : 'none'}}>
						<i className="fa fa-pencil edit-icon" onClick={() => setIndexEditing(todo, index)} />
            <i className="fa fa-times fa-lg remove-icon" onClick={() => onRemoveTodo(index)} />
					</div>
				</div>
			</li>
		);
	}
}

List.propTypes = {
	todo: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
	checked: PropTypes.bool.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  changeIdexChecked: PropTypes.func.isRequired,
  setIndexEditing: PropTypes.func.isRequired
};

export default List;