"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ResultPage() {
  const [userAnswers, setUserAnswers] = useState<
    { correctAnswer: string; answer: string }[]
  >([]);
  const [correctCount, setCorrectCount] = useState<number>(0);

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
  }, []);

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
      </div>
    </main>
  );
}
