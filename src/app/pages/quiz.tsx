import Quiz from "@/components/Quiz";

export default function quiz() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24 font-serif text-center">
      <h1 className="text-4xl md:text-6xl px-16 md:px-20 py-6 border-b-2 border-slate-500">
        Quiz
      </h1>
      <Quiz />
    </div>
  );
}
