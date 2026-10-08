import { useState, useEffect } from "react";
import img1 from "../assets/home_image1.png";
import img2 from "../assets/home_image2.png";
import img3 from "../assets/home_image3.png";
import {
  HomeSection2,
  HomeSection3,
  HomeSection4,
  HomeBottom,
} from "./index.js";

const images = [img1, img2, img3];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevImg) => (prevImg + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
<main className="w-full overflow-hidden">
  <section
    className="
      w-full
      h-[95px]
      sm:h-[125px]
      md:h-[170px]
      lg:h-[260px]
      overflow-hidden
      bg-[#f4f4f4]
    "
  >
    <img
      src={images[current]}
      alt={`Home slide ${current + 1}`}
      className="
        block
        w-full
        h-auto
        transition-all
        duration-700
      "
    />
  </section>
</main>

      {/* Section 2 */}
      <section
        id="section2"
        className="
    w-full
    h-auto
    px-4
    pt-0
    pb-28
    sm:px-6
    sm:pt-0
    md:px-10
    md:pt-0
    lg:px-16
    lg:pt-0
    bg-[#f4f4f4]
  "
      >
        <HomeSection2 />
      </section>

      {/* Section 3 */}
      <section
        id="section3"
        className="w-full min-h-screen px-4 py-12 sm:px-6 md:px-10 lg:px-16 bg-[#e6eaf7]"
      >
        <HomeSection3 />
      </section>

      {/* Section 4 */}
      <section
        id="section4"
        className="w-full min-h-screen px-4 py-12 sm:px-6 md:px-10 lg:px-16"
      >
        <HomeSection4 />
      </section>

      {/* Bottom Bar - future */}
      <footer className="w-full px-4 py-6 sm:px-6 md:px-10 lg:px-16">
        <HomeBottom />
      </footer>
    </>
  );
};

export default Home;
