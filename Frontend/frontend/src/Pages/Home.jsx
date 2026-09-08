import { useState, useEffect } from 'react'
import img1 from '../assets/home_img1.png'
import img2 from '../assets/home_img2.png'
import img3 from '../assets/home_img3.png'

const Home = () => {
  const images = [img1, img2, img3];
  const [current, setCurrent] = useState(0);

  useEffect(()=>{
      const Interval = setInterval(()=>{
        setCurrent(prevImg => (prevImg + 1)%images.length);
      },3000);

      return () => clearInterval(Interval);
  },[])
  return (
    <>
    <main className=''>
    <div className="w-full h-auto min-h-screen">
      <img
        src={images[current]}
        alt="slider"
        className="w-full h-full object-cover transition-all duration-700"
      />
    </div>
    </main>
    </>
  )
}

export default Home
