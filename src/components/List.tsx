/*
 * File Created: Thursday, 27th October 2022 2:53:39 pm
 * Author: Chenzier Kabrabam
 * -----
 * Last Modified: Thursday, 27th October 2022 2:53:53 pm
 * Modified By: Chenzier Kabrabam
 * -----
 * Copyright 2022
 */

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Theme, useTheme } from '@mui/material';

interface ListProps {
  image: string;
  title: string;
  subTitle: string;
  body: string;
}

const List: React.FC<ListProps> = (props: ListProps): JSX.Element => {
  const theme: Theme = useTheme();
  const { body, subTitle, title, image } = props;
  return (
    <Box
      sx={{
        display: 'flex',
        width: { xs: '100%', md: '335px' },
        flexDirection: 'row',
        margin: { xs: theme.spacing(0, 0, 4, 0), md: '0' },
      }}
    >
      <Box
        component='img'
        sx={{
          width: { xs: '100px', sm: '110px' },
          height: { xs: '127px', sm: '130px' },
        }}
        src={image}
      />
      <Box
        sx={{
          padding: { xs: theme.spacing(0, 0, 1, 3) },
          margin: { xs: 0, sm: theme.spacing(0, 0, 0, 5), md: 0 },
        }}
      >
        <Typography
          variant='h5'
          sx={{
            color: 'hsl(233, 8%, 79%)',
            fontWeight: '700',
            lineHeight: '1.5',
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            '& .MuiTypography-root:hover': {
              cursor: 'pointer',
              color: 'hsl(5, 85%, 63%)',
            },
          }}
        >
          <Typography
            //   variant='h6'
            sx={{
              fontWeight: '700',
              color: 'hsl(240, 100%, 5%)',
              lineHeight: '1.9',
              fontSize: '18px',
            }}
          >
            {subTitle}
          </Typography>
        </Box>
        <Typography
          fontSize='15px'
          sx={{
            color: 'hsl(236, 13%, 42%)',
            lineHeight: '1.6',
          }}
        >
          {body}
        </Typography>
      </Box>
    </Box>
  );
};

export default List;
