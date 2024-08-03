"use client";
import React, { useEffect, useState, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import {} from "@heroicons/react/outline";

type CarouselProps = {
  images: string[];
};

function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startInterval();

    return () => {
      if (intervalIdRef.current) clearInterval(intervalIdRef.current);
    };
  }, []);

  const startInterval = () => {
    if (intervalIdRef.current){
      clearInterval(intervalIdRef.current);
    } 

    intervalIdRef.current = setInterval(() => {
      changePicture('right');
    }, 3000); 
  };

  const changePicture = (direction: string, index?: number) => {
    if (intervalIdRef.current) clearInterval(intervalIdRef.current); 
    if (direction === 'dots' && index !== undefined) {
      setCurrentIndex(index);
    } else if (direction === 'left') {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    } else if (direction === 'right') {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }

    startInterval(); 
  };

  return (
    <div className="flex flex-col w-full h-full border rounded-xl">
      <div className="w-full h-11/12 p-2 flex flex-row items-center justify-center">
        <button
          id="AA"
          onClick={(e) => changePicture('left')}
          className="w-1/12 flex justify-center items-center"
        >
          <ChevronLeftIcon
            id={"left"}
            className=" h-10 w-10 text-gray-500 transition duration-100 ease-in-out hover:text-gray-700"
          />
        </button>
        <div className="w-10/12 max-h-full flex flex-row items-center justify-center">
          {" "}
          <img
            className="h-[580px] w-auto object-contain rounded-xl"
            src={images[currentIndex]}
            alt=""
          />
        </div>
        <button
          onClick={(e) => changePicture('right')}
          className="w-1/12 flex justify-center items-center"
        >
          <ChevronRightIcon
            key={"right"}
            className=" h-10 w-10 text-gray-500 transition duration-100 ease-in-out hover:text-gray-700"
          />
        </button>
      </div>
      <div className="w-full h-1/12 flex flex-row gap-2 items-center justify-center p-2">
        {images.map((img, index) => (
          <button
            onClick={(e) => changePicture('dots', index)}
            key={index}
            className={`h-3 w-3 border rounded-full ${currentIndex === index ? 'bg-gray-700' : 'bg-gray-500'}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
