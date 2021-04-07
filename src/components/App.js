import React from 'react';

import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  return (
    <div className="App">
      <div className="calculator">
        <Display />
        <ButtonPanel />
      </div>
    </div>
  );
}

export default App;
