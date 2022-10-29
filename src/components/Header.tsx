/*
 * File Created: Friday, 28th October 2022 11:45:06 am
 * Author: Chenzier Kabrabam
 * -----
 * Last Modified: Friday, 28th October 2022 11:45:09 am
 * Modified By: Chenzier Kabrabam
 * -----
 * Copyright 2022
 */
import { Box, Typography, useTheme, Theme } from '@mui/material';
import React from 'react';
import MobileWeb3Image from '../assets/images/image-web-3-mobile.jpg';
import DesktopWeb3Image from '../assets/images/image-web-3-desktop.jpg';

const Header: React.FC = (): JSX.Element => {
  const theme: Theme = useTheme();
  return (
    <Box
      sx={{
        width: { xs: '100%', sm: '100%', md: 'calc(100% - 350px)', xl: '65%' },
        display: 'flex',
        flexDirection: { xs: 'column' },
      }}
    >
      <Box
        component='img'
        sx={{ width: { xs: '100%' }, display: { xs: 'block', sm: 'none' } }}
        src={MobileWeb3Image}
      />
      <Box
        component='img'
        sx={{ width: { xs: '100%' }, display: { xs: 'none', sm: 'block' } }}
        src={DesktopWeb3Image}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginTop: theme.spacing(3),
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', sm: '50%' },
          }}
        >
          <Typography
            // variant={}
            // variant='h3'
            sx={{
              color: 'hsl(240, 100%, 5%)',
              lineHeight: '1',
              fontSize: { xs: '50px', md: '60px' },
              margin: { xs: theme.spacing(2, 0) },
            }}
            fontWeight='700'
          >
            The Bright Future of Web 3.0?
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: '100%', sm: '50%' },
            paddingtop: { sm: theme.spacing(5) },
            paddingLeft: { sm: theme.spacing(4) },
          }}
        >
          <Typography
            sx={{
              fontSize: '15px',
              color: 'hsl(236, 13%, 42%)',
            }}
          >
            We dive into the next evolution of the web that claims to put the power of the platforms
            back into the hands of the people. But is it really fulfilling its promise?
          </Typography>
          <Box
            sx={{
              '& :hover': {
                backgroundColor: 'hsl(240, 100%, 5%)',
                cursor: 'pointer',
              },
            }}
          >
            <Box
              component='button'
              sx={{
                border: 'none',
                backgroundColor: 'hsl(5, 85%, 63%)',
                width: '200px',
                height: '50px',
                color: 'hsl(36, 100%, 99%)',
                marginTop: theme.spacing(4),
              }}
            >
              <Typography sx={{ textTransform: 'uppercase', letterSpacing: 2 }} fontWeight='bold'>
                Read More
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
