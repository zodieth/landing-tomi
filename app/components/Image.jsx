import Link from "next/link";
import React from "react";

function Image() {
  return (
    <div
      className="mt-10 flex flex-col items-center justify-center min-h-[30rem] bg-slate-800 text-white bg-center bg-cover bg-blend-overlay bg-fixed bg-black/30 "
      style={{
        backgroundImage:
          "url('https://media.discordapp.net/attachments/470413233681989642/1116047708826894416/bannerWeb.jpg?width=705&height=529')",
      }}
    >
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col justify-center items-center  mx-auto">
          <h1 className="text-4xl font-semibold md:text-6xl">
            Keep learning as you go.
          </h1>
          <p className="font-light text-1xl mt-5 w-[25rem] md:w-[40rem] lg:w-[50rem] md:text-2xl ">
            Want to be first in line to learn tips and tricks for supercharging
            your mockups with Desaign? There are many helpful resources in our
            blog.
          </p>
          <Link
            className="px-6 py-2 inline-block bg-[#2e1cff] text-1xl font-bold text-white hover:bg-[#4B3AFF] transition-colors mt-10 rounded-[1rem]"
            href="/"
          >
            Read Our Blog
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Image;
