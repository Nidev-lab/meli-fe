import React from 'react';
import ReactDOM from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalProvider } from './context/GlobalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <IntlProvider>
        <GlobalProvider>
          <App />
        </GlobalProvider>
      </IntlProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
