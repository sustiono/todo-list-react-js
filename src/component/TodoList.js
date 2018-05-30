import React from 'react';
import PropTypes from 'prop-types';
import List from './List';
import TodoFooter from './TodoFooter';

class TodoList extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
      indexCheckeds: [],
      indexEditing: null,
      value: ''
    };

	  this.changeIdexChecked = this.changeIdexChecked.bind(this);
	  this.renderFooterTodo = this.renderFooterTodo.bind(this);
	  this.onRemoveTodo = this.onRemoveTodo.bind(this);
	  this.getAllIndex = this.getAllIndex.bind(this);
	}

  componentDidUpdate(prevProps, prevState) {
    let {indexEditing, indexCheckeds} = this.state
    if (indexCheckeds.length !== prevState.indexCheckeds.length && prevState.indexCheckeds.length && indexEditing) {
      this.setState({indexEditing: null})
    }
  }

	getAllIndex(array) {
    let {indexEditing} = this.state
		let index = []
		array.map((arr, idx) =>
			idx !== indexEditing ? index.push(idx): false
		);
		return index;
	}

	onRemoveTodo(index) {
		let {indexCheckeds} = this.state
		let minValue = Math.min(...indexCheckeds);
		let maxValue = Math.max(...indexCheckeds);
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
		let {indexCheckeds} = this.state
		let index = indexCheckeds.indexOf(value);
		if (index >= 0) {
			indexCheckeds.splice(index, 1);
		} else {
			indexCheckeds.push(value);
		}

		this.setState({indexCheckeds});
	}

	renderFooterTodo() {
		let {todos, removeTodos} = this.props
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

  onChangeTodo(e) {
    this.setState({value: e.target.value})
  }

  onUpdateTodo(e) {
    let {indexEditing, value} = this.state
    if ((e && e.keyCode === 13) || !e) {
      this.props.editTodo(value, indexEditing)
      this.setState({value: '', indexEditing: null})
    }
  }

  renderList(todo, index) {
    let {indexCheckeds, indexEditing, value} = this.state
    if (index === indexEditing) {
      return(
        <div key={`${todo}-${index}}`} className='edit-field'>
          <input
            onChange={e => this.onChangeTodo(e)}
            onKeyDown={e => this.onUpdateTodo(e)}
            value={value}
            type="text"
            autoFocus
          />
          <i className="fa fa-times fa-lg" onClick={() => this.setState({indexEditing: null, value: ''})} />
          <i className="fa fa-check fa-lg" onClick={() => this.onUpdateTodo()} />
        </div>
      )
    } else {
      return(
        <List key={`${todo}-${index}-${Date.now()}`}
          todo={todo}
          index={index}
          checked={indexCheckeds.includes(index)}
          indexCheckeds={indexCheckeds}
          changeIdexChecked={this.changeIdexChecked}
          onRemoveTodo={this.onRemoveTodo}
          setIndexEditing={(value, indexEditing) => this.setState({value, indexEditing})}
        />  
      )
    }
  }

	render() {
		let {todos} = this.props
		return (
			<ul className="todo-list">
				{todos.map((todo, index) => this.renderList(todo, index))}
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