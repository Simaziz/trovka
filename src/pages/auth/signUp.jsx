import * as React from "react";

export function SignUp() {
  return (
    <div className="flex flex-col bg-white rounded-2xl ">
      
      <div className="flex flex-col items-center self-center mt-24 w-full max-w-[1310px] max-md:mt-10 max-md:max-w-full">
        <div className="px-5 max-w-full w-[574px]">
          <div className="flex gap-8 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[30%] h-[70px] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="src/assets/image/Flag-Cam.png"
                className="grow shrink-0 max-w-full rounded-full aspect-[1.03] w-[141px] max-md:mt-3.5"
              />
            </div>
            <div className="flex w-[700px] max-md:ml-1 max-md:w-full">
              <div className="my-auto text-2xl font-bold text-blue-900">
                Welcome to OUR TROVKA Service
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 max-w-full w-[828px] max-md:mt-10 align-center text-center justify-center">
          <div className="flex gap-10 max-md:flex-col max-md:gap-0 text-center align-center justify-center  ">
            <div className="flex flex-col w-6/12 max-md:ml-8 max-md:w-full text-center">
              <div className="grow justify-center text-center px-16 pt-24 pb-20 w-full text-2xl text-white bg-yellow-400 rounded-2xl max-md:pr-7 max-md:pl-7 max-md:mt-10">
                Sign Up As Customer
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="grow text-center align-center justify-center pt-24 pr-20 pb-20 pl-20 w-full text-2xl text-white bg-yellow-400 rounded-2xl max-md:px-8 max-md:mt-10">
                Sign Up As Provider
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
export default SignUp;
