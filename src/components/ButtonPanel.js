import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const buttonGroups = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

const ButtonPanel = ({ handleClick }) => (
  <div className="panel">
    {buttonGroups.map((group, index) => (

      <div className="panel-group" key={`group-${(index + 1)}`}>
        {group.map((button) => <Button name={button} handleClick={handleClick} key={button} />)}
      </div>
    ))}

  </div>
);

ButtonPanel.propTypes = {
  handleClick: PropTypes.func,
};

ButtonPanel.defaultProps = {
  handleClick: null,
};

export default ButtonPanel;
