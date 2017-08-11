import React from 'react';
import PropTypes from 'prop-types';

class List extends React.Component {
	render() {
		return (
			<li className="list">
				{this.props.todo}
			</li>
		);
	}
}

List.propTypes = {
	todo: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired
};

export default List;