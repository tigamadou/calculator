import React, { useState } from 'react';

import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

const App = () => {
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
    <div className="app">
      <Display result={state.total} />
      <ButtonPanel handleClick={handleClick} />
    </div>
  );
};
export default App;
