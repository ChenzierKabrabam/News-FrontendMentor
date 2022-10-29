/*
 * File Created: Monday, 24th October 2022 9:35:24 pm
 * Author: Chenzier Kabrabam
 * -----
 * Last Modified: Monday, 24th October 2022 9:37:14 pm
 * Modified By: Chenzier Kabrabam
 * -----
 * Copyright 2022
 */

import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import { Theme, useTheme } from '@mui/material';

import logo from '../assets/images/logo.svg';
import menuIcon from '../assets/images/icon-menu.svg';
import Menu, { menuData, SMenu } from './Menu';

const Appbar: React.FC = (): JSX.Element => {
  const theme: Theme = useTheme();
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
    console.log('button clicked');
  };
  return (
    <React.Fragment>
      <AppBar
        sx={{
          boxShadow: 'none',
        }}
        color='transparent'
        position='static'
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: {
              xs: theme.spacing(5, 2, 2, 2),
              sm: theme.spacing(10, 6),
              md: theme.spacing(10, 6, 7, 6),
              lg: theme.spacing(10, 15, 7, 15),
              xl: theme.spacing(10, 48, 7, 48),
            },
          }}
        >
          <Box component='img' src={logo} />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}
          >
            {menuData.map((data, index) => (
              <React.Fragment key={index}>
                <SMenu name={data.name} />
              </React.Fragment>
            ))}
          </Box>
          <Box
            component='img'
            src={menuIcon}
            onClick={() => handleToggleMenu()}
            sx={{
              display: { xs: 'block', sm: 'none' },
            }}
          />
        </Box>
      </AppBar>
      <Drawer
        variant='temporary'
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: '60%',
          },
        }}
        anchor='right'
        open={openMenu}
        onClose={() => handleToggleMenu()}
      >
        <Menu menuClose={handleToggleMenu} />
      </Drawer>
    </React.Fragment>
  );
};

export default Appbar;
