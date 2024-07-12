import React from 'react';
import { FaStar } from "react-icons/fa";
import img_profile from '/Users/aziz/trovka-website/trovka-website/trovka/src/assets/image/represent-cher-keo.png';
import img_2 from '/Users/aziz/trovka-website/trovka-website/trovka/src/assets/image/Rectangle 97.png';

const Header_Provider_Profile = ({}) => {
    return (
    <div class="flex" >
      
            <div class="bg-white-400 w-[75%] h-[300px]">
            <div className='ml-[40rem] w-[400px] flex h-[300px]  items-center absolute'>
                <img src={img_2} alt="" />
            </div>
            <div class=" ml-[15rem] mt-[4rem] w-[120px]">
          
            <img src={img_profile} alt="" />
            <h2 class='mt-2 text-center'>Pu Chhveng</h2>
            </div>
            <p class='ml-[12.5rem] text-[11px]'>We Provide best Electronic services</p>
            <div class='flex ml-[16rem] gap-1'>
            <div class='flex ' style={{color:'#FFB621'}}> 
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar /></div>
                <div style={{color:'#D9D9D9'}}><FaStar /></div>
            </div>
            <div style={{color:'#525F7F'}} className=' text-[10px] font-bold flex gap-8 ml-[15.3rem] mt-[6px]'>
                <div className=''>
                    <div className='ml-[10px]'>22</div>
                    <div style={{color:'#C1C7CD'}} className='font-normal'>Service</div>
                </div>
                <div>
                    <div className='ml-[10px]'>80</div>
                    <div style={{color:'#C1C7CD'}} className=' font-normal'>Review</div>
                </div>
            </div>

          
        </div> 
      
        <div class="bg-[#032278] w-[25%] h-[300px]"></div>
    </div>
    );
};
export default Header_Provider_Profile;
