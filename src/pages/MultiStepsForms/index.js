/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { CssBaseline, Stepper, Step, StepLabel } from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';

import Appshell from '../../components/Appshell';

import PaymentFormStepOne from '../../template/PaymentFormStepOne';
import PaymentFormStepTwo from '../../template/PaymentFormStepTwo';

import { ContainerWrapper, ContainerMain, ContainerSeparator } from './styles';

import { useSteps } from '../../hooks/Steps';

const MultiStepsForms = () => {
  const { currentStep } = useSteps();

  function showStep(step) {
    switch (step) {
      case 1:
        return <PaymentFormStepOne />;
      case 2:
        return <PaymentFormStepTwo />;
      case 3:
        return 'This is the bit I really care about!';
      default:
        return 'Unknown stepIndex';
    }
  }

  return (
    <ContainerWrapper>
      <CssBaseline />

      <Appshell pageTitle="Criar Nova Regra de Exclusão">
        <CloseIcon />
      </Appshell>

      <ContainerMain>
        <ContainerSeparator />

        <Stepper activeStep={currentStep - 1} orientation="horizontal">
          <Step>
            <StepLabel>Dados da regra</StepLabel>
          </Step>
          <Step>
            <StepLabel>Regras de Catálogo</StepLabel>
          </Step>
          <Step>
            <StepLabel>Regras de Frete</StepLabel>
          </Step>
        </Stepper>
        {showStep(currentStep)}
      </ContainerMain>
    </ContainerWrapper>
  );
};

export default MultiStepsForms;
