import React, { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted", { email, password, rememberMe });
  };

  return (
    <div className="flex flex-col justify-center bg-white rounded-2xl">
      <div className="flex flex-col w-full bg-white max-md:max-w-full">
        
        <main className="flex flex-col self-center mt-16 w-full max-w-[1310px] max-md:mt-10 max-md:max-w-full">
          <section className="self-center ml-[100px] mt-[50px] w-full max-w-[1095px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <form onSubmit={handleSubmit} className="flex flex-col grow px-5 text-xl max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-4 self-start ml-4 text-2xl font-bold text-blue-900 max-md:ml-2.5">
                    <img
                      src=".//src/assets/logo/logo.png"
                      alt="Logo"
                      className="shrink-0  mr-[10px] mt-[5px] max-w-full rounded-full aspect-[1.02] w-[105px]"
                    />
                    <h1 className="flex-auto my-auto">Login Account</h1>
                  </div>
                  <p className="mt-[20px] text-black max-md:max-w-full">Hi, Welcome back!</p>
                  <label htmlFor="email" className="mt-8 text-blue-900 max-md:max-w-full">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="shrink-0 mt-4 bg-white rounded-xl border border-solid border-black border-opacity-20 h-[47px] max-md:max-w-full"
                  />
                  <label htmlFor="password" className="mt-8 text-blue-900 max-md:max-w-full">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="shrink-0 mt-3.5 bg-white rounded-xl border border-solid border-black border-opacity-20 h-[47px] max-md:max-w-full"
                  />
                  <div className="flex gap-5 mt-8 w-full text-lg max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-1 gap-3 self-start text-black">
                      <input
                        type="checkbox"
                        id="remember"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="shrink-0 mt-[5px] m-[10px] bg-white rounded-sm border border-solid border-zinc-400 h-[18px] w-[18px]"
                      />
                      <label htmlFor="remember" className="flex-auto">
                        Remember Me
                      </label>
                    </div>
                    <a href="#" className="flex text-blue-900 mr-[10px]">
                      Forgot Password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="justify-center items-center px-16 py-5 mt-12 text-white whitespace-nowrap bg-yellow-400 rounded-xl max-md:px-5 max-md:mt-10 max-md:max-w-full"
                  >
                    Login
                  </button>
                  <div className="flex gap-3 self-center mt-9 text-lg">
                    <p className="font-regular text-black">Don't have an account yet?</p>
                    <a href="#" className="my-auto text-yellow-400">
                      Sign Up here
                    </a>
                  </div>
                </form>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  src=".//src/assets/image/login.png"
                  alt="Login Pic"
                  className="self-stretch my-auto ml-[100px] w-full aspect-[1.12] max-md:mt-10 max-md:max-w-full"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default LoginPage;