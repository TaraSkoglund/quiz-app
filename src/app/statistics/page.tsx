import Link from "next/link";

export default function StatisticsPage() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24 font-serif text-center">
      <Link href="/gamepage">
        <h1 className="text-4xl md:text-6xl px-16 md:px-20 py-6 border-b-2 border-slate-500">
          Quiz
        </h1>
      </Link>

      <div className="w-72 md:w-96 mt-12 border-2 rounded flex p-2 gap-2 justify-between">
        <h2>game_name</h2> <h2>result</h2>
      </div>
    </div>
  );
}
