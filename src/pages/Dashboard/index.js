import React from 'react';

import { CssBaseline } from '@material-ui/core';

import Appshell from '../../components/Appshell';

import { ContainerWrapper, ContainerMain, ContainerSeparator } from './styles';

const Dashboard = () => {
  return (
    <ContainerWrapper>
      <CssBaseline />

      <Appshell pageTitle="Dashboard" />
      <ContainerMain>
        <ContainerSeparator />
        <h1>Dashboard</h1>
      </ContainerMain>
    </ContainerWrapper>
  );
};

export default Dashboard;
