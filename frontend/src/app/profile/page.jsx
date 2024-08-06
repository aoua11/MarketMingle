import { FaUserSecret } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";




export default function Profile() {
    return (<>
        <div className="h-screen">
            <div className="bg-[#EC4B9A] h-96">

            </div>
            <div className="rounded-xl mx-32 absolute top-96 bg-white shadow-lg">
                <section className="flex justify-between">
                    <div className="flex">
                        <FaUserSecret />
                        <h2>conecte</h2>
                    </div>
                    <img src="/person2.jpg" className="rounded-full w-32" />
                    <div className="flex">
                        <FaRegMessage />
                        <h2>messages</h2>
                    </div>
                </section>
                <div>
                    <h1 className="font-blakc text-xl text-center">Hamid</h1>
                </div>
            </div>
        </div>




    </>)
}