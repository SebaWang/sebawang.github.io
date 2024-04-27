import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './helpers/ScrollToTop';

import ReactGA from 'react-ga';
ReactGA.initialize('G-R10K76GX1R');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

