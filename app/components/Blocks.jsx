import Image from "next/image";
import React from "react";
import block1 from "../img/block1.webp";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

function Blocks() {
  return (
    <div className="flex flex-col items-center justify-center mx-5 my-10 md:flex-row lg:mx-60">
      <div className="bg-[#f2f4fa] mx-5 p-10 rounded-2xl my-6 flex flex-col justify-center items-start">
        <h1 className="mt-2 text-[#2f2c4f] font-semibold text-xl">
          Te gusta mi verga?
        </h1>
        <h1 className="my-2 text-[#2f2c4f]">Vení y cometela toda</h1>
        <Image alt="image" src={block1} />
        <Link
          href="#"
          className="mt-4 flex items-center justify-center underline text-blue-700"
        >
          Probala <BsArrowRight className="mx-2" />
        </Link>
      </div>
      <div className="bg-[#f2f4fa] mx-5 p-10 rounded-2xl my-6 flex flex-col justify-center items-start">
        <h1 className="mt-2 text-[#2f2c4f] font-semibold text-xl">
          Te gusta mi verga?
        </h1>
        <h1 className="my-2 text-[#2f2c4f]">Vení y cometela toda</h1>
        <Image alt="image" src={block1} />
        <Link
          href="#"
          className="mt-4 flex items-center justify-center underline text-blue-700"
        >
          Probala <BsArrowRight className="mx-2" />
        </Link>
      </div>
    </div>
  );
}

export default Blocks;
