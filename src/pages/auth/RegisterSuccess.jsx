export const RegisterSuccess = () => {
  return (
    <>
      <div className="flex justify-center items-center px-16 py-20 text-center text-black bg-white rounded-2xl   ">
        <div
          className="flex justify-center items-center px-16 py-20 mt-0 max-w-400 rounded-2xl border-indigo-300 border-solid bg-white bg-opacity-10  border-[3px] w-[400px] h-[350px] max-md:px-5 max-md:mt-10"
        >
          <div className="flex flex-col mt-40 mb-40 max-w-full w-[300px] max-md:my-10">
            <div className="self-center text-3xl">Thanks You !!</div>
            <div className="mt-5 text-lg max-md:mt-10">
              you have successfully registered to TrovKa
            </div>
            <div className="justify-center items-center px-15 py-2 mt-10 text-xl font-bold text-white whitespace-nowrap bg-yellow-300 rounded-2xl max-md:px-5 max-md:mt-10">
              OK
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
