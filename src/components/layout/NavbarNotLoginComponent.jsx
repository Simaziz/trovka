import { CiLogin } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

export const NavbarNotLoginComponent = () => {
  return (
    <>
        <div className=' w-full bg-[#022278] h-8 rounded-t-[12px] flex items-center justify-center'>
            <p className=' text-white text-center text-[15px] '>Provide a best service</p>
        </div>

        <nav className='h-[75px] bg-slate-300 w-full'>
            <div className='flex items-center h-full'>
                <img className='w-40 ml-14 mr-[89px]' src=".//src/assets/image/logo.png" alt="" />
                <div>
                  <ul className='flex justify-between w-96'>
                    <li><a href="">Service</a></li>
                    <li><a href="">Category</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">About Us</a></li>
                  </ul>
                </div>

                <div className='w-10 h-9 border-[#FFB600] border rounded-xl ml-[132px] flex justify-center items-center '>
                    <img  className=" w-6 h-6" src=".//src/assets/image/englang.png" alt="" />                  
                </div>

                <div className='w-[120px] h-9 bg-[#FFB600] rounded-xl  ml-[22px] flex justify-center items-center text-white text-[17px]' >
                    <CiLogin className='mr-2 text-[20px]'/>
                    <p className="-mt-1"> Sign In </p>
                </div>

                <div className='w-[120px] h-9 border-[#FFB600] border rounded-xl  ml-[22px] flex justify-center items-center text-black text-[17px]' >
                    <p className="-mt-1"> Sign Up </p>
                </div>

                <div className='flex items-center'>
                    <CiLight className='text-[22px] ml-5 text-[#FFB600]'/>
                </div>
            </div>
        </nav>
    </>
  )
}
