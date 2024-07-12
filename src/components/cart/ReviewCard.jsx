import React from 'react';
import img2 from '/Users/aziz/trovka-website/trovka-website/trovka/src/assets/image/avatar (1).png'
import { FaStar } from "react-icons/fa";
const ReviewCard = ({}) => {
  return (
   

<div className=''>
<div class=" w-[250px] h-[380px]    border-gray-200 shadow border- rounded-3xl  ">
    <div class=" pt-4 ml-4 "><img  src={img2} alt="profile" /></div>
    <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Van Ngo</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">july 6 ,2024</p>
        <div  class="flex gap-2 mb-3 text-[20px]" style={{color: '#F6B721'}}  >
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
        </div>
        <div class=" ">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint.</div>
    </div>

</div>
</div>
  );
};



export default ReviewCard;
