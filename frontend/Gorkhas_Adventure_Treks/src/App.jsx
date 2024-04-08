import React from 'react'
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Header from './components/header/header';
import Homepage from './components/Home/homepage';
import Footer from './components/footer/footer';
import LoginPage from './components/login/login';
import Register from './components/register/register';
import ProductDetails from './components/Home/productdetails';

function App () {
  return (
   <BrowserRouter>
   <Header/>
    <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/product/:id' element={<ProductDetails/>}></Route>
    </Routes>
    <Footer/>
   </BrowserRouter>
  )
}

export default App
