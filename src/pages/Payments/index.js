/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';

import { CssBaseline } from '@material-ui/core';

import Appshell from '../../components/Appshell';
import ButtonCustom from '../../components/ButtonCustom';

import {
  ContainerWrapper,
  ContainerMain,
  ContainerSeparator,
  ContainerButton,
  ContainerHeader,
} from './styles';

import api from '../../services/api';

import { useLoading } from '../../hooks/Loading';

import TableResults from './Table';

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

      <Appshell>
        <ContainerHeader>
          Regras de Pagamentos
          {rules && (
            <ContainerButton>
              <ButtonCustom color="secondary">Nova Regra</ButtonCustom>
            </ContainerButton>
          )}
        </ContainerHeader>
      </Appshell>

      <ContainerMain>
        <ContainerSeparator />
        <TableResults rules={rules} />
      </ContainerMain>
    </ContainerWrapper>
  );
};

export default Payments;
