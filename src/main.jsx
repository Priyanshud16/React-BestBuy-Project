import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { BrowserRouter } from "react-router-dom";
// import ReactDOM from 'react-dom';

import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import AuthContextProvider from './component/AuthContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <ChakraProvider>

    <BrowserRouter>
    <AuthContextProvider>
  <App />
  </AuthContextProvider>
    </BrowserRouter>

  
  

 </ChakraProvider>
)
