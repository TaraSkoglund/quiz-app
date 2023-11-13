"use client";
import { saveGameData } from "@/firebase/utils";
import { useRouter } from "next/navigation";
import React, { useMemo, useState } from "react";

type QuizProps = {
  quizData: any;
  currentIndex: string;
};

const Quiz: React.FC<QuizProps> = ({ quizData, currentIndex }) => {
  const [selectedOption, setSelectedOption] = useState<{
    correctAnswer: string;
    answer: string;
  }>();
  const router = useRouter();

  const shuffledAnswers = useMemo(() => {
    const answers: { [key: string]: string } = quizData?.answers || {};
    const shuffledArray = Object.entries(answers).sort(
      () => Math.random() - 0.5
    );
    return shuffledArray;
  }, [quizData]);

  const [error, setError] = useState<string>("");
  const [userAnswers, setUserAnswers] = useState<
    { correctAnswer: string; answer: string }[]
  >([]);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [dataSent, setDataSent] = useState(false);

  const handlePrevious = () => {
    const userAnswers = JSON.parse(localStorage.getItem("quizAnswers") || "[]");
    userAnswers.pop();
    localStorage.setItem("quizAnswers", JSON.stringify(userAnswers));

    const newIndex = Number(currentIndex) - 1;
    if (newIndex >= 1) {
      router.push(`/gamepage/${newIndex}`);
    }
  };

  const handleNext = () => {
    if (!selectedOption) {
      setError("Please select an option before proceeding.");
      return;
    }

    const userAnswers = JSON.parse(localStorage.getItem("quizAnswers") || "[]");
    userAnswers.push(selectedOption);
    localStorage.setItem("quizAnswers", JSON.stringify(userAnswers));

    const newIndex = Number(currentIndex) + 1;
    if (newIndex <= 5) {
      router.push(`/gamepage/${newIndex}`);
    } else {
      if (!dataSent) {
        setUserAnswers(userAnswers);
        let count = 0;
        for (const answer of userAnswers) {
          if (answer.correctAnswer === answer.answer) {
            count++;
          }
        }
        setCorrectCount(count);
        const game_name = localStorage.getItem("game_name");
        if (game_name !== null) {
          saveGameData(game_name, count);
        }
        setDataSent(true);
      }
      router.push("/result");
    }
  };

  const handleOptionChange = (value: any) => {
    setSelectedOption({
      correctAnswer: quizData?.correct_answer || "",
      answer: value,
    });
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="my-16 w-64 md:w-auto text-base md:text-2xl">
        {quizData?.question}
      </h2>
      <p className="text-sm md:text-base">Choose one option</p>
      <form action="#" className="flex flex-col items-center mt-12 gap-4">
        {shuffledAnswers.map(([key, value]) => (
          <div
            key={key}
            className="w-72 md:w-96 border-2 rounded flex p-2 gap-2"
          >
            <input
              type="radio"
              id={`option${key}`}
              name="quiz"
              className=" checked:bg-black"
              value={value.toString()}
              checked={selectedOption?.answer === key}
              onChange={(e) => {
                e.preventDefault, handleOptionChange(key);
              }}
            />
            <label htmlFor={`option${key}`}>{value as React.ReactNode}</label>
          </div>
        ))}
      </form>
      <div className="w-96 flex justify-evenly items-center mt-8">
        <button
          onClick={handlePrevious}
          disabled={Number(currentIndex) === 1}
          className="w-24 py-2 bg-button rounded text-xs md:text-base whitespace-nowrap hover:shadow-2xl hover:bg-hover"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="w-24 py-2 bg-button rounded text-xs md:text-base whitespace-nowrap hover:shadow-2xl hover:bg-hover"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
