import React from 'react';
import Header from '../components/header/Header';
import DescriptionProduct from "../components/description/DescriptionProduct";
import SliderCompliteLook from "../components/complite/SliderCompliteLook";
import SliderRecomentProduct from '../components/recoment/SliderRecomentProduct';
import Footer from '../components/footer/Footer';

const Producto = () => {
  return (
    <>
        <Header/>
        <DescriptionProduct/>
        <SliderCompliteLook/>
        <SliderRecomentProduct/>
        <Footer/>
    </>
  )
}

export default Producto