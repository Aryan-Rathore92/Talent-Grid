import {
  BookOpenText,
  ChartColumnBig,
  BriefcaseBusiness,
  ClipboardCheck,
  TrendingUp,
  Network,
} from "lucide-react";

const HomeSection3 = () => {
  return (
    <section className="w-full px-3 py-12 sm:px-4 md:px-5 lg:px-6 xl:px-8 2xl:px-10">
      {/* TOP PART */}
      <div className="topPart text-center">
        <p className="text-sm font-bold text-[#c25700] sm:text-base">
          WHY CHOOSE TALENT GRID
        </p>

        <p className="mt-2 text-2xl font-bold text-[#333333] sm:text-3xl md:text-4xl">
          Key Benefits of the Talent Grid
        </p>

        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#434343] sm:text-base md:text-lg lg:text-xl">
          Designed to provide holistic support, from skill acquisition to
          <br className="hidden sm:block" />
          placement and beyond.
        </p>
      </div>

      {/* ================= CARDS ================= */}
      <div className="cards mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3cards mt-8 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 xl:gap-6">
        {/* CARD 1 */}
        <div className="card w-full min-w-0 rounded-xl bg-white p-6 shadow-lg sm:p-7 lg:p-8 xl:p-9 transition-all duration-300 ease-out  hover:-translate-y-2  hover:shadow-2xl ">
          <div className="mb-2 w-fit rounded-xl bg-[#e6eaf7] px-5 py-3">
            <BookOpenText size={30} color="#c25700" />
          </div>

          <p className="mt-3 text-2xl font-bold text-[#333333] sm:text-[26px] lg:text-3xl">
            Industry-Aligned
            <br />
            Learning
          </p>

          <p className="mt-4 text-sm leading-relaxed text-[#434343] sm:text-base lg:text-lg">
            Learn practical, industry-relevant skills designed around current
            market needs and evolving employer requirements.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="card w-full min-w-0 rounded-xl bg-white p-6 shadow-lg sm:p-7 lg:p-8 xl:p-9 transition-all duration-300 ease-out  hover:-translate-y-2  hover:shadow-2xl ">
          <div className="mb-2 w-fit rounded-xl bg-[#e6eaf7] px-5 py-3">
            <ChartColumnBig size={30} color="#c25700" />
          </div>

          <p className="mt-3 text-2xl font-bold text-[#333333] sm:text-[26px] lg:text-3xl">
            Career Progress
            <br className="hidden lg:block" />
            Tracking
          </p>

          <p className="mt-4 text-sm leading-relaxed text-[#434343] sm:text-base lg:text-lg">
            Monitor training, placement, employment, retention, and career
            growth to understand long-term outcomes beyond placement.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="card w-full min-w-0 rounded-xl bg-white p-6 shadow-lg sm:p-7 lg:p-8 xl:p-9 transition-all duration-300 ease-out  hover:-translate-y-2  hover:shadow-2xl ">
          <div className="mb-2 w-fit rounded-xl bg-[#e6eaf7] px-5 py-3">
            <BriefcaseBusiness size={30} color="#c25700" />
          </div>

          <p className="mt-3 text-2xl font-bold text-[#333333] sm:text-[26px] lg:text-3xl">
            Career & Placement
            <br className="hidden lg:block" />
            Support
          </p>

          <p className="mt-4 text-sm leading-relaxed text-[#434343] sm:text-base lg:text-lg">
            Discover relevant jobs, internships, and placement opportunities
            that connect your skills with meaningful career paths.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="card w-full min-w-0 rounded-xl bg-white p-6 shadow-lg sm:p-7 lg:p-8 xl:p-9 transition-all duration-300 ease-out  hover:-translate-y-2  hover:shadow-2xl ">
          <div className="mb-2 w-fit rounded-xl bg-[#e6eaf7] px-5 py-3">
            <ClipboardCheck size={30} color="#c25700" />
          </div>

          <p className="mt-3 text-2xl font-bold text-[#333333] sm:text-[26px] lg:text-3xl">
            Skill Gap
            <br className="hidden lg:block" />
            Identification
          </p>

          <p className="mt-4 text-sm leading-relaxed text-[#434343] sm:text-base lg:text-lg">
            Identify skill gaps through learning and employment data, helping
            users focus on relevant career competencies.
          </p>
        </div>

        {/* CARD 5 */}
        <div className="card w-full min-w-0 rounded-xl bg-white p-6 shadow-lg sm:p-7 lg:p-8 xl:p-9 transition-all duration-300 ease-out  hover:-translate-y-2  hover:shadow-2xl ">
          <div className="mb-2 w-fit rounded-xl bg-[#e6eaf7] px-5 py-3">
            <TrendingUp size={30} color="#c25700" />
          </div>

          <p className="mt-3 text-2xl font-bold text-[#333333] sm:text-[26px] lg:text-3xl">
            Outcome & Progress
            <br className="hidden lg:block" />
            Tracking
          </p>

          <p className="mt-4 text-sm leading-relaxed text-[#434343] sm:text-base lg:text-lg">
            Track learning, skill development, employment, and career progress
            to understand your journey beyond certification.
          </p>
        </div>

        {/* CARD 6 */}
        <div className="card w-full min-w-0 rounded-xl bg-white p-6 shadow-lg sm:p-7 lg:p-8 xl:p-9 transition-all duration-300 ease-out  hover:-translate-y-2  hover:shadow-2xl ">
          <div className="mb-2 w-fit rounded-xl bg-[#e6eaf7] px-5 py-3">
            <Network size={30} color="#c25700" />
          </div>

          <p className="mt-3 text-2xl font-bold text-[#333333] sm:text-[26px] lg:text-3xl">
            Connected
            <br className="hidden lg:block" />
            Ecosystem
          </p>

          <p className="mt-4 text-sm leading-relaxed text-[#434343] sm:text-base lg:text-lg">
            Connect trainees, training providers, employers, and government
            stakeholders through one integrated skill-development ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeSection3;