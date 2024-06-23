import React from "react";

import { App } from "./App";
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";

import Nav from "./components/nav";
const provider = new AuthProvider(
  "xar_test_579ae885bb13e159dcb5b7ce5c9b09ecd3898891",
  {
    network: "testnet",
    theme: "light",
    connectOptions: {
      compact: true,
    },
    chainConfig: {
      chainId: "84532"
    }
  }
);

ReactDOM.render(
    <React.StrictMode>
      <ProvideAuth provider={provider}>
      <Nav provider={provider}/>
    </ProvideAuth>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={ <App /> }>
          </Route>
        </Routes>
      </BrowserRouter>

      <ToastContainer/>
    </React.StrictMode>,
    
    document.getElementById('root')
  );
  