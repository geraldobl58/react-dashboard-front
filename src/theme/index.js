import { createMuiTheme } from '@material-ui/core/styles';
import { ptBR } from '@material-ui/core/locale';

const theme = createMuiTheme(
  {
    palette: {
      primary: {
        light: '#64b5f6',
        main: '#4791db',
        dark: '#115293',
      },
      secondary: {
        light: '#e33371',
        main: '#dc004e',
        dark: '#9a0036',
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
