import React from 'react';
// import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Alerts from './pages/Alerts';
import Home from './pages/Home';
import Purchases from './pages/Purchases';

const App: React.FC = () => {
  axios.defaults.baseURL = 'http://localhost:4000';

  // useEffect(() => {
  //   axios({
  //     method: 'post',
  //     url: 'users/sign_in',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     data: {
  //       user: {
  //         email: 'jason@hodlr.com',
  //         password: 'password',
  //       },
  //     },
  //   })
  //     .then((response) => {
  //       const token = response.data.token;

  //       axios({
  //         method: 'post',
  //         url: 'api/v1/alerts',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           Authorization: `Bearer ${token}`,
  //         },
  //         data: {
  //           cryptocurrency_id: 1,
  //           price: 47000,
  //           operator: 'lower',
  //         },
  //       })
  //         .then((response) => console.log(response))
  //         .catch((error) => console.log(error));
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route path="/alerts" element={<Alerts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
