"use client";
import { signOutUser } from "@/firebase/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function GamePage() {
  const router = useRouter();

  async function handleSignOut() {
    try {
      const response = await signOutUser();
      if (response) {
        router.push("/");
      } else {
        console.error("Utloggningsfel: något gick fel");
      }
    } catch (error) {
      console.error("ett fel uppstod vid utloggning", error);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24 font-serif text-center">
      <div>
        <Link href="/gamepage">
          <h1 className="text-4xl md:text-6xl px-16 md:px-20 py-6 border-b-2 border-slate-500">
            Quiz
          </h1>
        </Link>
      </div>
      <div className="mt-24">
        <div>
          <h2 className="my-16 text-base md:text-2xl">
            Do our quiz and learn more.
          </h2>
        </div>
        <div>
          <input
            type="text"
            name="game_name"
            className="block w-full rounded border-2 p-1.5 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
            placeholder="Game name"
          />
        </div>
        <div className="mt-20 flex gap-4 items-center justify-center">
          <Link href={"/gamepage/1"}>
            <button
              // onClick={handelQuizData}
              className="px-3 py-2 border-2 border-black rounded text-xs md:text-base whitespace-nowrap hover:shadow-2xl hover:border-4"
            >
              Let’s begin!
            </button>
          </Link>
          <button
            onClick={handleSignOut}
            type="submit"
            className="px-3 py-2 border-2 border-black rounded text-xs md:text-base whitespace-nowrap hover:shadow-2xl hover:border-4"
          >
            Logout
          </button>
        </div>
      </div>
    </main>
  );
}
