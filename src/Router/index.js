import React from 'react';

import { Routes, Route } from 'react-router-dom';

import LandingPage from 'pages/LandingPage/LandingPage';
import MyChoice from 'pages/MyChoice/MyChoice';
import MainLayout from 'layouts/MainLayout';
import PetProfile from 'pages/PetProfile/PetProfile';
import PetSupplimentDetails from 'pages/PetSupplimentDetails/PetSupplimentDetails';
import Cart from 'pages/Cart/Cart';
import OrderSuccess from 'pages/OrderSuccess/OrderSuccess';
import Shop from 'pages/Shop/Shop';
import Login from 'pages/Login/Login';
import ProductDetails from 'pages/ProductDetails/ProductDetails';
import Quiz from 'pages/Quiz/Quiz';
import Questions from 'pages/Quiz/Questions';
import Result from 'pages/Quiz/Result';
import ContactUs from 'pages/ContactUs/ContactUs';
import AboutUs from 'pages/AboutUs/AboutUs';
import Consult from 'pages/Consult/Consult';
import Order from 'pages/Orders/Order';
import TandC from 'pages/AboutUs/TandC';
import PrivacyPolicy from 'pages/AboutUs/PrivacyPolicy';
import UserProfile from 'pages/UserProfile/UserProfile';

const index = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index path='' element={<LandingPage />} />
        <Route path='/choice' element={<MyChoice />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/pet-profile' element={<PetProfile />} />
        <Route
          path='/pet-suppliment-details'
          element={<PetSupplimentDetails />}
        />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order-success' element={<OrderSuccess />} />
        <Route path='/orders' element={<Order />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/questions' element={<Questions />} />
        <Route path='/result' element={<Result />} />
        <Route path='/consult' element={<Consult />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/terms' element={<TandC />} />
        <Route path='/policies' element={<PrivacyPolicy />} />
      </Route>
      <Route path='/login' element={<Login />} />
    </Routes>
  );
};

export default index;
