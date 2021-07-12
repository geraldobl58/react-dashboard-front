/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { Button, Grid, TextField, Typography } from '@material-ui/core';

import MUIDataTable from 'mui-datatables';

import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import Autocomplete from '@material-ui/lab/Autocomplete';

import {
  WrapperContainer,
  WrapperContent,
  ContainerButtons,
  ContainerDataTable,
} from './styles';

import { useSteps } from '../../hooks/Steps';
import { useModal } from '../../hooks/ModalCustom';
import { useCatalog } from '../../hooks/Catalog';

import columns from './tableHeadCells';
import options from '../../utils/muiDataTableDefaultOptions';

export default function PaymentFormStepTwo() {
  const { setCurrentStep } = useSteps();
  const { handleClickOpen } = useModal();
  const {
    nameOrSku,
    setNameOrSku,
    brands,
    setBrand,
    categories,
    setCategory,
  } = useCatalog();

  const data = [
    ['Joe James', 'Test Corp', 'Yonkers', 'NY'],
    ['John Walsh', 'Test Corp', 'Hartford', 'CT'],
    ['Bob Herm', 'Test Corp', 'Tampa', 'FL'],
    ['James Houston', 'Test Corp', 'Dallas', 'TX'],
  ];

  return (
    <WrapperContainer>
      <Typography variant="h5">
        Configure as Regras de Exclusão do Catálogo
      </Typography>
      <Typography variant="subtitle1">
        Selecione os produtos, marcas ou categorias que deseja inativas
      </Typography>
      <WrapperContent>
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
              options={brands}
              getOptionLabel={(item) => item.nome}
              onChange={(event, value) => setBrand(value?.nome)}
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
              options={categories}
              getOptionLabel={(item) => item.Nome}
              onChange={(event, value) => setCategory(value?.Nome)}
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
              // disabled={!nameOrSku || !brands}
              endIcon={<SearchIcon />}
              style={{ height: '55px' }}
            >
              Buscar Produtos
            </Button>
          </Grid>
        </Grid>
      </WrapperContent>
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
      <ContainerDataTable>
        <MUIDataTable data={data} columns={columns} options={options} />
      </ContainerDataTable>
    </WrapperContainer>
  );
}
