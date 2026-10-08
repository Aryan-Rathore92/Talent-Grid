import BackBtn from "./BackBtn";
import { motion } from "framer-motion";
import Roles from "./Roles";

const Register = () => {
  const words = ["Start", "Your", "Journey", "with", "Talent", "Grid!"];

  return (
    <div className="bg-gradient-to-r from-[#c25700] to-white min-h-screen w-full">
      <BackBtn />

      <div
        className="
          flex flex-col
          gap-8
          px-4 py-6

          sm:px-6 sm:py-8

          lg:flex-row
          lg:items-start
          lg:justify-between
          lg:gap-12
          lg:px-10
        "
      >
        {/* LEFT HERO */}
        <div
          className="
            w-full
            lg:w-2/5
            pt-4 sm:pt-6 lg:pt-16
          "
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              text-center
              lg:text-left

              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl

              font-bold
              leading-tight
              tracking-tight

              text-[#c25700]

              cursor-default
            "
          >
            {words.map((word, index) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -5,
                  scale: 1.03,
                }}
                className="
                  inline-block
                  mr-2
                  sm:mr-3
                  lg:mr-4
                  transition-colors
                  hover:text-white
                "
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Small subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="
    relative
    mt-5
    mx-auto
    lg:mx-0
    max-w-md

    text-center
    lg:text-left

    text-sm
    sm:text-base
    lg:text-lg

    font-medium
    leading-relaxed

    text-[#7a3510]
  "
          >
            Build your future with{" "}
            <motion.span
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="font-bold text-[#c25700]"
            >
              Talent Grid.
            </motion.span>
            {/* Animated underline */}
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "70px" }}
              transition={{
                delay: 1.3,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="
      block
      h-[2px]
      mt-2
      mx-auto
      lg:mx-0
      bg-[#c25700]
      rounded-full
    "
            />
          </motion.p>
        </div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="
            w-full
            rounded-xl
            bg-gradient-to-r
            from-white
            to-[#fdf7f4]
            lg:w-3/5
          "
        >
          <Roles />
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
