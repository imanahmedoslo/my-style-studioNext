import React from 'react';
import ProductCard from '../components/productCard';

const Home: React.FC = () => {
  return (
    <div className='h-full px-4 py-2 flex flex-col gap-3'>
      {/* TODO Create component */}
      <div className='w-full h-50dvh border  '>slider show</div>
      <div className='w-full min-h-1/2 h-fit flex flex-row flex-wrap '>
        <ProductCard title="Sample Product" price={100} />
         <ProductCard title="Sample Product" price={100} />
         <ProductCard title="Sample Product" price={100} />
         <ProductCard title="Sample Product" price={100} />
         <ProductCard title="Sample Product" price={100} />
         <ProductCard title="Sample Product" price={100} />
         <ProductCard title="Sample Product" price={100} />
         <ProductCard title="Sample Product" price={100} />
         <ProductCard title="Sample Product" price={100} />
         <ProductCard title="Sample Product" price={100} />
         <ProductCard title="Sample Product" price={100} />
         
      </div>
    </div>
  );
};

export default Home;