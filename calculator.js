// calculator.js
import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleOperatorChange = (e) => {
    setOperator(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:6969/calculate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ num1, num2, operator }),
    })
      .then((response) => response.json())
      .then((data) => setResult(data.result));
  };

  return (
    <div>
      <h1>Simple Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input type="number" value={num1} onChange={handleNum1Change} />
        <select value={operator} onChange={handleOperatorChange}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input type="number" value={num2} onChange={handleNum2Change} />
        <button type="submit">=</button>
      </form>
      <p>Result: {result}</p>
    </div>
  );
}

export default Calculator;

