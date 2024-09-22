import {
    Stack,
    AppBar,
    Toolbar,
    Link,
    Container,
} from '@mui/material';
// import IconifyIcon from '@components/base/IconifyIcon';
import { ReactElement } from 'react';
import UserDropdown from './include/User';
import Notification from './include/Notificaiton';
import Searchbar from './include/Searchbar';
import { rootPaths } from '@/router/paths';
import Image from '@components/base/Image';
import logoWithText from '@public/Logo-with-text.png';
// import logo from '@public/Logo.png';
import ShoppingCart from './include/Cart';
import { useTopbar } from '@/layouts/main-layout/TopBar/provider';

const Topbar = () : ReactElement => {
  const {showSearchMobile} = useTopbar();
  return (
      <AppBar
        position="fixed"
        sx={{
          left: 0,
          paddingRight: '0 !important',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            component={Stack}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              bgcolor: 'background.paper',
              height: 110,
            }}
          >
            <Stack 
              direction="row" 
              gap={3} 
              alignItems="center" ml={2.5} 
              flex="1 1 52.5%"
            >
              <Link
                href={rootPaths.homeRoot}
                sx={{
                  mt: 3,
                }}
              >
                <Image
                  src={logoWithText}
                  alt={'logo with text'}
                  height={50}
                />
              </Link>
              <Stack 
                direction="row" 
                alignItems="center"
                width={'100%'}
                mr= {10}
              >
                 <Searchbar />
              </Stack>
            </Stack>
            {!showSearchMobile && <Stack
              direction="row"
              gap={5}
              alignItems="center"
              justifyContent="flex-end"
              mr={3.75}
              flex="1 1 20%"
            >
              <ShoppingCart/>
              <Notification />
              <UserDropdown />
            </Stack>}
          </Toolbar>
        </Container>
      </AppBar>
    );
  };
  
  export default Topbar;