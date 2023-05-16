import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  function getData() {
    fetch("https://606147f0ac47190017a70992.mockapi.io/api/v1/users")
      .then((response) => response.json())
      .then((result) => setData(result));
  }

  useEffect(() => getData(), []);

  const router = useRouter();

  return (
    <div className="w-full bg-slate-900 px-40 text-slate-100 py-10">
      <div className="pb-10 text-3xl">User List</div>
      <div className="w-full grid grid-cols-4 gap-10">
        {data.map((row) => (
          <div
            onClick={() => router.push(`/user/${row.id}`)}
            className="w-full rounded-lg hover:bg-gradient-to-t cursor-pointer hover:from-cyan-500 hover:to-slate-800 border-2 border-cyan-400 aspect-square py-10 flex flex-col items-center gap-8"
            key={row.id}
          >
            <img src={row.avatar} alt={row.name} className="rounded-full" />
            <div className="text-lg font-bold">{row.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
