
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ChakraProvider,ColorModeScript } from "@chakra-ui/react";
 const config = {
   initialColorMode: 'light',
   useSystemColorMode: 'false'
 }
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
     <App />
    </ChakraProvider>
   </React.StrictMode>,
  document.getElementById('root')
);

