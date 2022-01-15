import { useEffect, useRef, useState } from "react";
import "./App.css";
import Todos from "./components/Todos/Todos";
import TodosContext from "./contexts/TodosContext";

// const todosArr = [
//   { id: 1, title: "Wash the dishes", completed: false },
//   { id: 2, title: "Throw the garbage", completed: true },
// ];

function App() {
  // const [showTodos, setShowTodos] = useState(true);
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const counterRef = useRef(0);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((todos) => setTodos(todos));
  }, []);

  const addTodo = (title) => {
    counterRef.current++;
    setTodos([...todos, { id: todos.length + 1, title, completed: false }]);
    setNewTodo("");
  };

  const handleRemoveTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // console.log("APP Rendered");

  return (
    <div className="App">
      <input
        ref={inputRef}
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={() => addTodo(newTodo)}>Add Todo</button>
      {/* <button onClick={() => setShowTodos(!showTodos)}>
        {showTodos ? "Hide" : "Show"} Todos
      </button> */}

      <TodosContext.Provider value={{ removeTodo: handleRemoveTodo }}>
        <Todos todos={todos} />
      </TodosContext.Provider>
    </div>
  );
}

export default App;
