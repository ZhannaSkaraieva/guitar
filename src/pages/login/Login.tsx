import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      {/** НА ГЛАВНУЮ СТРАНИЦУ */}
      <div className="">
        <NavLink to="/" end className="ml-4 mt-4 text-blue-500 underline">
          На главную
        </NavLink>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white ">
        <h1 className="m-4 font-[Open Sans] font-bold text-2xl leading-[100%] tracking-normal ">
          Sing IN
        </h1>
        <form action="">
          <div className="flex flex-col mb-4">
            <label className="font-[Open Sans] font-normal text-sm leading-[10px] tracking-[5%]">
              Enter your email:{" "}
            </label>
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-[Open Sans] font-normal text-sm leading-[10px] tracking-[5%]">
              Enter your password:{" "}
            </label>
            <input type="password" placeholder="password" name="password" />
          </div>
          <div>
            <input type="submit" value="Subscribe!" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
