import { FaAngleDown } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
export default function Navbar() {

    return <>
        <div className=" navbar-main-t   text-white h-[70px] w-screen  absolute z-30"></div>
        <nav className="navbar-main  text-white h-[70px] w-screen  absolute z-20 ">
            <div className="flex h-full">
                <div className=" md:w-1/5 w-4/5 flex justify-start pl-12 items-center">
                    <div className=" flex justify-center items-center">
                        <div className="flex justify-center items-center flex-col">
                            <h2 className="font-bold text-md">Influencer</h2>
                            <h2 className="font-semibold text-md">MarketingHub</h2>
                        </div>
                    </div>
                </div>
                <div className="hidden md:visible md:w-4/6 md:grid place-content-center gap-3 grid-flow-col">
                    <NavLink to={'#'}>Home</NavLink>
                    <NavLink className={`flex `} to={'#'}>Articles<span className="pt-2"><FaAngleDown /></span></NavLink>
                    <NavLink className={`flex cursor-pointer`} to={'#'}>Platforms<span className="pt-2"><FaAngleDown /></span></NavLink>
                    <NavLink className={`flex cursor-pointer`} to={'#'}>Agencies<span className="pt-2"><FaAngleDown /></span></NavLink>
                    <NavLink className={`flex cursor-pointer`} to={'#'}>Resources<span className="pt-2"><FaAngleDown /></span></NavLink>
                    <NavLink className={`flex cursor-pointer`} to={'#'}>About Us<span className="pt-2"><FaAngleDown /></span></NavLink>
                </div>
                <div className="hidden md:visible sm:w-1/12 md:w-1/5 md:grid place-content-start grid-flow-col place-items-center py-3">

                    <button class="hidden lg:block bg-pink-500 text-sm hover:bg-pink-700 text-white font-bold py-2 px-2 rounded-full">
                        Benchmark Report 2024
                    </button>
                    <button class="hidden md:block bg-pink-500 hover:bg-pink-700 text-white font-bold ml-3 py-2 px-2 text-2xl rounded-full">
                        <IoSearchSharp />
                    </button>

                </div>
                <div className="md:hidden  w-1/5 flex justify-center items-center">
                    <button className="text-white text-2xl ">
                        <RxHamburgerMenu />
                    </button>
                </div>

            </div>
        </nav>
    </>
}