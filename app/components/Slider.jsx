import Image from "next/image";
import React from "react";
import js from "../img/languages/js.png";
import css from "../img/languages/css.png";
import node from "../img/languages/node.png";
import html from "../img/languages/html.png";

function Slider() {
  return (
    <div className="mt-5 flex flex-col items-center justify-center m-2">
      <div className="font-semibold text-violet-950 text-2xl md:text-3xl lg:text-4xl">
        700+ Clients
      </div>
      <div className="flex flex-col gap-2 md:flex-row grayscale-[80%] md:gap-10 lg:gap-20">
        <Image src={js} width={100} className="m-6" />
        <Image src={css} width={100} className="m-6" />
        <Image src={node} width={100} className="m-6" />
        <Image src={html} width={100} className="m-6" />
      </div>
    </div>
  );
}

export default Slider;
