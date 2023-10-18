"use client";
import Link from "next/link";
import { useState } from "react";
const Signupin = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggleForm = (
    isLogin: boolean | ((prevState: boolean) => boolean)
  ) => {
    setIsLogin(isLogin);
  };
  return (
    <div>
      <h2 className="my-16 text-base md:text-2xl">
        {" "}
        <button
          className="hover:underline"
          onClick={() => handleToggleForm(true)}
        >
          Login
        </button>{" "}
        /{" "}
        <button
          className="hover:underline"
          onClick={() => handleToggleForm(false)}
        >
          Register
        </button>
      </h2>
      {isLogin ? (
        <form
          action="login"
          className="mt-12 flex flex-col items-start w-60 md:w-80 gap-4"
        >
          <input
            type="email"
            autoComplete="email"
            className="block w-full rounded border-2 p-1.5 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
            placeholder="Email address"
          />
          <input
            type="text"
            autoComplete="Password"
            className="block w-full rounded border-2 p-1.5 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
            placeholder="Password"
          />
        </form>
      ) : (
        <form
          action="login"
          className="mt-12 flex flex-col items-start w-60 md:w-80 gap-4"
        >
          <input
            type="text"
            className="block w-full rounded border-2 p-1.5 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
            placeholder="Game name"
          />
          <input
            type="email"
            autoComplete="email"
            className="block w-full rounded border-2 p-1.5 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
            placeholder="Email address"
          />
          <input
            type="text"
            className="block w-full rounded border-2 p-1.5 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
            placeholder="Password"
          />
          <input
            type="text"
            className="block w-full rounded border-2 p-1.5 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
            placeholder="Repeat password"
          />
        </form>
      )}
      <Link href="#">
        <button className="mt-6 px-6 py-2 border-2 border-black rounded text-xs md:text-base whitespace-nowrap hover:shadow-2xl hover:border-4">
          Start
        </button>
      </Link>
    </div>
  );
};

export default Signupin;
