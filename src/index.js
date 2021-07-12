import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';

import LoadingProvider from './hooks/Loading';
import MessageProvider from './hooks/Messages';
import ModalCustomProvider from './hooks/ModalCustom';
import MultiStepsProvider from './hooks/Steps';
import RulesProvider from './hooks/Rules';

import theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ModalCustomProvider>
      <MessageProvider>
        <LoadingProvider>
          <MultiStepsProvider>
            <RulesProvider>
              <App />
            </RulesProvider>
          </MultiStepsProvider>
        </LoadingProvider>
      </MessageProvider>
    </ModalCustomProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
