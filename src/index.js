import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import './assets/css/multistep.css';
import './index.css';


const rootElement = document.getElementById('root');

// react-snap prerenders static HTML at build time; hydrate it when present,
// otherwise fall back to a normal client render.
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    rootElement,
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
