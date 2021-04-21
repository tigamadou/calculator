/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const buttonGroups = [];
buttonGroups.push(['AC', '+/-', '%', '÷']);
buttonGroups.push(['7', '8', '9', 'x']);
buttonGroups.push(['4', '5', '6', '-']);
buttonGroups.push(['1', '2', '3', '+']);
buttonGroups.push(['0', '.', '=']);

const ButtonPanel = ({ handleClick }) => (
  <div className="panel">
    {buttonGroups.map((group, index) => (
      <div className="row" key={`row-${(index + 1)}`}>
        {group.map((button, yindex) => (
          (
            (yindex === (group.length - 1))
              ? <Button name={button} handleClick={handleClick} key={button} />
              : <Button name={button} handleClick={handleClick} key={button} color wide={button === '0'} />
          )
        ))}
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
