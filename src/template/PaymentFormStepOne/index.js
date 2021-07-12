/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { Typography, TextField, Button } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import Autocomplete from '@material-ui/lab/Autocomplete';
import Alert from '@material-ui/lab/Alert';

import TableResults from './Table';

import {
  WrapperContainer,
  ContainerInput,
  ContainerGroup,
  ButtonContainer,
  ContainerButtons,
} from './styles';

import { useSteps } from '../../hooks/Steps';
import { useModal } from '../../hooks/ModalCustom';
import { useRules } from '../../hooks/Rules';

const PaymentFormStepOne = () => {
  const {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    data,
    dataSearch,
    campaign,
    setCampaign,
    ruleName,
    setRuleName,
    search,
  } = useRules();

  const { handleClickOpen } = useModal();
  const { setCurrentStep } = useSteps();

  return (
    <WrapperContainer>
      <Typography variant="h5">Cadastrar nova regra</Typography>
      <Typography variant="subtitle1">
        Insira os dados referente a nova regra que deseja criar
      </Typography>
      <ContainerInput>
        <ContainerGroup>
          <TextField
            label="Nome da Regra"
            variant="outlined"
            value={ruleName}
            onChange={(e) => setRuleName(e.target.value)}
          />
        </ContainerGroup>
        <ContainerGroup>
          <TextField
            label="Data Inicio"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </ContainerGroup>
        <ContainerGroup>
          <TextField
            label="Data Fim"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </ContainerGroup>
      </ContainerInput>
      <ContainerInput>
        <ContainerGroup>
          <Autocomplete
            options={dataSearch}
            getOptionLabel={(item) => item.nome}
            onChange={(event, value) => setCampaign(value?.nome)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="ID ou Nome da campanha"
                variant="outlined"
              />
            )}
          />
        </ContainerGroup>
        <ContainerGroup>
          <ButtonContainer>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={search}
              disabled={!campaign || !dataSearch}
              endIcon={<SearchIcon />}
            >
              Buscar Campanha
            </Button>
          </ButtonContainer>
        </ContainerGroup>
      </ContainerInput>
      <ContainerGroup>
        <TableResults data={data} />
      </ContainerGroup>
      <ContainerGroup>
        <Alert severity="info">Todos os campos são obrigátorios!</Alert>
      </ContainerGroup>
      <ContainerButtons>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleClickOpen}
          style={{ marginRight: '20px' }}
        >
          Cancelar Cadastro
        </Button>
        <Button
          variant="contained"
          color="primary"
          endIcon={<ArrowForwardIcon />}
          onClick={() => setCurrentStep(2)}
          disabled={!ruleName || !startDate || !endDate || !campaign}
        >
          Configurar Regras
        </Button>
      </ContainerButtons>
    </WrapperContainer>
  );
};

export default PaymentFormStepOne;
