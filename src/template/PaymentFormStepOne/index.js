/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import {
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';

import Alert from '@material-ui/lab/Alert';
import Autocomplete from '@material-ui/lab/Autocomplete';

import {
  ContainerInput,
  ContainerGroup,
  ButtonContainer,
  AlertContainer,
} from './styles';

import { useSteps } from '../../hooks/Steps';

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
    saveRules,
  } = useSteps();

  return (
    <>
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
            >
              Buscar Campanha <SearchIcon />
            </Button>
          </ButtonContainer>
        </ContainerGroup>
      </ContainerInput>
      <AlertContainer>
        <Alert severity="info">
          Digite acima os dados que deseja. (Ex.Telha Norte, Portal Web Prêmios)
        </Alert>
      </AlertContainer>
      <ContainerGroup>
        {data.length > 0 && (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Id Campanha</TableCell>
                  <TableCell>Nome</TableCell>
                  <TableCell>Cliente</TableCell>
                  <TableCell>Bandeira</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell component="th" scope="row">
                      {item.id}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {item.nome}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {item.cliente}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {item.bandeira}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </ContainerGroup>
      <Button
        fullWidth
        variant="contained"
        color="secondary"
        onClick={saveRules}
        disabled={!campaign || !ruleName || !startDate || !endDate}
      >
        Salvar
      </Button>
    </>
  );
};

export default PaymentFormStepOne;
