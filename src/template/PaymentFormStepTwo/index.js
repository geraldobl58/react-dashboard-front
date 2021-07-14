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
  DataTableEmpty,
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
    products,
    nameOrSku,
    setNameOrSku,
    setBrand,
    dataSearchCatalog,
    setCategory,
    search,
  } = useCatalog();

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
              options={products}
              getOptionLabel={(item) => item.nomeMarca}
              onChange={(event, value) => setBrand(value?.nomeMarca)}
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
              options={products}
              getOptionLabel={(item) => item.nomeCategoria}
              onChange={(event, value) => setCategory(value?.nomeCategoria)}
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
              onClick={search}
              // disabled={!nameOrSku}
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
        {dataSearchCatalog.length === 0 ? (
          <DataTableEmpty>
            <Typography variant="h6">Visualização indisponível </Typography>
            <Typography variant="caption">
              Para visualizar a regra do catálogo de produtos, realize uma busca
              por SKU, preço, marca ou categoria
            </Typography>
          </DataTableEmpty>
        ) : (
          <MUIDataTable
            data={dataSearchCatalog}
            columns={columns}
            options={options}
          />
        )}
      </ContainerDataTable>
    </WrapperContainer>
  );
}
