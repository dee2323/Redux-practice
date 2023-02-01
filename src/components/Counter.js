import classes from './Counter.module.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, increse, toggleCounter } from '../Redux/slices/counterSlice'
const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter)
  const dispatch = useDispatch();
  const toggleCounterHandler = () => { dispatch(toggleCounter()) };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>

      <div className={classes.value}>{showCounter && counter}</div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(increse(5))}>Increment By 5</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
