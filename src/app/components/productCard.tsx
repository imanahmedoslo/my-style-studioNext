import React from 'react';

type ProductCardProps = {
  // Define your prop types here
  title: string;
  description?:string;
  sizeChoises?:string;
  price: number;
  image:string;
};

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image, sizeChoises="36-43", description="cool shoe" }) => {
  return (
    <div className='h-fit max-w-1/3 w-fit p-2 '>
      <div className='border h-full rounded-xl border-gray-200 flex flex-col gap-3 p-2 bg-gradient-to-t from-gray-50 to-white transition duration-200 ease-in-out hover:shadow-2xl hover:border-gray-4 00'>
        <div>
        <img src={image} className='h-70 w-96'/>
        </div>
        <div className='flex flex-col gap-3'>
          <h2 className='font-semibold text-md'>{title}</h2>
          <p className='text-sm'>{description}</p>
          <p className='italic text-sm'>{sizeChoises}</p>
          <p className='font-semibold text-md'>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;