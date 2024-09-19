import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import BreakpointsProvider from './providers/Breakpoints.provider';
import { ThemeProvider } from '@mui/material';
import { Provider as StoreProvider } from 'react-redux';
import router from '@router/router';
import store from '@redux/store';
import { CssBaseline } from '@mui/material';
import theme from '@theme/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <BreakpointsProvider>
          <CssBaseline />
          <SnackbarProvider maxSnack={3}>
            <RouterProvider router={router}/>
          </SnackbarProvider>
        </BreakpointsProvider> 
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>,
);