"use client";
import { useAuth } from "@/context";
import { saveGameData } from "@/firebase/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ResultPage() {
  const [userAnswers, setUserAnswers] = useState<
    { correctAnswer: string; answer: string }[]
  >([]);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const { user } = useAuth();
  const userId = user?.uid ?? null;

  useEffect(() => {
    const storedAnswers = JSON.parse(
      localStorage.getItem("quizAnswers") || "[]"
    );
    let count = 0;
    for (const answer of storedAnswers) {
      if (answer.correctAnswer === answer.answer) {
        count++;
      }
    }
    setCorrectCount(count);
    setUserAnswers(storedAnswers);

    if (count === 5) {
      const game_name = localStorage.getItem("game_name");
      if (game_name !== null && user?.email) {
        const playDate = new Date();
        saveGameData(game_name, count, playDate, user.email);
        console.log(user.email);
      } else {
        console.error("game_name, user.email, or playDate is null");
      }
    }
  }, [user]);

  return (
    <main className="flex min-h-screen flex-col items-center p-18 mt-12 font-serif text-center">
      <div>
        <Link href="/gamepage">
          <h1 className="text-4xl md:text-6xl px-16 md:px-20 py-6 border-b-2 border-slate-500">
            Quiz
          </h1>
        </Link>
      </div>
      <div>
        <h2 className="my-8 md:my-16 text-base md:text-2xl">You´re Result.</h2>
      </div>
      <div>
        <h2 className="my-8 md:my-12 text-2xl md:text-5xl">{`${correctCount} av 5`}</h2>
      </div>
      <div>
        <div>
          {correctCount === 5 ? (
            <h2 className="my-8 md:my-12 text-xl md:text-3xl">Great job!</h2>
          ) : (
            <h2 className="my-8 md:my-12 text-xl md:text-3xl">
              Could have been better.
            </h2>
          )}
        </div>
        <Link href={"/gamepage"}>
          <button className="px-3 py-2 m-4 border-2 border-black rounded text-xs md:text-base whitespace-nowrap hover:shadow-2xl hover:border-4">
            Try again
          </button>
        </Link>
        <Link href={"/statistics"}>
          <button className="px-3 py-2 m-4 border-2 border-black rounded text-xs md:text-base whitespace-nowrap hover:shadow-2xl hover:border-4">
            Statistics
          </button>
        </Link>
      </div>
    </main>
  );
}
