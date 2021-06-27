import { createMuiTheme } from '@material-ui/core/styles';
import { ptBR } from '@material-ui/core/locale';

import blue from '@material-ui/core/colors/blue';

import { colors } from '@material-ui/core';

const theme = createMuiTheme(
  {
    palette: {
      primary: {
        dark: blue[900],
        main: blue[800],
        light: blue[300],
      },
      secondary: {
        dark: colors.indigo[500],
        main: colors.indigo[800],
        light: colors.indigo[900],
      },
    },
    props: {
      MuiTextField: {
        variant: 'outlined',
        fullWidth: true,
      },
      MuiSelect: {
        variant: 'outlined',
        fullWidth: true,
      },
    },
  },
  ptBR
);

export default theme;
