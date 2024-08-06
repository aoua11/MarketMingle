import Link from "next/link"
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";


export default function Navbar() {
    return (
        <>
            <header className=" px-32 border-b bg-[#f9f9f9]">
                <nav className="flex justify-between py-3">
                    <div className="flex items-center">
                        <img src="/logo.png" className="w-10 pr-2 font-black" />
                        <Link href="/">
                            <h1 className="font-black text-[#EC4B9A] text-2xl text-center">
                                MkM
                            </h1>
                        </Link>
                    </div>
                    <ul className="flex items-center">
                        <Link href="/products"><li className="text-sm font-semibold px-3 hover:text-[#EC4B9A]">Product</li></Link>
                        <Link href="/profile"><li className="text-sm font-semibold px-3 hover:text-[#EC4B9A]">Profile</li></Link>
                        <Link href="/community"><li className="text-sm font-semibold px-3 hover:text-[#EC4B9A]">Community</li></Link>
                        <Link href="/contact"><li className="text-sm font-semibold px-3 hover:text-[#EC4B9A]">Contact</li></Link>
                        <Link href="/about"><li className="text-sm font-semibold px-3 hover:text-[#EC4B9A]">About us</li></Link>

                    </ul>
                    <div className="flex">
                        <div className="flex items-center border-2 rounded-2xl mx-3">
                            <IoIosSearch className="text-[#EC4B9A] size-5 mx-1" />
                            <input type="text" className="outline-none mx-1 bg-[#f9f9f9] text-sm font-light" />
                        </div>
                        <div className="flex items-center border-2 rounded-2xl pr-6">
                            <PiShoppingCartSimpleFill className="text-[#EC4B9A] mx-3 size-6" />
                            <Link href="/cart"><h4>cart</h4></Link>
                        </div>
                        <div className="flex items-center ml-4">
                            <Link href="/login"><button className="text-white font-normal text-xs bg-[#EC4B9A] rounded-2xl px-6 py-2">LOGIN</button></Link>
                        </div>
                    </div>
                </nav>
            </header>


        </>
    )


}