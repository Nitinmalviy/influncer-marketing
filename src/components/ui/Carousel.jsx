import React, { useState } from 'react';
import c1 from '../../utils/images/carousel-1.png';
import c2 from '../../utils/images/carousel2.png';
import c3 from '../../utils/images/carousel3.png';
import Navbar from './Navbar';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div id="indicators-carousel" className="relative w-full" data-carousel="static">
      <Navbar />
      <div className="relative  h-screen overflow-hidden ">

        <div
          className={`absolute duration-700 ease-in-out w-full h-full top-0 left-0 transition-transform transform ${activeIndex === 0 ? 'translate-x-0' : 'translate-x-full'
            }`}
          style={{ display: activeIndex === 0 ? 'block' : 'none' }}
          data-carousel-item={activeIndex === 0 ? 'active' : undefined}
        >
          <div className='absolute h-full w-full bg-black opacity-25'></div>
          <img
            src={c1}
            className="block w-full h-full object-cover"
            alt="Slide 1"
          />
          <div className="absolute inset-0 flex sm:pl-16 p-5 items-start justify-center flex-col text-white text-xl">
            <div className='md:w-1/2 w-full text-2xl  sm:text-5xl font-extrabold'>
              The leading Social Media resource for Brands
            </div>
            <p className='md:w-1/2 w-full text-sm font-thin pr-4 sm:p-0 sm:font-medium mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et efficitur lorem, ut condimentum nisi. Integer molestie tellus vel nunc sagittis dignissim</p>
            <div className='sm:w-1/2 mt-4 flex items-center w-full'>
              <button
                class="flex items-center gap-2 px-6 py-3 mr-5 font-sans text-xs font-bold text-center text-white bg-pink-700 align-middle rounded-full transition-all  select-none  hover:bg-transparent hover:border-[1px] hover:border-white"
                type="button">
                Contact Us
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                  class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                </svg>
              </button>
              <button
                class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-white hover:bg-pink-700 align-middle rounded-full transition-all  select-none  bg-transparent hover:border-0 border-[1px] hover:border-white"
                type="button">
                About Us
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                  class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>


        <div
          className={`absolute duration-700 ease-in-out w-full h-full top-0 left-0 transition-transform transform ${activeIndex === 1 ? 'translate-x-0' : 'translate-x-full'
            }`}
          style={{ display: activeIndex === 1 ? 'block' : 'none' }}
          data-carousel-item={activeIndex === 1 ? 'active' : undefined}
        >
          <img
            src={c2}
            className="block w-full h-full object-cover"
            alt="Slide 2"
          />
        </div>


        <div
          className={`absolute duration-700 ease-in-out w-full h-full top-0 left-0 transition-transform transform ${activeIndex === 2 ? 'translate-x-0' : 'translate-x-full'
            }`}
          style={{ display: activeIndex === 2 ? 'block' : 'none' }}
          data-carousel-item={activeIndex === 2 ? 'active' : undefined}
        >
          <div className='absolute h-full w-full bg-black opacity-25'></div>
          <img
            src={c3}
            className="block w-full h-full object-cover"
            alt="Slide 5"
          />
          <div className="absolute sm:p-16 p-6 inset-0 flex items-start justify-center flex-col text-white text-xl">
            <div className='sm:text-4xl font-extrabold w-full sm:w-2/3 md:w-1/2 text-ellipsis'>Influencer Marketing</div>
            <div className='sm:text-4xl font-extrabold w-full sm:w-2/3 md:w-1/2 text-ellipsis'>News and Resources</div>
            <p className='text-sm mt-4 w-full sm:w-2/3 md:w-1/2 font-normal text-ellipsis'>Influencer Marketing Hub offers you all the latest Influencer Marketing news, tools and resources to enable influencers, agencies and platforms to connect and harness the power of Marketing under the Influence</p>
          </div>
        </div>
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-20  left-3/4">
        {[c1, c2, c3].map((e, index) => (
          <button
            key={index}
            type="button"
            className={`w-20 h-20 hidden md:block  `}
            aria-current={index === activeIndex ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => handleIndicatorClick(index)}
          >
            <img src={e} className={` ${index === activeIndex ? ' opacity-85 rounded-lg' : 'border-2 rounded-lg border-white'}`} />
          </button>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full">
          <svg className="w-4 h-4 text-white  rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 ">
          <svg className="w-4 h-4 text-white  rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
