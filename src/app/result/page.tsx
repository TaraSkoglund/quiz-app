"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ResultPage() {
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState<string[]>([]);

  useEffect(() => {
    const storedAnswers = JSON.parse(
      localStorage.getItem("quizAnswers") || "[]"
    );
    setUserAnswers(storedAnswers);
  }, []);

  useEffect(() => {
    const storedCorrectAnswers = JSON.parse(
      localStorage.getItem("correctAnswers") || "[]"
    );
    setCorrectAnswers(storedCorrectAnswers);
  }, []);

  const filteredUserAnswers = userAnswers.filter((answer) =>
    correctAnswers.includes(answer)
  );

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
        <h2 className="my-16 text-base md:text-2xl">You´re Resulte.</h2>
      </div>
      <div>
        {filteredUserAnswers.map((answer, index) => (
          <h2 key={index} className="my-16 text-2xl md:text-5xl">
            {answer} av 5
          </h2>
        ))}
      </div>
      <div>
        <div>
          <h2 className="my-16 text-base md:text-xl">
            It could have been better.
          </h2>
          <h2 className="my-16 text-base md:text-xl">Greate jobb.</h2>
        </div>
      </div>
    </main>
  );
}
