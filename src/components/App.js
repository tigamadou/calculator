import React, { Component } from 'react';

import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import Calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const newState = Calculate(this.state, buttonName);
    this.setState(() => ({ ...newState }));
  }

  render() {
    const { total } = this.state;
    return (
      <>
        <Display result={total} />
        <ButtonPanel handleClick={this.handleClick} />
      </>
    );
  }
}

export default App;
