import React, { useState } from "react";
import TraineeRegister from "./TraineeRegister";
import ProviderRegister from "./ProviderRegister";
import DistrictRegister from "./DistrictRegister";
import GovernmentRegister from "./GovernmentRegister";

const Roles = () => {
  const [active, setActive] = useState("trainee");

  const btnClass = (role) => {
    return role === active
      ? "font-semibold bg-[#c86528] px-3 sm:px-4 py-2 rounded-full text-white cursor-pointer text-sm sm:text-base transition-all duration-200"
      : "px-3 sm:px-4 py-2 cursor-pointer font-semibold text-sm sm:text-base rounded-full transition-all duration-200 hover:bg-[#f3d8c8]";
  };

  return (
    <div className="w-full">
      {/* Role Navbar */}
      <div
        className="
          border border-[#c25700]
          rounded-2xl sm:rounded-full
          m-2
          p-2
          bg-[#fbf0eb]

          grid grid-cols-2
          gap-2

          sm:flex sm:justify-between
          sm:items-center
          sm:gap-1
          sm:p-1
        "
      >
        <button
          onClick={() => setActive("trainee")}
          className={btnClass("trainee")}
        >
          Trainee
        </button>

        <button
          onClick={() => setActive("provider")}
          className={btnClass("provider")}
        >
          Provider
        </button>

        <button
          onClick={() => setActive("districtOfficer")}
          className={btnClass("districtOfficer")}
        >
          District Officer
        </button>

        <button
          onClick={() => setActive("government")}
          className={btnClass("government")}
        >
          Government
        </button>
      </div>

      {/* Form */}
      <div className="mt-4 sm:mt-6 w-full">
        {active === "trainee" && <TraineeRegister />}

        {active === "provider" && <ProviderRegister />}

        {active === "districtOfficer" && <DistrictRegister />}

        {active === "government" && <GovernmentRegister />}
      </div>
    </div>
  );
};

export default Roles;
