import React from 'react'

const Todo = (props) => (
  <li>
    {props.title} - {props.completed ? 'Done' : 'Pending'}
  </li>
)
 export default Todo
