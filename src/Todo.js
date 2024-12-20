import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className="Todo">
     <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
    <div>
       <FontAwesomeIcon icon = {faPenToSquare} onClick={() => editTodo(task.id)}/>
       <FontAwesomeIcon icon = {faTrash} onClick={() => deleteTodo(task.id)}/>
    </div>
    </div>
  )
}

export default Todo;