/*
 * File Created: Monday, 24th October 2022 8:48:09 pm
 * Author: Chenzier Kabrabam
 * -----
 * Last Modified: Monday, 24th October 2022 8:54:37 pm
 * Modified By: Chenzier Kabrabam
 * -----
 * Copyright 2022
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { CssBaseline } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>
);
