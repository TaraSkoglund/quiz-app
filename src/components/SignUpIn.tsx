"use client";
import Form from "@/components/Form";
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
        <button
          className="hover:underline"
          onClick={() => handleToggleForm(true)}
        >
          Login
        </button>
        /
        <button
          className="hover:underline"
          onClick={() => handleToggleForm(false)}
        >
          Register
        </button>
      </h2>
      <Form isLogin={isLogin} />
    </div>
  );
};

export default Signupin;
