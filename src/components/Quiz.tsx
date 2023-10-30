"use client";
import { getQuisData } from "@/firebase/utils";

type QuizProps = {
  quizData: any;
};

const Quiz: React.FC<QuizProps> = ({ quizData }) => {
  async function handelQuizData() {
    const question = await getQuisData("");
    console.log("question", question);
  }

  return (
    <div className="flex flex-col items-center mt-12">
      <h2 className="my-16 text-base md:text-2xl">{quizData?.question}</h2>
      <p>Choose one options</p>
      <form action="#" className="flex flex-col items-center mt-12 gap-4">
        <div className="w-80 border-2 rounded flex p-2 gap-2">
          <input type="checkbox" className=" checked:bg-black" />
          <p>North</p>
        </div>
        <div className="w-80 border-2 rounded flex p-2 gap-2">
          <input type="checkbox" className=" checked:bg-black" />
          <p>South</p>
        </div>
        <div className="w-80 border-2 rounded flex p-2 gap-2">
          <input type="checkbox" className=" checked:bg-black" />
          <p>West</p>
        </div>
        <div className="w-80 border-2 rounded flex p-2 gap-2">
          <input type="checkbox" className=" checked:bg-black" />
          <p>East</p>
        </div>
      </form>
      <div className="w-96 flex justify-evenly items-center mt-8">
        <button className="w-24 py-2 bg-button rounded text-xs md:text-base whitespace-nowrap hover:shadow-2xl hover:bg-hover">
          Previous
        </button>
        <button
          onClick={handelQuizData}
          className="w-24 py-2 bg-button rounded text-xs md:text-base whitespace-nowrap hover:shadow-2xl hover:bg-hover"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
