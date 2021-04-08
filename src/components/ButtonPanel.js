
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ handleClick }) => (
  <div className="panel">
    <div className="panel-group">
      <Button name="AC" handleClick={handleClick} />
      <Button name="+/-" handleClick={handleClick} />
      <Button name="%" handleClick={handleClick} />
      <Button name="÷" handleClick={handleClick} />
    </div>
    <div className="panel-group">
      <Button name="7" handleClick={handleClick} />
      <Button name="8" handleClick={handleClick} />
      <Button name="9" handleClick={handleClick} />
      <Button name="X" handleClick={handleClick} />
    </div>
    <div className="panel-group">
      <Button name="4" handleClick={handleClick} />
      <Button name="5" handleClick={handleClick} />
      <Button name="6" handleClick={handleClick} />
      <Button name="-" handleClick={handleClick} />
    </div>
    <div className="panel-group">
      <Button name="1" handleClick={handleClick} />
      <Button name="2" handleClick={handleClick} />
      <Button name="3" handleClick={handleClick} />
      <Button name="+" handleClick={handleClick} />
    </div>
    <div className="panel-group">
      <Button name="0" handleClick={handleClick} />
      <Button name="." handleClick={handleClick} />
      <Button name="=" handleClick={handleClick} />
    </div>
  </div>
);

ButtonPanel.propTypes = {
  handleClick: PropTypes.func,
};

ButtonPanel.defaultProps = {
  handleClick: null,
};

export default ButtonPanel;
