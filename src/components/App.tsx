/*
 * File Created: Monday, 24th October 2022 8:48:09 pm
 * Author: Chenzier Kabrabam
 * -----
 * Last Modified: Monday, 24th October 2022 8:55:45 pm
 * Modified By: Chenzier Kabrabam
 * -----
 * Copyright 2022
 */

import React from 'react';
import Appbar from './Appbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Theme, useTheme } from '@mui/material';

import { footerData, newsData } from '../data/data';
import List from './List';
import News from './News';
import Header from './Header';

const App: React.FC = (): JSX.Element => {
  const theme: Theme = useTheme();

  return (
    <React.Fragment>
      <Appbar />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: { xs: 'column' },
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: {
            xs: theme.spacing(2),
            sm: theme.spacing(0, 6),
            md: theme.spacing(0, 6),
            lg: theme.spacing(0, 15),
            xl: theme.spacing(0, 48),
          },
        }}
      >
        {/** header */}
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <Header />
          <Box
            sx={{
              width: { xs: '100%', md: '320px', lg: '330px' },
              backgroundColor: 'hsl(240, 100%, 5%)',
              padding: { xs: theme.spacing(2), sm: theme.spacing(4), md: theme.spacing(2) },
              marginTop: { xs: theme.spacing(6), sm: theme.spacing(6), md: 0 },
              color: 'hsl(236, 13%, 42%)',
              '& .MuiBox-root:last-child': {
                borderBottom: 0,
              },
            }}
          >
            <Typography variant='h4' color='hsl(35, 77%, 62%)'>
              New
            </Typography>
            {newsData.map((data, index) => (
              <React.Fragment key={index}>
                <News title={data.title} body={data.body} />
              </React.Fragment>
            ))}
          </Box>
        </Box>

        {/** footer */}
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', md: 'row' },
            margin: { xs: theme.spacing(8, 0, 4, 0) },
            paddingBottom: theme.spacing(10),
          }}
        >
          {footerData.map((data, index) => (
            <React.Fragment key={index}>
              <List
                image={data.image}
                title={data.title}
                subTitle={data.subTitle}
                body={data.body}
              />
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default App;
