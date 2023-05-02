import React, { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './blurBox.css';
import App from 'App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { Theme } from 'Theme';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

window.onerror = function (errorMsg, url, lineNumber, colNo, error) {
  console.log(errorMsg);
};

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [rtlPlugin],
  prepend: true, // TODO need to check if I really need that option;
});

function RTL(props: PropsWithChildren<{}>) {
  return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}

ReactDOM.render(
  <React.StrictMode>
      <StyledEngineProvider injectFirst>
        {
          // TODO need to check if I really need that <StyledEngineProvider></StyledEngineProvider>;
        }
        <RTL>
          <ThemeProvider theme={Theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </RTL>
      </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
