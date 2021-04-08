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
      if (next) {
        next *= -1;
      } else {
        total *= -1;
      }
      break;
    case '%':
      if (next) {
        next = operate(next, 100, '÷');
      } else {
        total = operate(total, 100, '÷');
      }
      break;
    case '=':
      total = operate(total, next, operation);
      next = '';
      operation = null;
      break;
    default:
      operation = !next ? buttonName : null;
      break;
  }

  if (total) total = total.toString();
  if (next) next = next.toString();
  return { total, next, operation };
};

export default calculate;
