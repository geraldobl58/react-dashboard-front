/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

import {
  CssBaseline,
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
} from '@material-ui/core';

import Appshell from '../../components/Appshell';

import { ContainerWrapper, ContainerMain, ContainerSeparator } from './styles';

import PaymentFormStepOne from '../../template/PaymentFormStepOne';

const MultiStepsForms = () => {
  function getSteps() {
    return ['Dados da regra', 'Regras de Catálogo', 'Regras de Frete'];
  }

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <PaymentFormStepOne />;
      case 1:
        return 'What is an ad group anyways?';
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'Unknown stepIndex';
    }
  }

  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <ContainerWrapper>
      <CssBaseline />

      <Appshell pageTitle="Criar Nova Regra de Exclusão" />

      <ContainerMain>
        <ContainerSeparator />

        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography>All steps completed</Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <>{getStepContent(activeStep)}</>
              <div>
                <Button disabled={activeStep === 0} onClick={handleBack}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </ContainerMain>
    </ContainerWrapper>
  );
};

export default MultiStepsForms;
