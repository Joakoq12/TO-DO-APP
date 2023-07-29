import { useState } from "react";

export default function TodoApp() {
    const [title, setTitle] = useState("INPUT");

    function handleClick(e) {
        e.preventDefault();
        title("Jko");
    }

    function handleChange(event) {
        const value = event.target.value;

        setTitle(value);
    }

    return (
      <div className="todoContainer">
        <form Classname="todoCreateForm">
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
