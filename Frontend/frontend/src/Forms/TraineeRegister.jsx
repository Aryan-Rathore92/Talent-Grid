import {useForm} from 'react-hook-form'
import { data } from 'react-router-dom';
const TraineeRegister = () => {
  
  const {register, handleSubmit, formState: {errors}} = useForm();
  const onSubmit = (data)=>{
    console.log(data);
  }
  const inpCss = "outline-none border border-gray-500 px-1.5 py-1 rounded-sm";
  const lableCss = "font-semibold text-md"
  return (
    <>
    <p className='text-3xl font-bold text-center'>Regsiter Form</p>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name" className={lableCss}>Trainee Name: </label>
      {/* FirstName */}
      <input 
        type="text"
        className={inpCss}
        id='name'
        placeholder='Enter your first name'
        {...register("firstName", {
          required: "First Name is required",
          minLength: {
            value: 3,
            message: "First Name must be at least 3 characters"
          }
        })}
      />
      {errors.name && 
      <p className='text-red-500'>*First Name is required</p>
      }
      {/* Last Name */}
      <input 
        type="text"
        className={inpCss}
        placeholder='Enter your last name'
        {...register("lastName", {
          minLength: {
            value: 3,
            message: "Name must be at least 3 characters"
          }
        })}
      />
      {/* Email */}
      <label htmlFor="email" className={lableCss}>Trainee Email:</label>
      <input
         type="email"
         id='email'
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
        <p className="text-red-500 text-sm">
           {errors.email.message}
        </p>
      )}
      {/* Password */}
      <label htmlFor="password" className={lableCss}>Password: </label>
      <input
        type="password"
        className={inpCss}
        id='password'
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
               message: "Password must contain uppercase, lowercase, number and special character",
            },
          })}
      />

      {errors.password && (
        <p className="text-red-500 text-sm">
         {errors.password.message}
        </p>
      )}
      {/* Phone no. */}
      <label htmlFor="phone" className={lableCss}>Phone no: </label>
      <input
        type="tel"
        className={inpCss}
        id='phone'
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
        <p className="text-red-500 text-sm">
          {errors.phone.message}
        </p>
      )}
      <button type='submit' className='bg-[#c25700] px-3.5 py-2 rounded-md text-white font-semibold cursor-pointer'>Submit</button>
    </form>
    </>
  )
}

export default TraineeRegister
