import React, {useState} from 'react'

const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = e => {
        // after submit to prevent loading of page
        e.preventDefault();
        editTodo(value, task.id);
        // after submiting form we need to clear it so..
        setValue("");
    }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
    <input type="text" className="todo-input" value= {value} placeholder="Update the Task!" onChange={(e) => setValue(e.target.value)}/>
    <button type="submit" className="todo-btn">Update Task</button>
    </form>
  )
};

export default EditTodoForm