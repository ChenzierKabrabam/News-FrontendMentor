/*
 * File Created: Thursday, 27th October 2022 4:05:00 pm
 * Author: Chenzier Kabrabam
 * -----
 * Last Modified: Thursday, 27th October 2022 4:05:10 pm
 * Modified By: Chenzier Kabrabam
 * -----
 * Copyright 2022
 */

import React from 'react';
import Box from '@mui/material/Box';
import { List, ListItem, ListItemText, Theme, Typography, useTheme } from '@mui/material';
import menuCloseIcon from '../assets/images/icon-menu-close.svg';

interface MenuProps {
  menuClose: () => void;
}
interface MenuData {
  name: string;
}

export const menuData: MenuData[] = [
  {
    name: 'Home',
  },
  {
    name: 'News',
  },
  {
    name: 'Popular',
  },
  {
    name: 'Trending',
  },
  {
    name: 'Categories',
  },
];
const Menu: React.FC<MenuProps> = (props: MenuProps): JSX.Element => {
  const theme: Theme = useTheme();
  const { menuClose } = props;
  return (
    <Box
      sx={{
        padding: theme.spacing(1),
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: theme.spacing(),
        }}
      >
        <Box component='img' src={menuCloseIcon} onClick={() => menuClose()} />
      </Box>
      <Box
        sx={{
          marginTop: theme.spacing(4),
        }}
      >
        <List>
          {menuData.map((data, index) => (
            <ListItem key={index} button>
              <ListItemText
                sx={{
                  color: 'hsl(240, 100%, 5%)',
                  '& 	.MuiListItemText-primary': {
                    fontSize: '18px',
                    fontWeight: '400',
                  },
                }}
                primary={data.name}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

interface SMenuProps {
  name: string;
}

export const SMenu: React.FC<SMenuProps> = (props: SMenuProps): JSX.Element => {
  const { name } = props;
  const theme: Theme = useTheme();
  return (
    <Box
      sx={{
        display: { xs: 'none', sm: 'block' },
        marginLeft: theme.spacing(4),
        '& :hover': {
          color: 'hsl(5, 85%, 63%)',
          cursor: 'pointer',
        },
      }}
    >
      <Typography
        sx={{
          color: 'hsl(236, 13%, 42%)',
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default Menu;
