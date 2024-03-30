import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./counter/slice";

function App() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  return (
    <div className="App">
      <button onClick={() => dispatch(increment())}>Add</button>
      <h2>Count:</h2>
      {count}
    </div>
  );
}

export default App;
