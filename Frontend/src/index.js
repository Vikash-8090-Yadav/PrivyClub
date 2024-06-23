import React from "react";

import { App } from "./App";
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";

import Nav from "./components/nav";
import { PrivyProvider } from '@privy-io/react-auth';

import {base, baseSepolia, mainnet, sepolia, polygon, polygonMumbai} from 'viem/chains';
ReactDOM.render(
    <React.StrictMode>

<PrivyProvider
      appId={"clxrjv9tl01pd13d086zgvhyl"}
      onSuccess={(user) => console.log(`User ${user.id} logged in!`)}
      config={{
        // Replace this with your desired default chain
        loginMethods: ['wallet'] ,
        defaultChain: baseSepolia ,
        // Replace this with a list of your desired supported chains
        supportedChains: [ baseSepolia,base] 
    }}
    >
   <Nav/>
    </PrivyProvider>
     
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
  