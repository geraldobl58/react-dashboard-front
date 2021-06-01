import React, { useState } from 'react';

import {
  CssBaseline,
  Stepper,
  Step,
  StepLabel,
  Button,
} from '@material-ui/core';

import { useLoading } from '../../hooks/Loading';
import { useMessages } from '../../hooks/Messages';

import api from '../../services/api';

import Appshell from '../../components/Appshell';

import PaymentRulesData from '../../template/PaymentRulesData';

import {
  ContainerWrapper,
  ContainerMain,
  ContainerSeparator,
  ContainerSteps,
} from './styles';

function getSteps() {
  return ['Dados da Regra', 'Regras de Catálogo', 'Regras de Frete'];
}

const Payment = () => {
  const { setIsLoading } = useLoading();
  const { setMessageAttrs } = useMessages();

  const [data, setData] = useState([]);
  const [name, setName] = useState('');

  const search = async () => {
    try {
      setIsLoading(true);
      if (name === '') {
        setMessageAttrs({
          show: true,
          severity: 'warning',
          text: 'Whoops: o campo nome é obrigátorio!',
        });
      }
      const response = await api.get(`/campanhas/?name=${name}`);
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setMessageAttrs({
        show: true,
        severity: 'error',
        text: `${error}` || 'Whoops: Houve um erro no servidor!',
      });
    }
  };

  const [activeStep, setActiveStep] = React.useState(0);
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

  const handlePaymentRulesData = () => {
    return <PaymentRulesData data={data} setName={setName} search={search} />;
  };

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return handlePaymentRulesData();
      case 1:
        return 'What is an ad group anyways?';
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'Unknown stepIndex';
    }
  }

  return (
    <ContainerWrapper>
      <CssBaseline />

      <Appshell pageTitle="Pagamentos" />

      <ContainerMain>
        <ContainerSeparator />
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <>
          {activeStep === steps.length ? (
            <>
              <div>All steps completed</div>
              <Button onClick={handleReset}>Reset</Button>
            </>
          ) : (
            <>
              <div>{getStepContent(activeStep)}</div>
              <ContainerSteps>
                <Button disabled={activeStep === 0} onClick={handleBack}>
                  Cancelar Cadastro
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1
                    ? 'Finalizar'
                    : 'Configurar Regras'}
                </Button>
              </ContainerSteps>
            </>
          )}
        </>
      </ContainerMain>
    </ContainerWrapper>
  );
};

export default Payment;
