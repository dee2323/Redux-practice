import classes from './Counter.module.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
const Counter = () => {
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter)
  const dispatch = useDispatch();
  const toggleCounterHandler = () => { dispatch({ type: 'hideCounter' }) };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>

      <div className={classes.value}>{showCounter && counter}</div>
      <div>
        <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'incrementBy5', amount: 5 })}>Increment By 5</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
