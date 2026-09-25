import React, { useState } from 'react'
import TraineeRegister from './TraineeRegister';
import ProviderRegister from './ProviderRegister';
import DistrictRegister from './DistrictRegister';
import GovernmentRegister from './GovernmentRegister';

const Roles = () => {

    const [active, setActive] = useState("trainee");

    const btnClass = (role)=>{
            return role === active ?
             "font-semibold bg-[#c86528] px-4 cursor-pointer py-2 rounded-full text-white" 
             : "px-4 py-2 cursor-pointer font-semibold"
    }
  return (
    <div>
      <div className='border-[#c25700] rounded-full py-1 m-2 flex justify-between p-4 bg-[#fbf0eb]'>
        <button onClick={()=> setActive("trainee")} className={btnClass("trainee")}>Trainee</button>
        <button onClick={()=> setActive("provider")} className={btnClass("provider")}>Provider</button>
        <button onClick={()=> setActive("districtOfficer")} className={btnClass("districtOfficer")}>District Officer</button>
        <button onClick={()=> setActive("government")} className={btnClass("government")}>Government</button>
      </div>


      {/* Render the form component below role navbar */}
      <div className="mt-6">
                {active === "trainee" && <TraineeRegister />}

                {active === "provider" && <ProviderRegister />}

                {active === "districtOfficer" && <DistrictRegister />}

                {active === "government" && <GovernmentRegister />}
      </div>
    </div>
  )
}

export default Roles
