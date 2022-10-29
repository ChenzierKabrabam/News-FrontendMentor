/*
 * File Created: Thursday, 27th October 2022 4:20:06 pm
 * Author: Chenzier Kabrabam
 * -----
 * Last Modified: Thursday, 27th October 2022 4:20:15 pm
 * Modified By: Chenzier Kabrabam
 * -----
 * Copyright 2022
 */

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Theme, useTheme } from '@mui/material';

interface NewsProps {
  title: string;
  body: string;
}

const News: React.FC<NewsProps> = (props: NewsProps): JSX.Element => {
  const theme: Theme = useTheme();
  const { title, body } = props;
  return (
    <Box
      sx={{
        borderBottom: '1px solid hsl(36, 100%, 99%)',
        padding: { xs: theme.spacing(3, 0, 3, 0) },
      }}
    >
      <Box
        sx={{
          '& .MuiTypography-root:hover': {
            cursor: 'pointer',
            color: 'hsl(35, 77%, 62%)',
          },
        }}
      >
        <Typography
          variant='h6'
          sx={{
            lineHeight: '2',
          }}
          fontWeight='700'
          color='hsl(36, 100%, 99%)'
        >
          {title}
        </Typography>
      </Box>
      <Typography sx={{ fontSize: '15px' }} fontWeight='600'>
        {body}
      </Typography>
    </Box>
  );
};

export default News;
