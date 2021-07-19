import React from 'react';
import PropTypes from 'prop-types';

import { CssBaseline, Grid, Typography } from '@material-ui/core';

import Appshell from '../../components/Appshell';
import ChartRules from './ChartRules';
import ChartProducts from './ChartProducts';

import {
  ContainerWrapper,
  ContainerMain,
  ContainerSeparator,
  ContainerPaper,
} from './styles';

const Dashboard = ({ chartData, chartProducts }) => {
  return (
    <ContainerWrapper>
      <CssBaseline />

      <Appshell>Dashboard</Appshell>
      <ContainerMain>
        <ContainerSeparator />
        <Grid container spacing={4}>
          <Grid item xs={12} md={12}>
            <ContainerPaper>
              <ChartRules chartData={chartData} />
            </ContainerPaper>
          </Grid>
          <Grid item xs={12} md={12}>
            <ContainerPaper>
              <ChartProducts chartProducts={chartProducts} />
            </ContainerPaper>
          </Grid>
        </Grid>
      </ContainerMain>
    </ContainerWrapper>
  );
};

Dashboard.defaultProps = {
  chartData: [],
  chartProducts: [],
};

Dashboard.propTypes = {
  chartData: PropTypes.arrayOf(PropTypes.shape({})),
  chartProducts: PropTypes.arrayOf(PropTypes.shape({})),
};

export default Dashboard;
