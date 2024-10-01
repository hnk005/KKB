import { PaletteOptions } from '@mui/material';
import { grey, green, stone, fuchsia, bluishCyan, pinkishRed, yellowOrange } from './colors';

const palette: PaletteOptions = {
  primary: {
    light: stone[200],
    main: stone[0],
    dark: stone[800],
  },
  secondary: {
    light: fuchsia[50],
    main: fuchsia[100],
    dark: fuchsia[400],
  },
  success: {
    light: green[200],
    main: green[600],
    dark: green[900],
  },
  info: {
    light: bluishCyan[100],
    main: bluishCyan[500],
    dark: bluishCyan[900],
  },
  warning: {
    light: yellowOrange[50],
    main: yellowOrange[300],
    dark: yellowOrange[700],
  },
  error: {
    light: pinkishRed[300],
    main: pinkishRed[600],
    dark: pinkishRed[900],
  },
  background: {
    default: stone[50],
    paper: stone[0],
  },
  text: {
    primary: stone[900],
    secondary: stone[600],
    disabled: stone[500]
  },
  divider: stone[700],
  action: {
    focus: stone[400],
    disabled: stone[300],
  },
  common: {
    black: "#198f9f",
    white: "#4DBBC9" 
  },
  grey: grey,
};

export default palette;