import React from "react";
export const RegisterWithGoogle = () => {
  return(
    <>
      <div className="w-[600px] h-[600px] mt-[85px] ml-[450px] border border-grey rounded-lg">
        <div className=" h-[250px]">
          <div className="flex justify-center pt-10 pb-5">
            <img className="w-[80px]" src=".//src/assets/image/Trovka icon.png" alt="" />
          </div>
          <div>
            <p className="text-blue-800 flex justify-center pt-0 text-md font-bold">
              Choose An Google Account
            </p>
            <p className="text-grey-600 flex justify-center pt-0 text-sm mt-5">
              to register to TROVKA
            </p>
          </div>
        </div>

        <div className="h-[250px] ">
          <div className=" h-[75px] flex pt-3">
            <div className="pl-20 pr-5">
              <a href="#"><img className="w-[50px] rounded-full" src=".//src/assets/image/profile.png" alt="" /></a>
            </div>
            <div>
              <p className="text-sm font-medium pb-1"><a href="#">Chim Saina</a></p>
              <p className="text-sm font-extralight"><a href="#">Chimsaina@gmail.com</a></p>
            </div>
          </div>
          <hr className="w-[500px] ml-12"/>

          <div className=" h-[75px] flex pt-3">
            <div className="pl-20 pr-5">
              <a href="#"><img className="w-[50px] h-[50px] rounded-full" src=".//src/assets/image/kitty.jpg" alt="" /></a>
            </div>
            <div>
              <p className="text-sm font-medium pb-1"><a href="#">SainaIna Chim</a></p>
              <p className="text-sm font-extralight"><a href="#">Chimsaina168@gmail.com</a></p>
            </div>
          </div>
          <hr className="w-[500px] ml-12"/>

          <div className=" h-[75px] flex pt-3">
            <div className="pl-20 pr-5">
              <a href="#"><img className="w-[50px] h-[50px] rounded-full" src=".//src/assets/image/fox.jpg" alt="" /></a>
            </div>
            <div>
              <p className="text-sm font-medium pt-4"><a href="#">Use another account</a></p>
            </div>
          </div>
          <hr className="w-[500px] ml-12" />

        </div>
      </div>
    </>
  )
}