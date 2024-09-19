import { Menu, Avatar, Button, Tooltip, MenuItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import IconifyIcon from '@components/base/IconifyIcon';
import profile from '@assets/images/account/Profile.png';
import { useState, MouseEvent, useCallback, ReactElement, memo} from 'react';
import userMenuItems from '@data/usermenu-items';
import { useNavigate } from 'react-router-dom';

const UserDropdown = (): ReactElement => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleUserClick = useCallback((event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleUserClose = useCallback((path?: string) => {
    if(path) {
      navigate(path);
    }
    setAnchorEl(null);
  }, []);

  return (
    <>
      <Button
        color="inherit"
        variant="text"
        id="account-dropdown-menu"
        aria-controls={menuOpen ? 'account-dropdown-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={menuOpen ? 'true' : undefined}
        onClick={handleUserClick}
        disableRipple
        sx={{
          borderRadius: 2,
          gap: 3.75,
          px: { xs: 0, sm: 0.625 },
          py: 0.625,
          '&:hover': {
            bgcolor: 'transparent',
          },
        }}
      >
        <Avatar src= {profile} sx={{ width: 44, height: 44}}/>
        <Box>
          <Box 
            sx={{ 
              typography: 'body1', 
              fontWeight: 500, 
              textTransform: 'none', 
              minWidth: 100,
            }}
          >
            Xin chào,
          </Box>
          <Box 
            sx={{ 
              typography: 'body1', 
              fontWeight: 500, 
              textTransform: 'none', 
              minWidth: 100,
            }}
          >
            Nakano Miku
          </Box>
        </Box>
      </Button>
      <Menu
        id="account-dropdown-menu"
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={() => handleUserClose()}
        MenuListProps={{
          'aria-labelledby': 'account-dropdown-button',
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {userMenuItems.map((userMenuItem) => (
          <MenuItem 
            key={userMenuItem.id} 
            onClick={() => handleUserClose(userMenuItem.path)}
            sx={{
              margin: 2,
              borderRadius: 10,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: `0 !important`,
                color: userMenuItem.color,
                width: 14,
                height: 10,
                mr: 3,
                mb: 2.5,
              }}
            >
              <IconifyIcon icon={userMenuItem.icon} color={userMenuItem.color} />
            </ListItemIcon>
            <ListItemText
              sx={(theme) => ({
                color: userMenuItem.color,
                '& .MuiListItemText-primary': {
                  fontSize: theme.typography.subtitle2.fontSize,
                  fontFamily: theme.typography.subtitle2.fontFamily,
                  fontWeight: theme.typography.subtitle2.fontWeight,
                },
              })}
            >
              {userMenuItem.title}
            </ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default memo(UserDropdown);
