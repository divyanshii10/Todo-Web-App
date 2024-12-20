import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        // prevent default beh of refreshing the page after submitting
        e.preventDefault();
        addTodo(value);
        // after submiting form we need to clear it so..
        setValue("");
    }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
    <input type="text" className="todo-input" value= {value} placeholder="What's the task today!?" onChange={(e) => setValue(e.target.value)}/>
    <button type="submit" className="todo-btn">Add Task</button>
    </form>
  )
};

export default TodoForm