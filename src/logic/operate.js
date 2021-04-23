import Big from 'big.js';

const bigConvert = (number) => {
  if (typeof number !== 'number') {
    return Big(Number(number));
  }
  return Big(number);
};

const operations = {
  plus: (a, b) => a.plus(b),
  minus: (a, b) => a.minus(b),
  times: (a, b) => a.times(b),
  div: (a, b) => a.div(b),
};

const operators = {
  '+': 'plus',
  '-': 'minus',
  x: 'times',
  '÷': 'div',
};

const operate = (numberOne, numberTwo, operation) => {
  if (!numberOne || !numberTwo || !operation) return '0';
  const a = bigConvert(numberOne);
  const b = bigConvert(numberTwo);
  let result = 0;
  if (operators[operation]) {
    const operator = operators[operation];
    const toRun = operations[operator];
    result = toRun(a, b);
  }
  return result.toString();
};

export default operate;
