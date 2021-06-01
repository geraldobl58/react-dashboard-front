import React from 'react';
import PropTypes from 'prop-types';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

import Alert from '@material-ui/lab/Alert';

import { Container, ContainerAlert } from './styles';

const PaymentRulesDataItem = ({ data }) => {
  return (
    <Container>
      {data.length > 0 ? (
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
                    {item.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {item.client}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {item.flag}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <ContainerAlert>
          <Alert severity="info">
            Digite acima os dados que deseja. (Ex.Telha Norte, Portal Web
            Prêmios)
          </Alert>
        </ContainerAlert>
      )}
    </Container>
  );
};

export default PaymentRulesDataItem;

PaymentRulesDataItem.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      nome: PropTypes.string,
    })
  ),
};

PaymentRulesDataItem.defaultProps = {
  data: [],
};
