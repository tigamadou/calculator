import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;

  switch (buttonName) {
    case 'AC':
      total = '';
      next = '';
      operation = null;
      break;
    case '+/-':
      // eslint-disable-next-line no-unused-expressions
      next ? next = (next * -1).toString() : total = (total * -1).toString();
      break;
    case '÷':
    case '-':
    case '+':
    case 'x':
      // eslint-disable-next-line no-unused-expressions
      !next ? operation = buttonName : operation = null;
      break;
    case '%':
      // eslint-disable-next-line no-unused-expressions
      next ? next = operate(next, 100, '÷').toString() : total = operate(total, 100, '÷').toString();
      break;
    case '=':
      total = operate(total, next, operation);
      next = '';
      operation = null;
      break;
    default:
      // eslint-disable-next-line no-unused-expressions
      operation ? next += buttonName : total += buttonName;
  }
  return { total, next, operation };
};

export default calculate;
