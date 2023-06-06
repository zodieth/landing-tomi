import Image from "next/image";
import Link from "next/link";
import logo from "../img/logo.png";

function Header() {
  return (
    <div
      className="bg-[url(/img/oficina.jpg)] flex flex-col min-h-screen bg-slate-800 text-white bg-center bg-cover bg-blend-overlay bg-fixed bg-black/30 "
      style={{
        backgroundImage:
          "url('https://media.discordapp.net/attachments/470413233681989642/1115764547312173139/oficina.jpg?width=705&height=470')",
      }}
    >
      <div className="flex items-center h-20 mt-5 mx-5">
        <div className="mx-auto relative px-5 max-w-screen-xl w-full flex items-center  justify-between">
          <div className="text-4xl font-light uppercase absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"></div>
          {/* <Image src={logo} width={50} /> */}
          <h1 className="font-bold">LTM Software</h1>
          <nav className="flex gap-8 items-center justify-center">
            <Link href="/" className="hidden text-1xl  md:flex">
              Home
            </Link>
            <Link href="/" className="hidden text-1xl   md:flex">
              Prices
            </Link>
            <Link
              className="text-1xl px-6 py-1.5 inline-block bg-white font-extrabold text-violet-900 transition-colors rounded-[1rem]"
              href="/"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>

      <div className="flex-1 flex items-center">
        <div className="text-center mx-auto">
          <h1 className="text-6xl font-semibold">LTM Software!</h1>
          <p className="font-light text-3xl mt-5">The land of opportunity.</p>
          <Link
            className="px-6 py-2 inline-block bg-violet-600 font-bold text-white hover:bg-violet-500 transition-colors mt-10 rounded-[1rem]"
            href="/"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
