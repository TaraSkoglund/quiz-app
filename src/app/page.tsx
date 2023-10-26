"use client";
import Signupin from "@/components/SignUpIn";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 font-serif text-center">
      <div>
        <Link href="#">
          <h1 className="text-4xl md:text-6xl px-16 md:px-20 py-6 border-b-2 border-slate-500">
            Quiz
          </h1>
        </Link>
      </div>
      <Signupin />
    </main>
  );
}
