// server.js
const express = require('express');
const app = express();

app.use(express.json());

app.post('/calculate', (req, res) => {
  const { num1, num2, operator } = req.body;
  let result;

  switch (operator) {
    case '+':
      result = parseFloat(num1) + parseFloat(num2);
      break;
    case '-':
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case '*':
      result = parseFloat(num1) * parseFloat(num2);
      break;
    case '/':
      result = parseFloat(num1) / parseFloat(num2);
      break;
    default:
      result = 'Invalid operator';
  }

  res.json({ result });
});

app.listen(6969, () => {
  console.log('Server listening on port 6969');
});

