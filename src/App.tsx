import axios from 'axios';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AlertContextProvider from 'components/alerts/AlertContextProvider';

import PortfolioContextProvider from 'components/home/PortfolioContextProvider';

import PurchaseContextProvider from 'components/purchases/PurchaseContextProvider';

import UserContextProvider from 'components/shared/UserContextProvider';
import SymbolContextProvider from 'components/shared/SymbolContextProvider';
import ModalContextProvider from 'components/shared/modals/ModalContextProvider';
import ToastContextProvider from 'components/shared/toasts/ToastContextProvider';

import Alerts from 'pages/Alerts';
import Home from 'pages/Home';
import Purchases from 'pages/Purchases';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';

import features from 'utils/features';

const App: React.FC = () => {
  // dev
  axios.defaults.baseURL = 'http://localhost:4000';

  // prod
  // axios.defaults.baseURL = 'https://hodlrbyjason.herokuapp.com/';

  return (
    <UserContextProvider>
      <PurchaseContextProvider>
        <AlertContextProvider>
          <ToastContextProvider>
            <SymbolContextProvider>
              <ModalContextProvider>
                <PortfolioContextProvider>
                  <BrowserRouter>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/purchases" element={<Purchases />} />
                      {features.alerts ? (
                        <Route path="/alerts" element={<Alerts />} />
                      ) : null}
                      <Route path="/sign-in" element={<SignIn />} />
                      <Route path="/sign-up" element={<SignUp />} />
                    </Routes>
                  </BrowserRouter>
                </PortfolioContextProvider>
              </ModalContextProvider>
            </SymbolContextProvider>
          </ToastContextProvider>
        </AlertContextProvider>
      </PurchaseContextProvider>
    </UserContextProvider>
  );
};

export default App;
