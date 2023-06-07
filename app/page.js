import Blocks from "./components/Blocks";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Image from "./components/Image";

export default function Home() {
  return (
    <main>
      <Header />
      <Slider />
      <Blocks />
      <Image />
    </main>
  );
}
