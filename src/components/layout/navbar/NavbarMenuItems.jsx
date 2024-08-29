import React from 'react';
import { List, ListItem, ListItemText, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function NavbarMenuItems({ menuItems }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (isMobile) {
    return (
      <List>
        {menuItems.map((item, index) => (
          <ListItem button component={Link} to={item.to} key={index}>
            <ListItemText primary={item.text} sx={{ fontSize: '0.9rem', textTransform: 'uppercase' }} />
          </ListItem>
        ))}
      </List>
    );
  }

  return (
    <Box sx={{ display: 'flex' }}>
      {menuItems.map((item, index) => (
        <Button
          color="inherit"
          sx={{ ml: 1.8, mr: 2.7, fontSize: '0.9rem', textTransform: 'uppercase' }}
          component={Link}
          to={item.to}
          key={index}
        >
          {item.text}
        </Button>
      ))}
    </Box>
  );
}

export default NavbarMenuItems;
