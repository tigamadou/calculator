import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
  <button type="button" >
    {props.name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string
};

Button.defaultProps = {
  name: null
};

export default Button;