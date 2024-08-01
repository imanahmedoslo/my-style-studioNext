"use client";
import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import {} from "@heroicons/react/outline";
type CarouselProps = {
  images: string[];
};
function Carousel({ images }: CarouselProps) {
  const buttons = images.map((image) => {
    let index: number = images.indexOf(image);
    return (
      <button
        onClick={(e) => changePicture(e, index)}
        key={index}
        className=" h-3 w-3 border rounded-full bg-gray-500 "
      ></button>
    );
  });
  let [currentIndex, setCurrentIndex] = useState(0);
  const changePicture = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number,
    direction?: string
  ) => {
    if (index === currentIndex) {
      direction === "left"
        ? setCurrentIndex((prevIndex) => {
            return prevIndex - 1;
          })
        : direction === "right"?setCurrentIndex((prevIndex) => {
            return prevIndex + 1;
          }):index<=images.length-1?setCurrentIndex(0):setCurrentIndex(index);
    } else {
      setCurrentIndex(index);
    }
    console.log(e.target
    );
  };
  useEffect(() => {}, [currentIndex]);
  return (
    <div className="flex flex-col w-full h-full border rounded-xl">
      <div className="w-full h-11/12 p-2 flex flex-row items-center justify-center">
        <button id="AA"
          onClick={(e) => changePicture(e, currentIndex)}
          className="w-1/12 flex justify-center items-center"
        >
          <ChevronLeftIcon id={"left"} className=" h-10 w-10 text-gray-500 transition duration-100 ease-in-out hover:text-gray-700" />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className=" transition duration-100 ease-in-out hover:text-black stroke-1 w-12  h-12 fill-none text-gray-500 stroke-current stroke-linecap-round stroke-linejoin-round"
          >
            <circle cx="16" cy="16" r="13" />
            <polyline points="18,20.2 13.8,16 18,11.8" />
          </svg> */}
        </button>
        <div className="w-10/12 max-h-full flex flex-row items-center justify-center">
          {" "}
          <img
            className="max-h-full w-auto object-contain rounded-xl"
            src={images[currentIndex]}
            alt=""
          />
        </div>
        <button 
          onClick={(e) => changePicture(e, currentIndex)}
          className="w-1/12 flex justify-center items-center"
        >
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className=" text-gray-500 transition duration-100 ease-in-out hover:text-black w-12 h-12 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round"
          >
            <circle cx="16" cy="16" r="13" />
            <polyline points="14,11.8 18.2,16 14,20.2" />
          </svg> */}
          <ChevronRightIcon key={"right"} className=" h-10 w-10 text-gray-500 transition duration-100 ease-in-out hover:text-gray-700" />
        </button>
      </div>
      {
        <div className="w-full h-1/12 flex flex-row gap-2 items-center justify-center p-2 ">
          {buttons}
        </div>
      }
    </div>
  );
}
export default Carousel;
