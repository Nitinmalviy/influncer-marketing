import { MdArrowRightAlt } from "react-icons/md";
import blog1 from './../../utils/images/blog1.png';
import blog2 from './../../utils/images/blog2.png';
import blog3 from './../../utils/images/blog3.png';

export default function LatestNews() {
    return <>
        <div>
            <h3 className="text-center p-9 text-3xl font-semibold">Latest News</h3>


            <div className="container h-auto m-auto grid gap-4  p-5 grid-cols-2  mx-w-md  ">
                <div className=" ">
                    <img src={blog1} alt="" />
                    <div className="text-3xl font-bold mt-5">7 Essential Tools for Forward-Thinking Creative Agencies</div>
                    <p className="mt-4 text-md font-semibold mb-3">
                        Creative agencies work on many projects simultaneously, making advanced project management tools necessary. However, many agencies are still…
                    </p>

                    <button class="bg-pink-500 hover:bg-transparent   text-sm hover:border-[1px] hover:border-white text-white font-semibold py-3 px-3 rounded-full flex justify-between items-center ">
                        Read More  <div className='pl-3 text-xl'><MdArrowRightAlt /></div>
                    </button>
                </div>

                <div className="grid gap-4">
                    <div className=" h-auto ">
                        <img src={blog2} alt="" />
                        <div className="text-lg font-bold p-4">
                            8 Trends Shaping the Future of Creative Agencies
                        </div>
                        <p className="pl-4">
                            Creative agencies have an indisputable role as change agents amid evolving consumer behavior and client expectations. Agencies stretch…
                        </p>
                    </div>

                    <div className=" h-auto ">
                        <img src={blog3} alt="" />
                        <div className="text-lg font-bold p-4">
                            Ultimate Guide to Choosing Tools for Digital Marketing Agencies...
                        </div>
                        <p className="pl-4 ">
                            In the throes of 2024’s digital marketing agency arena, the tremors from OpenAI’s latest conference have sent a…
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* ---------------------- */}
        <div>
            <div>

            </div>
        </div>
    </>
}