import React from "react";
import ProductCard from "../components/productCard";
import Carousel from "../components/carousel";

function Home() {
  return (
    <div className="h-full px-4 py-2 flex flex-col gap-3 ">
      <div className=" max-h-[630px] w-full">
        <Carousel
          images={[
            "https://hips.hearstapps.com/hmg-prod/images/hoka-zinal-13085-1643565794.jpg?crop=1.00xw:0.752xh;0,0.115xh&amp;resize=1200:*",
            "https://cdn.thewirecutter.com/wp-content/media/2023/09/running-shoes-2048px-5946.jpg?auto=webp&quality=75&width=1024",
            "data:image/jpeg;base64,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",
          ]}
        />
      </div>
      {/* TODO Create component */}
      <div className="w-full min-h-1/2 h-fit flex flex-row flex-wrap justify-center items-center bg-scroll">
        <ProductCard
          title="Sample Product"
          price={100}
          image="https://i.ibb.co/tBLDVnF/custom-Blue-removebg-preview.png"
        />
        <ProductCard
          title="Sample Product"
          price={100}
          image="https://i.ibb.co/tBLDVnF/custom-Blue-removebg-preview.png"
        />
        <ProductCard
          title="Sample Product"
          price={100}
          image="https://i.ibb.co/tBLDVnF/custom-Blue-removebg-preview.png"
        />
        <ProductCard
          title="Sample Product"
          price={100}
          image="https://i.ibb.co/tBLDVnF/custom-Blue-removebg-preview.png"
        />
        <ProductCard
          title="Sample Product"
          price={100}
          image="https://i.ibb.co/tBLDVnF/custom-Blue-removebg-preview.png"
        />
        <ProductCard
          title="Sample Product"
          price={100}
          image="https://i.ibb.co/tBLDVnF/custom-Blue-removebg-preview.png"
        />
        <ProductCard
          title="Sample Product"
          price={100}
          image="https://i.ibb.co/tBLDVnF/custom-Blue-removebg-preview.png"
        />
        <ProductCard
          title="Sample Product"
          price={100}
          image="https://i.ibb.co/tBLDVnF/custom-Blue-removebg-preview.png"
        />
        <ProductCard
          title="Sample Product"
          price={100}
          image="https://i.ibb.co/tBLDVnF/custom-Blue-removebg-preview.png"
        />
      </div>
    </div>
  );
}

export default Home;
