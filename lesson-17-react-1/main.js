const myHandler = () => alert("clicked");

const InnerElement = () => <div>InnerElement</div>;

const SimpleElement = () => (
  <div onClick={myHandler}>
    <InnerElement />
    <InnerElement />
  </div>
);
ReactDOM.render(SimpleElement, document.getElementById("app"));

function Tasks() {
  const tasks = ["one", "two", "three"];
  const listItems = tasks.map((task) => <li>{task}</li>);
  return <ul>{listItems}</ul>;
}
