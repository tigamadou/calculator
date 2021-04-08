import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  if (typeof numberOne !== 'number' || typeof numberTwo !== 'number' || !operation) return '0';
  const nOne = Big(Number(numberOne));
  const nTwo = Big(Number(numberTwo));
  let result = 0;

  switch (operation) {
    case '+':
      result = nOne.plus(nTwo);
      break;
    case '-':
      result = nOne.minus(nTwo);
      break;
    case 'x':
      result = nOne.times(nTwo);
      break;
    case '÷':
      result = nOne.div(nTwo).toFixed(1);
      break;
    default:
      result = 0;
      break;
  }
  return result.toString();
};

export default operate;
