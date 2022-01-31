import "./App.css";
import { createStore } from "redux";
import allReducers from "./store/reducers";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import MyButtons from "./components/MyButtons";

const store = createStore(allReducers, composeWithDevTools());

function App() {
  return (
    <Provider store={store}>
      <div className="App">HI</div>;
      <MyButtons />
    </Provider>
  );
}

export default App;
