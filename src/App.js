import { useState } from 'react';
import './App.css';

const getDate = (count) =>
  new Date(Date.now() + count * 24 * 60 * 60 * 1000).toDateString('en-US');
const getNum = (count) =>
  Math.sign(count) === -1 ? `${Math.abs(count)}` : count;
const getDayText = (count) => (count !== 1 ? 'days' : 'day');
const getTense = (count) => (Math.sign(count) === -1 ? 'ago' : 'from');

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        {getNum(count)} {getDayText(count)} {getTense(count)} today is{' '}
        {getDate(count)}
      </p>
    </div>
  );
}
