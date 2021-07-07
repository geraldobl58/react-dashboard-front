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

export default function TableResults({ data }) {
  return (
    <>
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
    </>
  );
}

TableResults.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
