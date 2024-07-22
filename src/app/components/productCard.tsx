import React from 'react';

type ProductCardProps = {
  // Define your prop types here
  title: string;
  price: number;
};

const ProductCard: React.FC<ProductCardProps> = ({ title, price }) => {
  return (
    <div className='max-h-96 h-fit max-w-1/3 w-fit p-2 '>
      <div className='border h-full rounded-md border-gray-400 flex flex-col gap-3 p-2'>
        <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSZTyRFP-rqvi18SavsjgtqO7mDs7Xnd48i_UxWKSWm_wXjw5PBXZ1PdKB4RcQFubz3hHMYpTIERgMmp7ycqH6nNE8k4Ye15BMv2oAyxxlSHF8kCX11J7fqjXI" className='h-70 w-96'/>
        <div>
        <h2>{title}</h2>
        <p>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;