import { FaLevelDownAlt } from "react-icons/fa";



export default function About() {
    return (
        <>
            <div className="flex justify-center items-center flex-col py-20">
                <h1 className="font-light text-4xl capitalize text-center px-32">Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Unde architecto labore sed, soluta porro quod <br /> distinctio omnis, neque reprehenderit eum <br /> vero ratione at enim rerum magni <br /> ex maxime, animi non.</h1>
                <p className="font-light text-xs text-center pt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, expedita laboriosam commodi qui officiis tempora <br /> facere excepturi provident quasi dolores eaque fuga molestiae voluptates maxime quo autem necessitatibus, cum <br /> rem repellat vel sunt in exercitationem ullam eveniet. Ipsa, provident rem.</p>
                <div className="rounded-lg">
                    <img src="/painting.jpg" className="w-80  py-10 shadow-pink-400 shadow-xl rounded-2xl my-10" />
                </div>
                <div className="grid grid-cols-3 grid-rows-2">
                    <div className="border-2 rounded-lg text-center px-6 py-4 mx-3 my-3 hover:bg-[#EC4B9A] hover:text-white cursor-pointer hover:scale-125 duration-200 transition">
                        <p className="font-medium text-sm">Lorem ipsum dolor <br /> sit amet consectetur <br /> adipisicing elit.</p>
                    </div>
                    <div className="border-2 rounded-lg text-center px-6 py-4 mx-3 my-3 hover:bg-[#EC4B9A] hover:text-white cursor-pointer hover:scale-125 duration-200 transition">
                        <p className="font-medium text-sm">Lorem ipsum dolor <br /> sit amet consectetur <br /> adipisicing elit.</p>
                    </div>
                    <div className="border-2 rounded-lg text-center px-6 py-4 mx-3 my-3 hover:bg-[#EC4B9A] hover:text-white cursor-pointer hover:scale-125 duration-200 transition">
                        <p className="font-medium text-sm">Lorem ipsum dolor <br /> sit amet consectetur <br /> adipisicing elit.</p>
                    </div>
                    <div className="border-2 rounded-lg text-center px-6 py-4 mx-3 my-3 hover:bg-[#EC4B9A] hover:text-white cursor-pointer hover:scale-125 duration-200 transition">
                        <p className="font-medium text-sm">Lorem ipsum dolor <br /> sit amet consectetur <br /> adipisicing elit.</p>
                    </div>
                    <div className="border-2 rounded-lg text-center px-6 py-4 mx-3 my-3 hover:bg-[#EC4B9A] hover:text-white cursor-pointer hover:scale-125 duration-200 transition">
                        <p className="font-medium text-sm">Lorem ipsum dolor <br /> sit amet consectetur <br /> adipisicing elit.</p>
                    </div>
                    <div className="border-2 rounded-lg text-center px-6 py-4 mx-3 my-3 hover:bg-[#EC4B9A] hover:text-white cursor-pointer hover:scale-125 duration-200 transition">
                        <p className="font-medium text-sm">Lorem ipsum dolor <br /> sit amet consectetur <br /> adipisicing elit.</p>
                    </div>
                </div> 
                <div className="py-8 flex justify-center items-center flex-col">
                    <p className="text-light text-xl py-2  px-2 rounded-lg">Shop whith us</p>
                    <FaLevelDownAlt className="text-5xl text-center py-2"/>
                    <button className="bg-[#EC4B9A]  text-white px-14 py-3 rounded-3xl font-black shadow-pink-400 shadow-xl">Find ur Product</button>
                </div>
            </div>

        </>



    )
}