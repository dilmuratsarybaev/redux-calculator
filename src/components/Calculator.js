import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { calculatedActionTypes } from "../store/calculator/Calculator";
const Calculator = () => {
  const result = useSelector((state) => {
    return state.calculator.result;
  });
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch({ type: calculatedActionTypes.ADD, payload: 20 });
  };
  const subtractHandler = () => {
    dispatch({ type: calculatedActionTypes.SUBTRACT, payload: 5 });
  };
  const multiplyHandler = () => {
    dispatch({ type: calculatedActionTypes.MULTIPLY, payload: 10 });
  };

  const divideHandler = () => {
    dispatch({ type: calculatedActionTypes.DIVIDE, payload: 9 });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Calculator</h1>
      <div className={classes.value}>Result: {result}</div>
      <button onClick={addHandler}>+20</button>
      <button onClick={subtractHandler}>-5</button>
      <button onClick={multiplyHandler}>*10</button>
      <button onClick={divideHandler}>/9</button>
    </main>
  );
};

export default Calculator;
