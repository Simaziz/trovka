

function Register() {
  return (
    <div className="flex flex-col justify-center bg-white rounded-2xl">
      <div className="flex flex-col justify-end w-ful max-md:max-w-full">
        <header className="w-full bg-[#022278] min-h-[50px] max-md:max-w-full" />
        <main className="flex mt-[80px] z-10 flex-col self-center w-full max-w-[1310px] max-md:max-w-full">
          <div className="flex gap-4 self-start ml-36 mt-2 text-2xl font-bold text-blue-900 max-md:ml-2.5">
            <img
              src=".//src/assets/logo/logo.png"
              alt=""
              className="shrink-0  max-w-full rounded-full aspect-[1.02] w-[105px]"
            />
            <h1 className="flex-auto my-auto">Register Account</h1>
          </div>
          <div className="self-center mt-2 w-full max-w-[1132px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <form className="flex flex-col grow px-5 text-xl max-md:mt-10 max-md:max-w-full">
                  <InputField label="Email" />
                  <div className="flex gap-5  text-blue-900 max-md:flex-wrap">
                    <InputField label="First Name" />
                    <InputField label="Last name" />
                  </div>
                  <InputField label="Password" />
                  <InputField label="Confirm Password" />
                  <div className="flex gap-2 justify-center items-center pr-4 mt-5 text-sm text-center text-black whitespace-nowrap max-md:flex-wrap">
                    <div className="flex-1 shrink-0 self-stretch my-auto h-px bg-black" />
                    <div className="self-stretch">OR</div>
                    <div className="flex-1 shrink-0 self-stretch my-auto h-px bg-black" />
                  </div>
                  <SocialSignUp />
                  <RegisterButton />
                  <LoginPrompt />
                </form>
              </section>
              <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src=".//src/assets/image/register.jpg"
                  alt="Registration illustration"
                  className="w-[90%] ml-[120px] mt-[20px] aspect-square max-md:mt-10 max-md:max-w-full"
                />
              </section>
            </div>
          </div>
        </main>

        <footer className="w-full mt-[80px] bg-blue-900 border min-h-[50px] max-md:max-w-full"/>
      </div>
    </div>
  );
}

function InputField({ label }) {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="mt-6">
      <label htmlFor={id} className="text-blue-900 max-md:max-w-full">
        {label}
      </label>
      <input
        type={label.toLowerCase() === "email" ? "email" : "text"}
        id={id}
        className="shrink-0 bg-white rounded-xl border border-solid border-black border-opacity-20 h-[45px] w-full max-md:max-w-full"
        aria-label={label}
      />
    </div>
  );
}

function SocialSignUp() {
  return (
    <div className="flex justify-center items-center px-16 mt-4 text-base text-center text-blue-900 rounded-lg border border-solid border-black border-opacity-20 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-1 justify-center px-4 py-2.5 rounded-lg">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/05062ea49b9844fa05e5105ab390ea0697b129eb6853d021333c5f24b47481e3?apiKey=058120d96f274ddc90397edaf277e1fd&"
          alt=""
          className="shrink-0 my-auto aspect-square w-[18px]"
        />
        <span>Sign up with Google</span>
      </div>
    </div>
  );
}

function RegisterButton() {
  return (
    <button className="justify-center items-center py-3 mt-6 text-white whitespace-nowrap bg-yellow-400 rounded-xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
      Register
    </button>
  );
}

function LoginPrompt() {
  return (
    <div className="flex gap-1.5 self-center mt-10 text-lg">
      <p className="font-Regular text-black">Already have an account?</p>
      <a href="#" className="self-start text-yellow-400">
        Login
      </a>
    </div>
  );
}

export default Register;
