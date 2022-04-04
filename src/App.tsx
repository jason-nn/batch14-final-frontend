import axios from 'axios';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UserContextProvider from 'components/shared/UserContextProvider';

import Alerts from 'pages/Alerts';
import Home from 'pages/Home';
import Purchases from 'pages/Purchases';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';

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
