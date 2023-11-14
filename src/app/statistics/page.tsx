"use client";
import { auth } from "@/firebase/config";
import { getAllGameData } from "@/firebase/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

type GameData = {
  game_name: string;
  result: number;
  play_date: any;
};

export default function StatisticsPage() {
  const [gameDataList, setGameDataList] = useState<GameData[]>([]);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllGameData = async () => {
      try {
        const allGameData = await getAllGameData();

        setGameDataList(allGameData);
      } catch (error) {
        console.error("Error fetching all game data: ", error);
      }
    };

    fetchAllGameData();

    const user = auth.currentUser;
    if (user) {
      setUserEmail(user.email || null);
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center p-24 font-serif text-center">
      <div>
        <Link href="/gamepage">
          <h1 className="text-4xl md:text-6xl px-16 md:px-20 py-6 border-b-2 border-slate-500">
            Quiz
          </h1>
        </Link>
      </div>

      {gameDataList.length > 0 ? (
        <div className="mt-12">
          {gameDataList.map((gameData, index) => (
            <div key={index}>
              <div className="w-72 md:w-96 border-2 rounded flex p-2 mt-2 justify-between">
                <h2>{gameData.game_name}</h2>
                <div className="flex gap-4">
                  <h2>{gameData.result}p</h2>
                  <h2>
                    {gameData.play_date
                      ? gameData.play_date
                          .toDate()
                          .toLocaleString()
                          .substring(0, 10)
                      : "N/A"}
                  </h2>
                </div>
              </div>
              <div>
                <h2 className=" text-base mb-6">
                  User Email: {userEmail || "Not available"}
                </h2>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="m-12">No game data available</p>
      )}
      <Link href={"/result"}>
        <button className="px-3 py-2 m-4 w-72 md:w-96 border-2 border-black rounded text-xs md:text-base whitespace-nowrap hover:shadow-2xl hover:border-4">
          Return
        </button>
      </Link>
    </div>
  );
}
