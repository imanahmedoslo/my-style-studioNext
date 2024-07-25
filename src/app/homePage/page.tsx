import React from 'react';
import ProductCard from '../components/productCard';

 function Home() {
  return (
    <div className='h-full px-4 py-2 flex flex-col gap-3'>
      {/* TODO Create component */}
      <div className='w-full h-50dvh border bg-[url(https://hips.hearstapps.com/hmg-prod/images/hoka-zinal-13085-1643565794.jpg?crop=1.00xw:0.752xh;0,0.115xh&resize=1200:*)]'></div>
      <div className='w-full min-h-1/2 h-fit flex flex-row flex-wrap bg-scroll'>
        <ProductCard  title="Sample Product" price={100} image="https://media.discordapp.net/attachments/1222505059468709901/1265996516225581117/customBlue-removebg-preview.png?ex=66a38aa2&is=66a23922&hm=b00c9d025a8472eaf7b7a50c33f55ca56dfba5c1561bb73f3ca85ae53a782a8b&=&format=webp&quality=lossless"/>
        <ProductCard title="Sample Product" price={100} image="https://media.discordapp.net/attachments/1222505059468709901/1265996516225581117/customBlue-removebg-preview.png?ex=66a38aa2&is=66a23922&hm=b00c9d025a8472eaf7b7a50c33f55ca56dfba5c1561bb73f3ca85ae53a782a8b&=&format=webp&quality=lossless"/>
        <ProductCard title="Sample Product" price={100} image="https://media.discordapp.net/attachments/1222505059468709901/1265996516225581117/customBlue-removebg-preview.png?ex=66a38aa2&is=66a23922&hm=b00c9d025a8472eaf7b7a50c33f55ca56dfba5c1561bb73f3ca85ae53a782a8b&=&format=webp&quality=lossless"/>
        <ProductCard title="Sample Product" price={100} image="https://media.discordapp.net/attachments/1222505059468709901/1265996516225581117/customBlue-removebg-preview.png?ex=66a38aa2&is=66a23922&hm=b00c9d025a8472eaf7b7a50c33f55ca56dfba5c1561bb73f3ca85ae53a782a8b&=&format=webp&quality=lossless"/>
        <ProductCard title="Sample Product" price={100} image="https://media.discordapp.net/attachments/1222505059468709901/1265996516225581117/customBlue-removebg-preview.png?ex=66a38aa2&is=66a23922&hm=b00c9d025a8472eaf7b7a50c33f55ca56dfba5c1561bb73f3ca85ae53a782a8b&=&format=webp&quality=lossless"/>
        <ProductCard title="Sample Product" price={100} image="https://media.discordapp.net/attachments/1222505059468709901/1265996516225581117/customBlue-removebg-preview.png?ex=66a38aa2&is=66a23922&hm=b00c9d025a8472eaf7b7a50c33f55ca56dfba5c1561bb73f3ca85ae53a782a8b&=&format=webp&quality=lossless"/>
        <ProductCard title="Sample Product" price={100} image="https://media.discordapp.net/attachments/1222505059468709901/1265996516225581117/customBlue-removebg-preview.png?ex=66a38aa2&is=66a23922&hm=b00c9d025a8472eaf7b7a50c33f55ca56dfba5c1561bb73f3ca85ae53a782a8b&=&format=webp&quality=lossless"/>
        <ProductCard title="Sample Product" price={100} image="https://media.discordapp.net/attachments/1222505059468709901/1265996516225581117/customBlue-removebg-preview.png?ex=66a38aa2&is=66a23922&hm=b00c9d025a8472eaf7b7a50c33f55ca56dfba5c1561bb73f3ca85ae53a782a8b&=&format=webp&quality=lossless"/>
        <ProductCard title="Sample Product" price={100} image="https://media.discordapp.net/attachments/1222505059468709901/1265996516225581117/customBlue-removebg-preview.png?ex=66a38aa2&is=66a23922&hm=b00c9d025a8472eaf7b7a50c33f55ca56dfba5c1561bb73f3ca85ae53a782a8b&=&format=webp&quality=lossless"/>
      </div>
    </div>
  );
};

export default Home;