import React from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { MdArrowRightAlt } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import carousel1 from '../../utils/images/carousel-1.png';
import carousel2 from '../../utils/images/Rectangle 5636.png';
import Navbar from './Navbar.jsx';

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`absolute text-2xl flex justify-center ite right-7 top-1/2 text-white z-40`}
      onClick={onClick}
    ><FaAngleRight /></div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`absolute text-2xl flex justify-center left-7 top-1/2 text-white z-40`}
      onClick={onClick}
    ><FaAngleLeft /></div>
  );
};

export default function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative w-screen h-screen">
      <Navbar />
      <Slider {...settings}>
        <div className="relative w-full h-screen ">
          <img className="w-full h-full object-cover" src={carousel1} alt={`c1`} />
          <div className="absolute top-1/4 md:w-1/2 w-4/5 h-full left-28 font-bold lg:text-6xl md:text-5xl text-4xl flex justify-start text-white ">
            The leading Social Media resource for Brands
          </div>
          <div className='absolute top-2/4 pt-16 w-4/5 md:w-1/2 h-full left-28 font-thin text-sm flex justify-start text-white'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et efficitur lorem, ut condimentum nisi. Integer molestie tellus vel nunc sagittis dignissim</p>
          </div>
          <div className='absolute top-3/4 h-[60px] w-4/5 md:w-1/2  left-28 font-thin text-sm  text-white '>
            <div className='w-full h-full flex justify-start items-center'>
              <button class="bg-pink-500 hover:bg-transparent   text-sm hover:border-[1px] hover:border-white text-white font-semibold py-2 px-3 rounded-full flex justify-between items-center ">
                Contact-Us  <div className='pl-3 text-xl'><MdArrowRightAlt /></div>
              </button>
              <button class=" hover:bg-pink-500 text-sm ml-6 border-[1px] border-white text-white font-semibold py-2 px-3 rounded-full flex justify-between items-center">
                About-Us  <div className='pl-3 text-xl'><MdArrowRightAlt /></div>
              </button>
            </div>
          </div>
        </div>
        <div className="relative w-full h-screen ">
          <img className="w-full h-full object-cover" src={carousel2} alt={`c1`} />
          <div className="absolute top-1/4 md:w-1/2 w-4/5 h-full left-28 font-bold lg:text-6xl md:text-5xl sm:text-4xl flex justify-start text-white ">
            The leading Social Media resource for Brands
          </div>
          <div className='absolute top-2/4 pt-16 w-4/5 md:w-1/2 h-full left-28 font-thin text-sm flex justify-start text-white'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et efficitur lorem, ut condimentum nisi. Integer molestie tellus vel nunc sagittis dignissim</p>
          </div>
          <div className='absolute top-3/4 h-[60px] w-4/5 md:w-1/2  left-28 font-thin text-sm  text-white '>
            <div className='w-full h-full flex justify-start items-center'>
              <button class="bg-pink-500 hover:bg-transparent   text-sm hover:border-[1px] hover:border-white text-white font-semibold py-2 px-3 rounded-full flex justify-between items-center ">
                Contact-Us  <div className='pl-3 text-xl'><MdArrowRightAlt /></div>
              </button>
              <button class=" hover:bg-pink-500 text-sm ml-6 border-[1px] border-white text-white font-semibold py-2 px-3 rounded-full flex justify-between items-center">
                About-Us  <div className='pl-3 text-xl'><MdArrowRightAlt /></div>
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
