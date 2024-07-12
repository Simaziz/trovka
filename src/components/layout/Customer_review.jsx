import React from "react";
import { FaStar } from "react-icons/fa";
const Customer_review = ({}) => {
    return(
        <div className="p-[4rem]">
           <h2 style={{color:"#032278"}} className="font-bold text-[20px] border-b-2">Customer Review</h2>
           <h2 className="p-[3rem] font-bold">Rating</h2>
           <div>
              <div className="flex gap-[10rem]">
              <div>
              <div className="pl-[3rem]">
              <h1 className="font-bold text-[6rem] ">4.5</h1>
               <div style={{color:"#FBBC23"}} className="flex gap-2  ">       
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
               </div>
               <p style={{color:"#7E7D7E"}} className="text-[20px] mt-[10px]">2,256,896</p>
              </div>
              </div>
              <div className="flex gap-3">
              <div className="ul">
              <ul className="text-[20px] font-bold">
               <li className="mb-[10px] ">5</li>
                <li className="mb-[10px] ">4</li>
                <li className="mb-[10px] ">3</li> 
                <li className="mb-[10px] ">2</li>
                <li className="mb-[10px] ">1</li>
              </ul>
              </div>
              <div className="mt-[10px]">
                <div className="bg-blue-500 w-[500px] h-[10px] rounded-2xl	mr-[20rem] mb-[32px]"></div>
                <div className="bg-blue-500 w-[100px] h-[10px] rounded-2xl	mr-[20rem] mb-[32px]"></div>
                <div className="bg-blue-500 w-[65px] h-[10px] rounded-2xl	mr-[20rem] mb-[32px]"></div>
                <div className="bg-blue-500 w-[30px] h-[10px] rounded-2xl	mr-[20rem] mb-[32px]"></div>
                <div className="bg-blue-500 w-[80px] h-[10px] rounded-2xl	mr-[20rem] mb-[32px]"></div>
              </div>
              </div>
              </div>
           </div>
        </div>
    );
};
export default Customer_review;