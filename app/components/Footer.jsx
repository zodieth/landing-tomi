import React from "react";

function Footer() {
  return (
    <div className="flex items-center justify-center mt-20 mb-10 ">
      <div className="flex flex-col w-full mx-10 md:flex-row md:justify-between md:mx-40  ">
        <div className="py-2 mx-0 md:mx-10">
          <h1 className="text-[#2f2c4f] text-2xl font-bold hover:underline cursor-pointer">
            desaign
          </h1>
          <h4 className="text-[#6d6c83] py-2 w-60">
            AI-driven content and machine learning software to supercharge
            designers and developers workflow.
          </h4>
        </div>
        <div className="py-2 mx-0 md:mx-10">
          <h1 className="text-[#2f2c4f] text-2xl font-bold hover:underline cursor-pointer">
            Product
          </h1>
          <h4 className="text-[#6d6c83] py-2">FAQs</h4>
          <h4 className="text-[#6d6c83] py-2">Pricing</h4>
        </div>
        <div className="py-2 mx-0 md:mx-10">
          <h1 className="text-[#2f2c4f] text-2xl font-bold hover:underline cursor-pointer">
            Company
          </h1>
          <h4 className="text-[#6d6c83] py-2">About</h4>
        </div>
        <div className="py-2 mx-0 md:mx-10">
          <h1 className="text-[#2f2c4f] text-2xl font-bold hover:underline cursor-pointer">
            Resources
          </h1>
          <h4 className="text-[#6d6c83] py-2">Blog</h4>
        </div>
      </div>
    </div>
  );
}

export default Footer;
