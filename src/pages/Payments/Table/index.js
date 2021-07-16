import React from 'react';
import { Link } from 'react-router-dom';
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

import dateFormatted from '../../../utils/dateFormatted';

export default function TableResults({ rules }) {
  return (
    <>
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
                  <TableRow key={item.id}>
                    <TableCell>{item?.status || 'Aguardando'}</TableCell>
                    <TableCell>{item.nome}</TableCell>
                    <TableCell>{item.campanha}</TableCell>
                    <TableCell>{item?.bandeira || 'Default'}</TableCell>
                    <TableCell>{dateFormatted(item.data_inicio)}</TableCell>
                    <TableCell>{dateFormatted(item.data_fim)}</TableCell>
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
    </>
  );
}

TableResults.propTypes = {
  rules: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
