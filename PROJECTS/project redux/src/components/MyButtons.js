import { inc, dec } from "../store/actions/index";
import { useDispatch, useSelector } from "react-redux";
import "./MyButtons.css";

function MyButtons() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="div-buttons">
      <h1>{counter} </h1>
      <button onClick={() => dispatch(inc())}> + </button>
      <button onClick={() => dispatch(dec())}> - </button>
    </div>
  );
}
export default MyButtons;
