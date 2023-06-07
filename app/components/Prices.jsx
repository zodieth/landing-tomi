import Link from "next/link";
import React from "react";

const prices = [
  {
    name: "Intro",
    price: "Free",
    description: "Good for trying out, or the occassional design project.",
    details: [
      "Works with major design software",
      "One project per month",
      "Volunteer forum support",
    ],
    type: "normal",
    button: "Sign Up",
    link: "#",
  },
  {
    name: "Solo (Recommended)",

    price: "$25",
    description: "Great for the professional web or product designer.",
    details: [
      "Works with major design software",
      "One project per month",
      "Volunteer forum support",
    ],
    type: "Recommended",
    button: "Free 15 Day Trial",
    link: "#",
  },
  {
    name: "Teams",
    price: "$50",
    description: "Perfect for agencies and product teams with designers.",
    details: [
      "Works with major design software",
      "One project per month",
      "Volunteer forum support",
    ],
    type: "normal",
    button: "Free 15 Day Trial",
    link: "#",
  },
];

function Prices() {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[#2f2c4f] font-semibold text-4xl">Our Pricing</h1>
        <h5 className="mt-5 text-[#6d6c83] text-1xl w-80 md:w-[40rem] lg:w-full ">
          Our pricing structure is built to be affordable for everyone from
          individual designers to teams.
        </h5>
      </div>

      <div className="mt-5 flex flex-col items-center justify-center md:flex-row">
        {prices &&
          prices?.map((e) => (
            <div
              className={
                e.type === "Recommended"
                  ? "flex flex-col items-center justify-center bg-[#2e1cff] mx-5 p-[3rem] rounded-2xl my-6 max-h-[40rem] max-w-[30rem] "
                  : "flex flex-col items-center justify-center bg-[#f2f4fa] mx-5  p-[3rem] rounded-2xl my-6 max-h-[40rem] max-w-[30rem] "
              }
            >
              <div>
                <h1
                  className={
                    e.type === "Recommended"
                      ? " text-white font-semibold"
                      : "text-[#2f2c4f] font-semibold"
                  }
                >
                  {e.name}
                </h1>
                <div
                  className={
                    e.type === "Recommended"
                      ? " text-white font-semibold mt-4 text-2xl py-6"
                      : "text-[#2f2c4f] font-semibold mt-4 text-2xl py-6"
                  }
                >
                  {e.price}
                </div>
                <h1
                  className={
                    e.type === "Recommended"
                      ? " text-white mt-4 text-xl pb-6"
                      : "text-[#2f2c4f] mt-4 text-xl pb-6"
                  }
                >
                  {e.description}
                </h1>
                <div className="flex flex-col">
                  {e.details.map((des) => (
                    <div
                      className={
                        e.type === "Recommended"
                          ? " text-white mt-4 "
                          : "text-[#2f2c4f] mt-4"
                      }
                    >
                      -{des}
                    </div>
                  ))}
                </div>
              </div>
              <Link
                href={e.link}
                className={
                  e.type === "Recommended"
                    ? "flex items-center justify-center mt-10 py-2 text-[#2e1cff] font-semibold w-full bg-white rounded-2xl "
                    : "flex items-center justify-center mt-10 py-2 text-white font-semibold  w-full bg-[#2e1cff] rounded-2xl"
                }
              >
                {e.button}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Prices;
