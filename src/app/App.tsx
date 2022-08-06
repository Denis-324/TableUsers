import React from 'react';
import { MainPage } from 'pages';
import { Route, Routes } from 'react-router-dom';

const App = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
  </Routes>
);

export default App;
