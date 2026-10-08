import { MoveRight, Dot, CircleCheckBig } from "lucide-react";
import section2_first_img from "../assets/section2_first_img.png";
import { useNavigate } from "react-router-dom";

const HomeSection2 = () => {
  const navigate = useNavigate();

  const navigateOnAboutPage = () => {
    navigate("/about");
  };

  return (
    <div className="section2 flex flex-col lg:flex-row gap-8 lg:gap-10">
      {/* ================= LEFT PART ================= */}
      <div className="leftpart w-full lg:w-1/2 mt-0 lg:mt-16">
        {/* Small Heading */}
        <p
          className="font-semibold text-[#c25700]
                      text-base sm:text-lg md:text-xl"
        >
          ABOUT THE TALENT GRID
        </p>

        {/* Main Heading */}
        <p
          className="
          font-bold
          text-2xl
          sm:text-3xl
          md:text-4xl
          lg:text-4xl
          text-[#333333]
          mt-3
          sm:mt-4
          md:mt-5
          leading-tight
          md:leading-tight
        "
        >
          Empowering Indian Youth
          <br className="hidden sm:block" />
          with Industry-Relevant Skills
        </p>

        {/* Description */}
        <p
          className="
          text-[#434343]
          text-sm
          sm:text-base
          md:text-lg
          lg:text-xl
          mt-4
          sm:mt-5
          md:mt-7
          leading-6
          sm:leading-7
          md:leading-8
          max-w-2xl
        "
        >
          Talent Grid is a platform designed to track and improve employment
          outcomes after skill training, helping trainees connect their skills
          with relevant job and livelihood opportunities. Components of this
          platform include Skill Tracking, Employment Tracking, Employer
          Validation and Outcome Analytics.
        </p>

        {/* Button */}
        <button
          onClick={navigateOnAboutPage}
          className="
            flex items-center
            justify-center
            shadow-xl
            cursor-pointer
            bg-[#c25700]
            text-white
            font-semibold
            gap-1
            px-3 py-2
            text-xs
            sm:px-4 sm:py-2
            sm:text-sm
            md:px-5 md:py-2.5
            md:text-base
            lg:px-5 lg:py-3
            lg:text-base
            rounded-lg
            sm:rounded-xl
            mt-6
            sm:mt-7
            md:mt-8
            hover:shadow-2xl
            hover:-translate-y-1
            transition-all duration-300
          "
        >
          LEARN MORE
          <MoveRight className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
        </button>
      </div>

      {/* ================= RIGHT PART ================= */}
      <div
        className="
    rightpart
    relative
    w-full
    lg:w-1/2
    mt-0
    lg:mt-0
  "
      >
        <img
          src={section2_first_img}
          alt="Talent Grid"
          className="
    w-full
    h-auto
    rounded-xl
  "
        />

        {/* Eligibility Box */}
        <div
          className="
    absolute
    bottom-0
    left-1/2
    -translate-x-1/2
    translate-y-[35%]

    bg-white
    rounded-xl
    shadow-xl
    z-10

    w-[92%]
    sm:w-[85%]
    md:w-[75%]
    lg:w-[440px]

    p-3
    sm:p-4
    md:p-5
    lg:p-6
  "
        >
          <h5
            className="
      text-[#080000]
      flex
      gap-2
      sm:gap-3
      items-center
      mb-2
      sm:mb-3
      md:mb-4
      font-semibold
      text-sm
      sm:text-base
      md:text-lg
    "
          >
            <CircleCheckBig
              className="w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 shrink-0"
              color="#c25700"
            />
            Eligibility Criteria
          </h5>

          <ul>
            <li
              className="
        text-[#666666]
        flex
        items-start
        text-xs
        sm:text-sm
        md:text-base
        mb-2
        sm:mb-3
      "
            >
              <Dot className="shrink-0 w-5 h-5 sm:w-6 sm:h-6" color="#c25700" />

              <span>Valid user registration with basic profile details.</span>
            </li>

            <li
              className="
        text-[#666666]
        flex
        items-start
        text-xs
        sm:text-sm
        md:text-base
        mb-2
        sm:mb-3
      "
            >
              <Dot className="shrink-0 w-5 h-5 sm:w-6 sm:h-6" color="#c25700" />

              <span>
                Meet the eligibility requirements of the selected course or job.
              </span>
            </li>

            <li
              className="
        text-[#666666]
        flex
        items-start
        text-xs
        sm:text-sm
        md:text-base
      "
            >
              <Dot className="shrink-0 w-5 h-5 sm:w-6 sm:h-6" color="#c25700" />

              <span>Provide accurate and verifiable personal information.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeSection2;
