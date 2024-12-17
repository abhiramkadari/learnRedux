import { useDispatch } from "react-redux"
//it is hook used for calling actions in the slice  of store

import { increment,decrement,reset } from "./counterSlice";

export const CounterControls = () => {

  const dispatch = useDispatch();

  const increaseButton = () =>{
    dispatch(increment())
  }

  const decreaseButton = () =>{
    dispatch(decrement())
  }
 
  const resetButton = () =>{
    dispatch(reset())
  }

  return (
    <div className="mb-5">
      <button className="mx-2" onClick={increaseButton}>Increase</button>
      <button className="mx-2" onClick={decreaseButton}>Decrease</button>
      <button className="mx-2" onClick={resetButton}>Reset</button>
    </div>
  )
}
