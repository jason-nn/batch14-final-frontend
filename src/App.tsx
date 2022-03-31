import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Alerts from './pages/Alerts';
import Home from './pages/Home';
import Purchases from './pages/Purchases';

const App: React.FC = () => {
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
