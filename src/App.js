import { CartProvider } from 'context/CartContext';
import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import Router from 'Router';
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.data.handleGetSliders();
    dispatch.data.handleGetVideos();
    dispatch.data.handleGetHealthConditions();
    // eslint-disable-next-line
  }, []);
  return (
      <BrowserRouter>
        <Router />
      </BrowserRouter>
  );
};

export default App;
