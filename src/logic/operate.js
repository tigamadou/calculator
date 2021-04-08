import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  if (typeof numberOne !== 'number' || typeof numberTwo !== 'number' || !operation) return '0';
  const nOne = Big(Number(numberOne));
  const nTwo = Big(Number(numberTwo));
  let r = 0;

  switch (operation) {
    case '+':
      r = nOne.plus(nTwo);
      break;
    case '-':
      r = nOne.minus(nTwo);
      break;
    case 'x':
      r = nOne.times(nTwo);
      break;
    case '÷':
      r = nOne.div(nTwo).toFixed(1);
      break;
    default:
      r = 0;
      break;
  }
  return r.toString();
};

export default operate;
