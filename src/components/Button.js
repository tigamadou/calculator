import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, handleClick, color, wide,
}) => {
  const [buttonClass, setButtonClass] = useState('button');
  useEffect(() => {
    let btnclass = 'button';
    if (color) {
      btnclass = `${btnclass} white`;
    }

    if (wide) {
      btnclass = `${btnclass} wide`;
    }
    setButtonClass(btnclass);
  }, []);
  return (
    <button type="button" className={buttonClass} onClick={() => handleClick(name)}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func,
  color: PropTypes.bool,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  name: null,
  handleClick: null,
  color: null,
  wide: null,
};

export default Button;
