import React from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Purchases from 'pages/Purchases';
import Alerts from 'pages/Alerts';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';

import UserContextProvider from 'components/shared/UserContextProvider';

const App: React.FC = () => {
  // dev
  axios.defaults.baseURL = 'http://localhost:4000';

  // prod
  // axios.defaults.baseURL = 'https://hodlrbyjason.herokuapp.com/';

  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
};

export default App;
