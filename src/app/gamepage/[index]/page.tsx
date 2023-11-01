"use client";
import Quiz from "@/components/Quiz";
import { getQuisData } from "@/firebase/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Question({ params }: { params: { index: string } }) {
  const { index } = params;
  const [quizData, setQuizData] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      const question = await getQuisData(index);
      console.log("question", question);
      if (question) {
        setQuizData(question);
      }
    };
    fetchData();
  }, [index]);

  return (
    <main className="flex min-h-screen flex-col items-center p-24 font-serif text-center">
      <div>
        <Link href="/gamepage">
          <h1 className="text-4xl md:text-6xl px-16 md:px-20 py-6 border-b-2 border-slate-500">
            Quiz
          </h1>
        </Link>
      </div>
      <Quiz quizData={quizData} currentIndex={index} />
    </main>
  );
}
