import { useState } from "react";

export default function TodoApp() {
    const [title, setTitle] = useState("INPUT");
    const [todos, setTodos] = useState([]);

    function handleClick(e) {
        e.preventDefault();
        title("Jko");
    }

    function handleChange(event) {
        const value = event.target.value;

        setTitle(value);
    }

     handleSubmit(e) {
        e.preventDefault(); 

        const newTodo = {
            id: crypto.randomUUID(), 
            title: title, 
            completed: false
        };

        const temp = [... todos];
        temp.unshift(newTodo);

        setTodos(temp);
  

     }

    return (
      <div className="todoContainer">
        <form Classname="todoCreateForm" onSubmit={handleSubmit}>
          <input onChange={handleChange} className="todoInput" value={title} />
          <input
            onClick={handleClick}
            type="submit"
            value="Create todo"
            className="buttonCreate"
          />

          {title}
        </form>
      </div>
    );

}