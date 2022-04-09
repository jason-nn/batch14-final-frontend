import axios from 'axios';
import React from 'react';
import ActionCableProvider from 'react-actioncable-provider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AlertContextProvider from 'components/alerts/AlertContextProvider';

import PortfolioContextProvider from 'components/home/PortfolioContextProvider';

import PurchaseContextProvider from 'components/purchases/PurchaseContextProvider';

import SymbolContextProvider from 'components/shared/SymbolContextProvider';
import UserContextProvider from 'components/shared/UserContextProvider';
import ModalContextProvider from 'components/shared/modals/ModalContextProvider';
import ToastContextProvider from 'components/shared/toasts/ToastContextProvider';

import Alerts from 'pages/Alerts';
import Home from 'pages/Home';
import Purchases from 'pages/Purchases';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';

import features from 'utils/features';

const App: React.FC = () => {
  axios.defaults.baseURL = process.env.REACT_APP_BACKEND;

  return (
    <ActionCableProvider url={process.env.REACT_APP_WEBSOCKET}>
      <UserContextProvider>
        <SymbolContextProvider>
          <PurchaseContextProvider>
            <AlertContextProvider>
              <PortfolioContextProvider>
                <ToastContextProvider>
                  <ModalContextProvider>
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
                  </ModalContextProvider>
                </ToastContextProvider>
              </PortfolioContextProvider>
            </AlertContextProvider>
          </PurchaseContextProvider>
        </SymbolContextProvider>
      </UserContextProvider>
    </ActionCableProvider>
  );
};

export default App;
