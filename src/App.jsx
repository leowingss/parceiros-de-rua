import React, { useState } from 'react';
import './App.css';
import RoutesApp from './routes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './contexts/auth';

function App() {

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <ToastContainer autoClose={3000} theme='dark' />
          <RoutesApp />
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App;
