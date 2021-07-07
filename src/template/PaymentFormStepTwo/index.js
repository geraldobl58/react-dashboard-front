/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { Button } from '@material-ui/core';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useSteps } from '../../hooks/Steps';

export default function PaymentFormStepTwo() {
  const { setCurrentStep } = useSteps();

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => setCurrentStep(1)}
    >
      <ArrowBackIcon /> Editar Dados da Regra
    </Button>
  );
}
