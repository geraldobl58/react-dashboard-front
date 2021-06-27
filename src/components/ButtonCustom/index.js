import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';

export default function ButtonCustom({ children, color }) {
  return (
    <Button
      variant="contained"
      color={color}
      component={Link}
      to="/payments-form"
    >
      {children}
    </Button>
  );
}

ButtonCustom.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
};
