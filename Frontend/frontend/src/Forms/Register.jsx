import BackBtn from './BackBtn'
import {motion} from 'framer-motion'
import Roles from './Roles'
const Register = () => {
  
  const motionDivcss = 'text-center font-bold text-left pl-5 text-6xl transition-all duration-300 hover:text-white hover:-translate-x-2 cursor-pointer'
  return (
    <div className="bg-gradient-to-r from-[#c25700] to-white min-h-screen w-full ">
    <>
      <BackBtn className='m-2'/>
      <div className='flex justify-around'> 
        <div className='pt-10 '>
          <motion.div
            className= {motionDivcss}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Start Your
          </motion.div>
          <br/>
          <motion.div
            className= {motionDivcss}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Journey with
          </motion.div>
          <br/>
          <motion.div
            className= {motionDivcss}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            >
             Talent Grid!
            </motion.div>
        </div>
            <div className='rounded-xl h-120 w-3/5 bg-gradient-to-r from-white to-[#fdf7f4]'>
             <Roles/>
            </div>
        </div>
              
            </>
            </div>
  )
}

export default Register;
