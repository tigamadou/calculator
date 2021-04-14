import React, { useState } from 'react';

import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: '',
    next: '',
    operation: null,
  });

  const handleClick = (buttonName) => {
    const newState = Calculate(state, buttonName);
    setState({ ...newState });
  };

  return (
    <div className="calculatorPage">
      <div>
        <h2>Let’s do some math!</h2>
      </div>
      <div className="calculatorApp">

        <Display result={(state.next && state.next.toString()) || (state.total && state.total.toString()) || '0'} />
        <ButtonPanel handleClick={handleClick} />
      </div>
    </div>
  );
};
export default Calculator;
