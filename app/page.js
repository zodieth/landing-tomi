import Blocks from "./components/Blocks";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Image from "./components/Image";
import Prices from "./components/Prices";

export default function Home() {
  return (
    <main>
      <Header />
      <Slider />
      <Blocks />
      <Image />
      <Prices />
    </main>
  );
}
