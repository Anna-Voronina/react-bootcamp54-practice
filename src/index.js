import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import GlobalCSS from 'styles/global.styles';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/react-bootcamp54-practice">
    <ThemeProvider theme={theme}>
      <App />
      <GlobalCSS />
    </ThemeProvider>
  </BrowserRouter>
);
