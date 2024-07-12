import React from "react"

export const VerifyEmail = () =>{
  return(
    <>
      <div className="w-[450px] h-[450px] bg-white mt-[85px] ml-[550px] border-4 border-blue-400">
          <div className="flex flex-col items-center mt-12 mb-8">
            <img className="w-[80px]" src=".//src/assets/image/image.png" alt="" />
          </div>
          <div>
            <p className="text-blue-800 flex justify-center pb-0 text-lg ">
              Congratulation</p>
            <p className="text-blue-800 flex justify-center pt-0 text-lg">
              You successfully registered !</p>
          </div>
          <div className="mt-5">
            <p className="flex justify-center">A confirmation have been sent to</p>
            <p className="flex justify-center">trovka@gamil.com</p>
            <p className="flex justify-center">Please verify your email to continue us !</p>
          </div>
          <div className="flex flex-col items-center mt-10">
            <button class="w-[250px] bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg">
              Next
            </button>
          </div>
      </div>
    </>
  )
}