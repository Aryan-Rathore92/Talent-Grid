import { useState, useEffect } from 'react'
import img1 from '../assets/home_image1.png'
import img2 from '../assets/home_image2.png'
import img3 from '../assets/home_image3.png'

const images = [img1, img2, img3];
const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(()=>{
      const interval = setInterval(()=>{
        setCurrent(prevImg => (prevImg + 1)%images.length);
      },3000);

      return () => clearInterval(interval);
  },[])
  return (
    <>
    <main>
    <div className="w-full h-auto min-h-screen">
      <img
        src={images[current]}
        alt={`Home slide ${current + 1}`}
        className="w-full h-full object-cover transition-all duration-700"
      />
    </div>
    </main>
    <section id='section2' className='h-full w-full'>
        <h1>Section2</h1>
       </section>
       <section id='section3' className='h-full w-full'>
        <h1>Section3</h1>
       </section>
       <section id='section4' className='h-full w-full'>
        <h1>Section4</h1>
       </section>
    </>
  )
}

export default Home
