import { MdArrowRightAlt } from "react-icons/md";
import instagram from '../../utils/instagram.png';
import post from '../../utils/post-calc.png';
import tiktok from '../../utils/tik-tok.png';
import youtube from '../../utils/youtube-cals.png';
import big from './../../utils/big.png';
import digi from './../../utils/digi-2.png';
import digital_marketing from './../../utils/digital_marketing.png';
import g2 from './../../utils/guides2.png';
import g3 from './../../utils/guildes3.png';
import g1 from './../../utils/gyides1.png';
import blog1 from './../../utils/images/blog1.png';
import blog2 from './../../utils/images/blog2.png';
import blog3 from './../../utils/images/blog3.png';
import { default as blog4 } from './../../utils/images/blog4.png';
import paper from './../../utils/paper.png';
import robo from './../../utils/robot.png';
import wad from './../../utils/wad.png';

export default function LatestNews() {
    return <>
        <div className="w-screen">
            {/* letest news start */}
            <h3 className="text-center p-2 mt-2 sm:p-9 text-3xl font-semibold">Latest News</h3>
            <div className="container h-auto m-auto grid gap-4  p-5 grid-rows-1 md:grid-cols-2 sm:w-3/4 w-10/12">
                <div className="">
                    <img src={blog1} alt="" />
                    <div className="text-xl md:text-3xl font-bold sm:mt-5 mt-2">7 Essential Tools for Forward-Thinking Creative Agencies</div>
                    <p className="mt-2 sm:mt-4 text-sm sm:text-md font-semibold mb-2 sm:mb-3">
                        Creative agencies work on many projects simultaneously, making advanced project management tools necessary. However, many agencies are still…
                    </p>
                    <div className="w-full text-center">
                        <button class="bg-pink-500 text-sm hover:border-[1px]  text-white font-semibold sm:py-3 sm:px-3 py-2 px-2 rounded-full flex justify-between items-center ">
                            Read More  <div className='pl-3 text-xl'><MdArrowRightAlt /></div>
                        </button>
                    </div>

                </div>

                <div className="grid gap-4">
                    <div className=" h-auto ">
                        <img src={blog2} alt="" />
                        <div className="text-md sm:text-lg font-bold p-2 sm:p-4">
                            8 Trends Shaping the Future of Creative Agencies
                        </div>
                        <p className="sm:pl-4 pl-2">
                            Creative agencies have an indisputable role as change agents amid evolving consumer behavior and client expectations. Agencies stretch…
                        </p>
                    </div>

                    <div className=" h-auto ">
                        <img src={blog3} alt="" />
                        <div className="text-md sm:text-lg font-bold p-2 sm:p-4">
                            Ultimate Guide to Choosing Tools for Digital Marketing Agencies...
                        </div>
                        <p className="sm:pl-4 pl-2">
                            In the throes of 2024’s digital marketing agency arena, the tremors from OpenAI’s latest conference have sent a…
                        </p>
                    </div>
                </div>
            </div>
            {/* letest news end */}
        </div>

        <div className="w-screen bg-[#EFEBEB] h-auto pt-[50px] pb-[50px]">
            <div className="container  m-auto sm:w-3/4 w-10/12 grid ">
                <div className="grid md:grid-cols-2 grid-rows-1 ">
                    <img src={blog4} alt="" className="p-10" />
                    <div className="sm:p-5 flex  justify-center items-start flex-col ">
                        <h3 className=" text-2xl  font-bold">Influencer Marketing Agencies</h3>
                        <p className="mt-4 font-medium text-clip">View a collection of the globe's leading marketing agencies all in one place</p>
                        <div className="w-full mt-4 text-center">
                            <button class="bg-pink-500 text-sm hover:border-[1px]  text-white font-semibold sm:py-3 sm:px-3 py-2 px-2 rounded-full flex justify-between items-center ">
                                View Agencies  <div className='pl-3 text-xl'><MdArrowRightAlt /></div>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 grid-rows-1  ">
                    <div className="sm:p-5 flex justify-center items-start flex-col order-last md:order-none">
                        <h3 className=" text-2xl font-bold">Influencer Marketing Agencies</h3>
                        <p className="mt-4 font-medium">View a collection of the globe's leading marketing agencies all in one place</p>
                        <div className="w-full mt-4 text-center">
                            <button class="bg-pink-500 text-sm hover:border-[1px]  text-white font-semibold sm:py-3 sm:px-3 py-2 px-2 rounded-full flex justify-between items-center ">
                                View Agencies  <div className='pl-3 text-xl'><MdArrowRightAlt /></div>
                            </button>
                        </div>
                    </div>
                    <img src={blog4} alt="" className="p-10" />
                </div>
            </div>
        </div>

        {/* Latest Articles start */}

        <div className="w-screen mb-9 mt-6">
            <div className="sm:w-3/4 w-10/12 m-auto ">
                <h3 className="text-start mt-4 mb-4 text-3xl font-semibold">Latest Articles</h3>

                <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                        <img src={digital_marketing} alt="" />
                        <div className="mt-2">
                            <span className="p-1 rounded-lg px-3 text-xs font-bold  bg-slate-300 w-auto">AI Marketing</span>
                            <h3 className="mt-3 text-md font-semibold">Artificial Intelligence (AI) Marketing Benchmark Report: 2023</h3>
                            <p className="text-sm font-medium mt-2">The AI Marketing Benchmark Report 2023 is our inaugural overview of the use of AI by the marketing…
                            </p>
                        </div>
                    </div>

                    <div>
                        <img src={robo} alt="" />
                        <div className="mt-2">
                            <span className="p-1 rounded-lg px-3 text-xs font-bold  bg-slate-300 w-auto">Influencer Marketing</span>
                            <h3 className="mt-3 text-md font-semibold">May 2024 Influencer Marketing Report</h3>
                            <p className="text-sm font-medium mt-2">The Influencer Marketing Report May 2024 provides an in-depth look at the current state of the influencer marketing…
                            </p>
                        </div>
                    </div>

                    <div>
                        <img src={digi} alt="" />
                        <div className="mt-2">
                            <span className="p-1 rounded-lg px-3 font-bold text-xs bg-slate-300 w-auto">Digital Marketing</span>
                            <h3 className="mt-3 text-md font-semibold">Digital Marketing Benchmark Report 2024</h3>
                            <p className="text-sm font-medium mt-2">The Digital Marketing Benchmark Report 2024 offers an extensive analysis of the digital marketing landscape, gathering insights from…</p>
                        </div>
                    </div>

                    <div>
                        <img src={paper} alt="" />
                        <div className="mt-2">
                            <span className="p-1 rounded-lg px-3 text-xs font-bold  bg-slate-300 w-auto">Influencer Marketing</span>
                            <h3 className="mt-3 text-md font-semibold">May 2024 Influencer Marketing Report</h3>
                            <p className="text-sm font-medium mt-2">The Influencer Marketing Report May 2024 provides an in-depth look at the current state of the influencer marketing…
                            </p>
                        </div>
                    </div>
                    <div>
                        <img src={wad} alt="" />
                        <div className="mt-2">
                            <span className="p-1 rounded-lg px-3 font-bold text-xs bg-slate-300 w-auto">Digital Marketing</span>
                            <h3 className="mt-3 text-md font-semibold">Digital Marketing Benchmark Report 2024</h3>
                            <p className="text-sm font-medium mt-2">The Digital Marketing Benchmark Report 2024 offers an extensive analysis of the digital marketing landscape, gathering insights from…</p>
                        </div>
                    </div>

                    <img src={big} alt="" />
                </div>
            </div>
        </div>


        {/* Latest Articles end */}

        {/* Popular Tool  satrt */}

        <div className="w-screen bg-[#EFEBEB]">
            <div className="sm:w-3/4 w-10/12 p-4  m-auto">
                <div className="h-[70px] flex justify-between items-center">
                    <h3 className="text-start mt-4 mb-4 text-3xl font-semibold">Popular Tool</h3>
                    <h6 className="text-xs font-semibold text-green-500 cursor-pointer">See Alal Tools</h6>
                </div>

                <div className="grid h-full gap-4 p-4 w-full grid-cols-1 md:grid-cols-2">
                    <div className="  flex justify-start items-center bg-white">
                        <img src={instagram} alt="instagram" className="" />
                        <div className="text-center px-4 font-semibold w-full">Instagram Hashtag Generator</div>
                    </div>

                    <div className="  flex justify-start items-center bg-white">
                        <img src={post} alt="" className="" />
                        <div className="text-center px-4 font-semibold w-full">Instagram Sponsored Post Calculator</div>
                    </div>

                    <div className="  flex justify-start items-center bg-white">
                        <img src={youtube} alt="youtube" className="" />
                        <div className="text-center px-4 font-semibold w-full">YouTube Money Calculator (earnings estimator)</div>
                    </div>

                    <div className="  flex justify-start items-center bg-white">
                        <img src={tiktok} alt="" className="" />
                        <div className="text-center px-4 font-semibold w-full">TikTok Money Calculator</div>
                    </div> 
                </div>
            </div>
        </div>

        {/* Popular Tool  end */}

        {/* Top Agencies start */}
            
        {/* Top Agencies  ends */}

        {/* -------Guides & Reports start-------------- */}

        <div className="w-screen">
            <div className="sm:w-3/4 w-10/12 m-auto">
                <h3 className="text-start mt-4 mb-4 text-3xl font-semibold">Guides & Reports</h3>
                <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                        <img src={g1} alt="" />
                        <div className="mt-2">
                            <span className="p-1 rounded-lg px-3 text-xs font-bold  bg-slate-300 w-auto">AI Marketing</span>
                            <h3 className="mt-3 text-md font-semibold">Artificial Intelligence (AI) Marketing Benchmark Report: 2023</h3>
                            <p className="text-sm font-medium mt-2">The AI Marketing Benchmark Report 2023 is our inaugural overview of the use of AI by the marketing…
                            </p>
                        </div>
                    </div>
                    <div>
                        <img src={g2} alt="" />
                        <div className="mt-2">
                            <span className="p-1 rounded-lg px-3 text-xs font-bold  bg-slate-300 w-auto">Influencer Marketing</span>
                            <h3 className="mt-3 text-md font-semibold">May 2024 Influencer Marketing Report</h3>
                            <p className="text-sm font-medium mt-2">The Influencer Marketing Report May 2024 provides an in-depth look at the current state of the influencer marketing…
                            </p>
                        </div>
                    </div>
                    <div>
                        <img src={g3} alt="" />
                        <div className="mt-2">
                            <span className="p-1 rounded-lg px-3 font-bold text-xs bg-slate-300 w-auto">Digital Marketing</span>
                            <h3 className="mt-3 text-md font-semibold">Digital Marketing Benchmark Report 2024</h3>
                            <p className="text-sm font-medium mt-2">The Digital Marketing Benchmark Report 2024 offers an extensive analysis of the digital marketing landscape, gathering insights from…</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* -------Guides & Reports end-------------- */}
    </>
}