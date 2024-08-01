import React from 'react'
type CarouselProps = {
    images: string[];
}
function Carousel({ images }: CarouselProps) {
    return(
        <div className='w-full h-full border p-2 flex flex-row items-center justify-center rounded-xl'>
      <button className='w-1/12 flex justify-center items-center'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className=" transition duration-100 ease-in-out hover:text-black stroke-1 w-12  h-12 fill-none text-gray-500 stroke-current stroke-linecap-round stroke-linejoin-round">
        <circle cx="16" cy="16" r="13" />
        <polyline points="18,20.2 13.8,16 18,11.8" />
        </svg>
        </button>
        <div className='w-10/12 h-full flex flex-row items-center justify-center'> <img className=' max-w-full max-h-full h-fit w-fit rounded-xl' src={images[0]} alt="" />
        </div>
        <button className='w-1/12 flex justify-center items-center'> 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"className=" text-gray-500 transition duration-100 ease-in-out hover:text-black stroke-1 w-12 h-12 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round">
        <circle cx="16" cy="16" r="13" />
        <polyline points="14,11.8 18.2,16 14,20.2" />
        </svg>
        </button>
      </div>
    )
} export default Carousel;