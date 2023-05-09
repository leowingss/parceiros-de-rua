import React, { useState } from 'react';
import './App.css';
import RoutesApp from './routes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <RoutesApp />
        <ToastContainer autoClose={3000} theme='dark' />
      </BrowserRouter>
    </>
  )
}

export default App;
