/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

import { Button, Grid, TextField } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import Autocomplete from '@material-ui/lab/Autocomplete';

import { ContainerButtons } from './styles';

import { useSteps } from '../../hooks/Steps';
import { useModal } from '../../hooks/ModalCustom';

export default function PaymentFormStepTwo() {
  const [isToggle, setIsToggle] = useState(false);

  const [nameOrSku, setNameOrSku] = useState('');
  const [brand, setBrand] = useState('');

  const { setCurrentStep } = useSteps();
  const { handleClickOpen } = useModal();

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <TextField
            label="Filtrar por Nome ou Sku"
            variant="outlined"
            value={nameOrSku}
            onChange={(e) => setNameOrSku(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Autocomplete
            // options={dataSearch}
            // getOptionLabel={(item) => item.nome}
            options={top100Films}
            getOptionLabel={(option) => option.title}
            // onChange={(event, value) => setCampaign(value?.nome)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Filtrar por marca"
                variant="outlined"
              />
            )}
          />
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Autocomplete
            // options={dataSearch}
            // getOptionLabel={(item) => item.nome}
            options={top100Films}
            getOptionLabel={(option) => option.title}
            // onChange={(event, value) => setCampaign(value?.nome)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Filtrar por categoria"
                variant="outlined"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField label="Valor de R$" variant="outlined" />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField label="Valor até R$" variant="outlined" />
        </Grid>
        <Grid item xs={12} md={3}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            // onClick={search}
            // disabled={!nameOrSku || !brand}
            endIcon={<SearchIcon />}
            style={{ height: '55px' }}
          >
            Buscar Produtos
          </Button>
        </Grid>
      </Grid>
      <ContainerButtons>
        <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
          Cancelar Cadastro
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setCurrentStep(1)}
          startIcon={<ArrowBackIcon />}
        >
          Editar Dados da Regra
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCurrentStep(1)}
          endIcon={<ArrowForwardIcon />}
        >
          Configurar regras de frete
        </Button>
      </ContainerButtons>
    </>
  );
}

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
];
