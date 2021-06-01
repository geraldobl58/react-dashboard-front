import React from 'react';

import { TextField, Button } from '@material-ui/core';

import PaymentRulesDataItem from '../PaymentRulesDataItem';

import { Container, ContainerRulesItem } from './styles';

const PaymentRulesData = ({ name, setName, search, data }) => {
  return (
    <>
      <Container>
        <TextField
          label="Nome"
          variant="outlined"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Button variant="contained" color="primary" onClick={search}>
          Pesquisar
        </Button>
      </Container>
      <ContainerRulesItem>
        <PaymentRulesDataItem data={data} />
      </ContainerRulesItem>
    </>
  );
};

export default PaymentRulesData;
