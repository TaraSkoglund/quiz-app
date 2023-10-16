import Quiz from "@/components/Quiz";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 font-serif text-center">
      <div>
        <h1 className="text-4xl md:text-6xl px-16 md:px-20 py-6 border-b-2 border-slate-500">
          Quiz
        </h1>
      </div>
      <div className="mt-24">
        <div>
          <h2 className="my-16 text-base md:text-2xl">
            Do our quiz and learn more.
          </h2>
        </div>
        <div>
          <button className=" px-3 py-2 border-2 border-black rounded text-xs md:text-base whitespace-nowrap hover:shadow-2xl hover:border-4">
            Let’s begin!
          </button>
        </div>
      </div>
      {/* <Signupin /> */}
      <Quiz />
    </main>
  );
}
