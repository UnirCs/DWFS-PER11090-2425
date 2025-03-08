import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import Router from "./router/Router";
import {AppProvider} from "./context/AppProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AppProvider>
          <BrowserRouter basename="/cinema">
              <Router />
          </BrowserRouter>
      </AppProvider>
  </React.StrictMode>
);


