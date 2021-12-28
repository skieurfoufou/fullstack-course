const myHandler = () => alert("clicked");

const InnerElement = () => <div>InnerElement</div>;

const SimpleElement = () => (
  <div onClick={myHandler}>
    <InnerElement />
    <InnerElement />
  </div>
);
ReactDOM.render(SimpleElement, document.getElementById("app"));

function Todo({ id, title }) {
  return (
    <div>
      {id} {title}
    </div>
  );
}
function Tasks() {
  const tasks = ["one", "two", "three"];
  const listItems = tasks.map((task) => <li>{task}</li>);
  return <ul>{listItems}</ul>;
}

function Todos() {
  const todos = [
    { id: 1, title: "wash", completed: false },
    { id: 2, title: "throw", completed: false },
  ];

  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id}>
          {todo.id}
          {todo.title}
        </Todo>
      ))}
    </ul>
  );
}
