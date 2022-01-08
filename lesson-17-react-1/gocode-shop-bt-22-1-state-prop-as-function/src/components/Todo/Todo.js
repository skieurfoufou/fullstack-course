import "./Todo.css";

export default function Todo({ id, title, completed, removeTodo }) {
  return (
    <div className={`Todo${completed ? ' completed' : ''}`}>
      <button onClick={() => removeTodo(id)}>🗑️</button>
      Todo ID: {id} Title: {title}
    </div>
  );
}
