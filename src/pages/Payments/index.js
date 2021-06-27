/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  Typography,
  CssBaseline,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

import Appshell from '../../components/Appshell';

import {
  ContainerWrapper,
  ContainerMain,
  ContainerSeparator,
  ContainerPayments,
  ContainerButton,
} from './styles';

import api from '../../services/api';

import { useLoading } from '../../hooks/Loading';
import ButtonCustom from '../../components/ButtonCustom';

const Payments = () => {
  const [rules, setRules] = useState([]);

  const { setIsLoading } = useLoading();

  useEffect(() => {
    async function getAllRules() {
      setIsLoading(true);
      const response = await api.get('/regras');
      setRules(response.data);
      setIsLoading(false);
    }

    getAllRules();
  }, [setIsLoading]);

  return (
    <ContainerWrapper>
      <CssBaseline />

      <Appshell pageTitle="Regras de Pagamentos" />

      <ContainerMain>
        <ContainerSeparator />
        {rules.length > 0 ? (
          <>
            <ContainerButton>
              <ButtonCustom color="secondary">Nova Regra</ButtonCustom>
            </ContainerButton>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Staus</TableCell>
                    <TableCell>Nome da regra</TableCell>
                    <TableCell>Parceiro</TableCell>
                    <TableCell>Bandeira</TableCell>
                    <TableCell>Data Inicio</TableCell>
                    <TableCell>Data Fim</TableCell>
                    <TableCell>Detalhes</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rules.map((item) => (
                    <TableRow key={item._id}>
                      <TableCell>{item?.status || 'Aguardando'}</TableCell>
                      <TableCell>{item.nome}</TableCell>
                      <TableCell>{item.campanha}</TableCell>
                      <TableCell>{item?.bandeira || 'Default'}</TableCell>
                      <TableCell>{item.data_inicio}</TableCell>
                      <TableCell>{item.data_fim}</TableCell>
                      <TableCell>
                        <Link to="/payments-form">ver detalhes</Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        ) : (
          <ContainerPayments>
            <Typography variant="h5">
              Nenhuma regra de pagamento cadastrada.
            </Typography>
            <Typography variant="subtitle1">
              Crie sua primeira regra agora mesmo
            </Typography>
            <ButtonCustom color="primary">Nova Regra</ButtonCustom>
          </ContainerPayments>
        )}
      </ContainerMain>
    </ContainerWrapper>
  );
};

export default Payments;
