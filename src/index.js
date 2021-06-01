import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';

import LoadingProvider from './hooks/Loading';
import MessageProvider from './hooks/Messages';

import theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <MessageProvider>
      <LoadingProvider>
        <App />
      </LoadingProvider>
    </MessageProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
