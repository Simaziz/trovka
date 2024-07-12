import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { MdOutlineCopyright } from "react-icons/md";

export const FooterComponent = () => {
    return (
        <>
            <footer className="bg-[#022278] w-full  h-[421px]  rounded-t-[18px] ">
                <div className=" flex ">
                    <img src=".//src/assets/image/logo-footer.png" alt="" className="w-40  ml-14 -translate-y-5" />

                    <div className=" text-white uppercase flex translate-y-[40px] text-[20px] justify-between w-[785px] h-[30px] translate-x-32">
                        <div>
                            <p>Feature</p>
                            <ul className=" capitalize text-[17px] mt-12 leading-8">
                                <li><a href=""> listing</a></li>
                                <li><a href=""> searching</a></li>
                                <li><a href=""> filtering</a></li>
                            </ul>
                        </div>
                        <div>
                            <p>categories</p>
                            <ul className=" capitalize text-[17px] mt-12 leading-8">
                                <li><a href=""> education</a></li>
                                <li><a href=""> auto services</a></li>
                                <li><a href=""> home services</a></li>
                                <li><a href=""> restaurant</a></li>
                                <li><a href=""> electronics</a></li>
                            </ul>
                        </div>
                        <div>
                            <p>contact us</p>
                            <ul className=" capitalize text-[17px] mt-12 leading-8">
                                <li><a href=""> address: 11st toulkork, phnom penh</a></li>
                                <li><a href=""> email: trovka@gmail.com</a></li>
                                <li><a href=""> phone: 012 345 678</a></li>
                                <li className="w-28 mt-2">
                                    <div className="flex justify-between text-2xl items-center">
                                        <a href=""><FaFacebook /></a>
                                        <a href=""><FaTelegram /></a>
                                        <a href=""><IoLogoYoutube className="text-[28px]"/></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>

                <div className="w-full h-[85px]  translate-y-44 border-t flex justify-center items-center text-white text-lg">
                   <MdOutlineCopyright className="  text-2xl mr-1"/> <p>2024 TROVKA. All rights reserved</p>
                </div>
            </footer>
        </>
    )
}

