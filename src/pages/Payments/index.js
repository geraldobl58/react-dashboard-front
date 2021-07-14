/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
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
import ButtonCustom from '../../components/ButtonCustom';

import {
  ContainerWrapper,
  ContainerMain,
  ContainerSeparator,
  ContainerButton,
} from './styles';

import api from '../../services/api';

import { useLoading } from '../../hooks/Loading';

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

      <Appshell pageTitle="Regras de Pagamentos">
        {rules && (
          <ContainerButton>
            <ButtonCustom color="secondary">Nova Regra</ButtonCustom>
          </ContainerButton>
        )}
      </Appshell>

      <ContainerMain>
        <ContainerSeparator />
        {rules.length > 0 && (
          <>
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
                      <TableCell>
                        {new Intl.DateTimeFormat('pt-BR', {
                          day: 'numeric',
                          month: 'numeric',
                          year: 'numeric',
                        }).format(new Date(item.data_inicio))}
                      </TableCell>
                      <TableCell>
                        {new Intl.DateTimeFormat('pt-BR', {
                          day: 'numeric',
                          month: 'numeric',
                          year: 'numeric',
                        }).format(new Date(item.data_fim))}
                      </TableCell>
                      <TableCell>
                        <Link to="/payments-form">ver detalhes</Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
      </ContainerMain>
    </ContainerWrapper>
  );
};

export default Payments;
