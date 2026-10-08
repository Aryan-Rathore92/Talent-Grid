import { useForm } from "react-hook-form";

const TraineeRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const inpCss =
    "w-full rounded-md border border-gray-400 px-3 py-2 text-sm sm:text-base outline-none focus:border-[#c25700] focus:ring-1 focus:ring-[#c25700]";

  const lableCss = "font-semibold text-sm sm:text-base";

  return (
    <>
      <p className="text-2xl sm:text-3xl font-bold text-center">
        Register Form
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 px-4 py-5 sm:px-6 sm:py-6"
      >
        {/* Trainee Name */}
        <label htmlFor="name" className={lableCss}>
          Trainee Name:
        </label>

        {/* First + Last Name */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
          {/* First Name */}
          <div className="w-full">
            <input
              type="text"
              className={inpCss}
              id="name"
              placeholder="Enter your first name"
              {...register("firstName", {
                required: "First Name is required",
                minLength: {
                  value: 3,
                  message: "First Name must be at least 3 characters",
                },
              })}
            />

            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div className="w-full">
            <input
              type="text"
              className={inpCss}
              placeholder="Enter your last name"
              {...register("lastName", {
                minLength: {
                  value: 3,
                  message: "Last Name must be at least 3 characters",
                },
              })}
            />

            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* Email */}
        <label htmlFor="email" className={lableCss}>
          Trainee Email:
        </label>

        <input
          type="email"
          id="email"
          className={inpCss}
          placeholder="Enter your email address"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            },
          })}
        />

        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        {/* Password */}
        <label htmlFor="password" className={lableCss}>
          Password:
        </label>

        <input
          type="password"
          className={inpCss}
          id="password"
          placeholder="Enter your password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            maxLength: {
              value: 20,
              message: "Password must not exceed 20 characters",
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/,
              message:
                "Password must contain uppercase, lowercase, number and special character",
            },
          })}
        />

        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        {/* Phone */}
        <label htmlFor="phone" className={lableCss}>
          Phone no:
        </label>

        <input
          type="tel"
          className={inpCss}
          id="phone"
          placeholder="Enter phone number"
          maxLength={10}
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^[6-9]\d{9}$/,
              message: "Enter a valid 10-digit phone number",
            },
          })}
        />

        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="
            bg-[#c25700]
            px-6 py-2
            rounded-md
            text-white
            font-semibold
            cursor-pointer
            mt-3
            w-full
            sm:w-fit
            self-center
            sm:self-end
            hover:bg-[#a94b00]
            transition-colors
          "
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default TraineeRegister;
