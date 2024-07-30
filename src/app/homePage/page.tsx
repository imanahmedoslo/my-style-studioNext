import React from 'react';
import ProductCard from '../components/productCard';
import Carousel from '../components/carousel';

 function Home() {
  return (
    <div className='h-full px-4 py-2 flex flex-col gap-3 '>
      <div className='h-50dvh w-full'>
        <Carousel images={["https://hips.hearstapps.com/hmg-prod/images/hoka-zinal-13085-1643565794.jpg?crop=1.00xw:0.752xh;0,0.115xh&amp;resize=1200:*"]} />
      </div>
      {/* TODO Create component */}
      <div className='w-full min-h-1/2 h-fit flex flex-row flex-wrap justify-center items-center bg-scroll'>
        <ProductCard  title="Sample Product" price={100} image="https://i.ibb.co/tBLDVnF/custom-Blue-removebg-preview.png"/>
        <ProductCard  title="Sample Product" price={100} image="https://i.ibb.co/tBLDVnF/custom-Blue-removebg-preview.png"/>
        <ProductCard  title="Sample Product" price={100} image="https://i.ibb.co/tBLDVnF/custom-Blue-removebg-preview.png"/>
        <ProductCard  title="Sample Product" price={100} image="https://i.ibb.co/tBLDVnF/custom-Blue-removebg-preview.png"/>
        <ProductCard  title="Sample Product" price={100} image="https://i.ibb.co/tBLDVnF/custom-Blue-removebg-preview.png"/>
        <ProductCard  title="Sample Product" price={100} image="https://i.ibb.co/tBLDVnF/custom-Blue-removebg-preview.png"/>
        <ProductCard  title="Sample Product" price={100} image="https://i.ibb.co/tBLDVnF/custom-Blue-removebg-preview.png"/>
        <ProductCard  title="Sample Product" price={100} image="https://i.ibb.co/tBLDVnF/custom-Blue-removebg-preview.png"/>
        <ProductCard  title="Sample Product" price={100} image="https://i.ibb.co/tBLDVnF/custom-Blue-removebg-preview.png"/>
        
      </div>
    </div>
  );
};

export default Home;