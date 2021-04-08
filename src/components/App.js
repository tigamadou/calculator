import React, { Component } from 'react';

import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const newState = Calculate(this.state, buttonName);
    this.setState(() => ({ ...newState }));
  }

  render() {
    const { total, next } = this.state;
    return (
      <>
        <Display result={(next && next.toString()) || (total && total.toString()) || '0'} />
        <ButtonPanel handleClick={this.handleClick} />
      </>
    );
  }
}

export default App;
