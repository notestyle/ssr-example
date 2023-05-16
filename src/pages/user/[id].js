import Head from "next/head";
import React from "react";

export default function UserDetail({ data }) {
  return (
    <>
      <Head>
        <title>{data.name} - facebook</title>
        <meta property="og:title" content={`Hello ${data.name}!`} />
        <meta property="og:type" content="video.movie" />
        <meta property="og:image" content={data.avatar} />
      </Head>
      <div className="w-full h-screen flex-col text-slate-100 bg-gradient-to-b from-slate-800 to-sky-500 flex justify-center items-center">
        <img alt="my image" src={data.avatar} />
        <div>{data.name}</div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://606147f0ac47190017a70992.mockapi.io/api/v1/users/2`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
