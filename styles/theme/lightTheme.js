import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: [
      "Source Code Pro",
      "sans-serif"
    ].join(","),
    body1: {
      color: '#414141'
    },
  }
});

export default lightTheme;
