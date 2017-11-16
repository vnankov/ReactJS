import React, { Component } from 'react'
import Todo from './Todo'
import TodoStore from '../stores/TodoStore'
import TodoActions from '../actions/TodoActions'

class TodoList extends Component {
  constructor(props){
    super(props)

    this.state = {
      title: '',
      todos: []
    }
    TodoStore.on('change', () =>{
      this.getAllTodos()
    })
  }
  componentDidMount () {
    this.getAllTodos()
  }
  getAllTodos() {
    TodoStore
      .getAll()
      .then(todos => this.setState({ todos }))
  }
  handleChange (event) {
    this.setState({title: event.target.value})
  }
  createTodo (event) {
    event.preventDefault()
    TodoActions.createTodo(this.state.title)
  }
  render () {
    const { todos } = this.state
    const todoElements = todos.map( todo => (
      <Todo key={todo.id} {...todo} />
    ))
    return(
      <div className='TodoList'>
        <ul> {todoElements} </ul>
        <input
          type='text'
          ref='title'
          value={this.state.title}
          onChange={this.handleChange.bind(this)} />
          <button onClick={this.createTodo.bind(this)}>Add</button>
      </div>
    )
  }
}
export default TodoList
