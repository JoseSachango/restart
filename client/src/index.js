import React, { Suspense } from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from "react-dom/client";
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { configureStore } from './redux/Store';
import './data';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import Spinner from './views/spinner/Spinner';
import {Auth0Provider}  from '@auth0/auth0-react'

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <Provider store={configureStore()}>
    <Suspense fallback={<Spinner />}>
      <HashRouter>
        <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}
        >
          <App />
        </Auth0Provider>
        
      </HashRouter>
    </Suspense>
  </Provider>,
  document.getElementById('root'),
);

// If you want to enable client cache, register instead.
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();