

import bgbanner from "@/assets/heroBg1.png";
import bannerrightimage from "@/assets/heroImg1.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="heroBg  sm:h-screen pt-28">
        <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 max-w-screen-2xl lg:px-20 sm:px-10 px-4  mx-auto">
            <div className="my-auto">
                <h1 className=" font-bold text-3xl w-4/5 lg:w-2/3 xl:w-1/2">A Good <span className="text-lightBlue">#education</span> is always a base of</h1>
                <h2 className="my-7 font-bold text-3xl bg-purpul text-normalWhite w-fit px-4 py-3 ">A Bright Future</h2>
                <p className="font-medium sm:leading-[26px] leading-[20px] text-base">With Assignment Guru as a reliable academic companion, students can overcome challenges, improve their grades, and excel in their studies. {"It's"} the ultimate resource for academic success, supporting students every step of the way.</p>
                <div className="lg:mt-6 mb-3">
                    <button className="inline-block mt-6 mb-3  rounded-sm bg-transparent mr-6 px-8 py-4 text-sm font-semibold bg-contact text-normalWhite   transition  capitalize">Start as Student</button>
                    <button className="inline-block border border-circle-1  rounded-sm bg-transparent mr-6 px-8 py-4 text-sm font-semibold bg-normalWhite text-black   transition  capitalize">Join As Instructor <span className="text-btnColor">It is Free!</span></button>
                </div>
            </div>
            <div>
                <Image  className="" src={bannerrightimage} alt="not found"/>
            </div>
        </div>
    </div>
  )
}

export default Hero