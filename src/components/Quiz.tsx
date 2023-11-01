"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type QuizProps = {
  quizData: any;
  currentIndex: string;
};

const Quiz: React.FC<QuizProps> = ({ quizData, currentIndex }) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const router = useRouter();
  const answers: { [key: string]: string } = quizData?.answers;

  const handlePrevious = () => {
    const newIndex = Number(currentIndex) - 1;
    if (newIndex >= 1) {
      router.push(`/gamepage/${newIndex}`);
    }
  };

  const handleNext = () => {
    const userAnswer = selectedOption;
    const correctAnswer = quizData?.correct_answer;

    const newIndex = Number(currentIndex) + 1;
    if (newIndex <= 5) {
      router.push(`/gamepage/${newIndex}`);
    } else {
      router.push("/gamepage");
    }
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="my-16 w-64 md:w-auto text-base md:text-2xl">
        {quizData?.question}
      </h2>
      <p className="text-sm md:text-base">Choose one option</p>
      <form action="#" className="flex flex-col items-center mt-12 gap-4">
        {answers &&
          Object.entries(answers).map(([key, value]) => (
            <div
              key={key}
              className="w-72 md:w-96 border-2 rounded flex p-2 gap-2"
            >
              <input
                type="radio"
                id={`option${key}`}
                name="quiz"
                className=" checked:bg-black"
                value={value}
                checked={selectedOption === value}
                onChange={handleOptionChange}
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
