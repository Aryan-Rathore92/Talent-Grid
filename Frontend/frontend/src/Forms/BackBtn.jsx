import { useNavigate } from 'react-router-dom'
import { MoveLeft } from "lucide-react";
const BackBtn = () => {
    const Navigate = useNavigate();
    const goBackOnHome = ()=>{
         Navigate('/')
    }
  return (
    <div className='p-2'>
      <button onClick={goBackOnHome} className='flex bg-gradient-to-r from-[#c25700] to-white px-6 py-2 gap-2 items-center justify-center font-semibold cursor-pointer rounded-full text-[#c25700]'><MoveLeft />Back</button>
    </div>
  )
}

export default BackBtn
