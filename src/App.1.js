import { useState } from 'react';

export default function App() {
  const options = { year: 'numeric', month: '2-digit', date: '2-digit' };
  const [step, setStep] = useState(1);

  const [count, setCount] = useState(step);

  const handleMinus = () => setCount((c) => c - step);
  const handlePlus = () => setCount((c) => c + step);

  const getDate = (count) =>
    new Date(Date.now() + count * 24 * 60 * 60 * 1000).toDateString(
      'en-US',
      options
    );
  const dayText = (count) => {
    Math.sign(count) === -1 ? `${count} days ago` : `${count} days ago`;
  };
  return (
    <div className="container">
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={handleMinus}>-</button>
        <span>Count: {count}</span>
        <button onClick={handlePlus}>+</button>
      </div>
      <p>
        {count} days from today is {getDate(count)}
      </p>
    </div>
  );
}
