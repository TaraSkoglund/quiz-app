"use client";
import React from "react";

type QuizProps = {
  quizData: any;
};

const Quiz: React.FC<QuizProps> = ({ quizData }) => {
  const answers: { [key: string]: string } = quizData?.answers;

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
              />
              <label htmlFor={`option${key}`}>{value as React.ReactNode}</label>
            </div>
          ))}
      </form>
      <div className="w-96 flex justify-evenly items-center mt-8">
        <button className="w-24 py-2 bg-button rounded text-xs md:text-base whitespace-nowrap hover:shadow-2xl hover:bg-hover">
          Previous
        </button>
        <button className="w-24 py-2 bg-button rounded text-xs md:text-base whitespace-nowrap hover:shadow-2xl hover:bg-hover">
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
