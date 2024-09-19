import { useState, ReactElement, PropsWithChildren } from 'react';
import { Box, Toolbar, Container } from '@mui/material';
import Topbar from './TopBar';
import TopbarProvider from '@/providers/Topbar.provider';

const MainLayout = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <Container maxWidth= 'xl'>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <TopbarProvider>
          <Topbar/>
        </TopbarProvider>
        <Box
          component="main"
          overflow="auto"
          sx={{
            width: 1,
            flexGrow: 1,
            pt: 5,
            pr: { xs: 3, sm: 5.175 },
            pb: 6.25,
            pl: { xs: 3, sm: 5.25 },
          }}
        >
          <Toolbar
            sx={{
              height: 96,
            }}
          />
          {children}
        </Box>
      </Box>
    </Container>
  );
};

export default MainLayout;

