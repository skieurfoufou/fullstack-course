import Todo from "../Todo/Todo";
import "./Todos.css";

export default function Todos({ todos, removeTodo }) {
  console.log("Todos Rendered");
  return (
    <div>
      {todos.map(({ id, title, completed }) => (
        <Todo
          key={id}
          removeTodo={removeTodo}
          id={id}
          title={title}
          completed={completed}
        />
      ))}
    </div>
  );
}
