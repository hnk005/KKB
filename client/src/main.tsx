import React from 'react';
import ReactDOM from 'react-dom/client';
import { SnackbarProvider } from 'notistack';
import { Provider as StoreProvider } from 'react-redux';
import store from '@redux/store';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <SnackbarProvider maxSnack={3}>
        <App/>
      </SnackbarProvider>
    </StoreProvider>
  </React.StrictMode>,
);