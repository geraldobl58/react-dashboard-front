import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';

export default function ButtonCustom({ children }) {
  return (
    <Button
      variant="contained"
      color="primary"
      component={Link}
      to="/payments-form"
    >
      {children}
    </Button>
  );
}

ButtonCustom.propTypes = {
  children: PropTypes.node.isRequired,
};
