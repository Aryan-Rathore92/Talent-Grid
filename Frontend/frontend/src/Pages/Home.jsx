import { useState, useEffect } from 'react'
import img1 from '../assets/home_image1.png'
import img2 from '../assets/home_image2.png'
import img3 from '../assets/home_image3.png'

const images = [img1, img2, img3];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prevImg => (prevImg + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <main className="w-full overflow-hidden">
        <section className="w-full">
          <img
            src={images[current]}
            alt={`Home slide ${current + 1}`}
            className="block w-full h-auto transition-all duration-700"
          />
        </section>
      </main>

      {/* Section 2 */}
      <section
        id="section2"
        className="w-full min-h-screen px-4 py-12 sm:px-6 md:px-10 lg:px-16"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Section 2
        </h1>
      </section>

      {/* Section 3 */}
      <section
        id="section3"
        className="w-full min-h-screen px-4 py-12 sm:px-6 md:px-10 lg:px-16"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Section 3
        </h1>
      </section>

      {/* Section 4 */}
      <section
        id="section4"
        className="w-full min-h-screen px-4 py-12 sm:px-6 md:px-10 lg:px-16"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Section 4
        </h1>
      </section>

      {/* Bottom Bar - future */}
      <footer className="w-full px-4 py-6 sm:px-6 md:px-10 lg:px-16">
        {/* Bottom bar content will come here */}
      </footer>
    </>
  );
}

export default Home