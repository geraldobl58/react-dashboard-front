/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

import {
  Typography,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Slide,
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';

import Autocomplete from '@material-ui/lab/Autocomplete';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import TableResults from './Table';

import {
  WrapperContainer,
  ContainerInput,
  ContainerGroup,
  ButtonContainer,
  ContainerButtons,
} from './styles';

import { useSteps } from '../../hooks/Steps';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PaymentFormStepOne = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const backScreen = () => {
    return (window.location = '/payments');
  };

  const {
    setCurrentStep,
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
  } = useSteps();

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
          onClick={() => setCurrentStep(2)}
          disabled={!ruleName || !startDate || !endDate || !campaign}
        >
          Configurar Regras
          <ArrowForwardIcon />
        </Button>

        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogContent>
            <DialogContentText>
              Deseja cancelar está ação e começar novamente?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Não
            </Button>
            <Button onClick={backScreen} color="primary">
              Sim
            </Button>
          </DialogActions>
        </Dialog>
      </ContainerButtons>
    </WrapperContainer>
  );
};

export default PaymentFormStepOne;
