import React from "react";
import img_map from "/Users/aziz/trovka-website/trovka-website/trovka/src/assets/image/Map.png"
const ContactInfo=({})=>{
    return(
        <div className=" p-[4rem]">
            <h2 style={{color:"#032278"}} className="border-b-2 border-[#D9D9D9] font-bold text-[26px] ">Contact Info</h2>
            <div className="flex mt-[30px]">
                <div className=""><img src={img_map} alt="" /></div>
                <div className="ml-[4rem]">
                    <div className=" gap-[23rem]  flex  ">
                        <ul className=" ">
                            <li className="mb-[10px]">Monday</li>
                            <li className="mb-[10px]">Tuesday</li>
                            <li className="mb-[10px]">Wednesday</li>
                            <li className="mb-[10px]">Thursday</li>
                            <li className="mb-[10px]">Friday</li>
                            <li className="mb-[10px]">Saturday</li>
                            <li className="mb-[10px]">Sunday</li>
                        </ul>
                        <ul>
                            <li className="mb-[10px]">8:00 AM-6:00 PM</li>
                            <li className="mb-[10px]">8:00 AM-6:00 PM</li>
                            <li className="mb-[10px]">8:00 AM-6:00 PM</li>
                            <li className="mb-[10px]">8:00 AM-6:00 PM</li>
                            <li className="mb-[10px]">8:00 AM-6:00 PM</li>
                            <li className="mb-[10px]">8:00 AM-6:00 PM</li>
                            <li className="mb-[10px]">8:00 AM-6:00 PM</li>
                        </ul>
                    </div>
                    <div className="mt-[1rem]">
                        <h2 style={{color:"#032278"}} className="font-bold">Address</h2>
                        <p style={{color:"#9E9A9A"}}>Russian Federation Blvd (110), Phnom Penh 120404</p>
                        <h2 style={{color:"#032278"}} className="font-bold">Email</h2>
                        <p style={{color:"#9E9A9A"}}>zohansmth@gmail.com</p>
                        <h2 style={{color:"#032278"}} className="font-bold">Phone</h2>
                        <p style={{color:"#9E9A9A"}}>012 13 14 15</p>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default ContactInfo;