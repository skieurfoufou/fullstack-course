import { useState } from "react";
import "./App.css";
import Todos from "./components/Todos/Todos";

const todosArr = [
  { id: 1, title: "Wash the dishes", completed: false },
  { id: 2, title: "Throw the garbage", completed: true },
];

function App() {
  console.log("APP Rendered");

  const [todos, setTodos] = useState(todosArr);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (title) => {
    setTodos([...todos, { id: todos.length + 1, title, completed: false }]);
    setNewTodo("");
  };

  const handleRemoveTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <Todos todos={todos} removeTodo={handleRemoveTodo} />
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={() => addTodo(newTodo)}>Add Todo</button>
    </div>
  );
}

export default App;
