"use client";
import { registerUser, signInUser } from "@/firebase/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  isLogin: Boolean;
}

const Form = (props: Props) => {
  const { isLogin } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handelSignIn(e: any) {
    e?.preventDefault();
    if (!isLogin) {
      const response = await registerUser(email, password);
      if (response) {
        router.push("/gamepage");
      } else {
        console.error("Registreringsfel: något gick fel");
      }
    } else {
      const response = await signInUser(email, password);
      if (response) {
        router.push("/gamepage");
      } else {
        console.error("Inloggningsfel: något gick fel");
      }
    }
  }

  return (
    <form
      onSubmit={handelSignIn}
      className="mt-12 flex flex-col items-start w-60 md:w-80 gap-4"
    >
      <input
        type="email"
        name="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="email"
        className="block w-full rounded border-2 p-1.5 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
        placeholder="Email address"
      />
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="Password"
        className="block w-full rounded border-2 p-1.5 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
        placeholder="Password"
      />
      <div className="flex items-center justify-center w-60 md:w-80">
        <button
          type="submit"
          className="mt-6 px-6 py-2 border-2 border-black rounded text-xs md:text-base whitespace-nowrap hover:shadow-2xl hover:border-4"
        >
          {isLogin ? "Login" : "Register"}
        </button>
      </div>
    </form>
  );
};

export default Form;
