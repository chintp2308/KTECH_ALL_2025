import { HiOutlineDesktopComputer } from "react-icons/hi";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
type FormValues = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  newsLetter?: boolean;
  term?: boolean;
};
const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .min(3, "First name must be at least 3 characters long"),
  lastName: yup
    .string()
    .required("Last name is required")
    .min(3, "Last name must be at least 3 characters long"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Phone number must contain only numbers"),
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  //   const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onSubmit = (data: FormValues) => {
    console.log("Submitted data:", data);
    // setIsSubmittedSuccessfully(true);
    alert("Register successful!");
    reset();
  };

  return (
    <div className="flex w-full h-screen overflow-hidden">
      <div className="w-2/5 h-full bg-gradient-to-b from-blue-600 to-blue-400 text-white relative flex flex-col justify-center items-center px-10 overflow-hidden">
        <div className="absolute top-10 left-10 flex items-center gap-2">
          <HiOutlineDesktopComputer className="w-6 h-6" />
          <span className="font-semibold text-lg">Lottery Display</span>
        </div>
        <h1 className="text-3xl font-bold text-center leading-snug z-10">
          A few clicks away <br /> from creating your <br /> Lottery Display
        </h1>
        <img
          src="/images/h1.jpg"
          alt="illustration"
          className="w-[300px] mt-10 z-10"
        />
        <div className="absolute inset-0 bg-blue-600/40 z-0 rounded" />
      </div>
      <div className="w-full h-screen overflow-y-auto bg-white pt-10 px-10 text-[#214362]">
        <h1 className="text-3xl font-bold ">Register</h1>
        <div className="mt-10">
          <h3 className="text-lg font-bold">
            Manage all your lottery efficiently
          </h3>
          <p className="text-sm text-gray-500">
            Let's get you all set up so you can verify your personal account and
            begin setting up your profile.
          </p>
        </div>
        <form
          className="mt-10 flex flex-row gap-10 flex-wrap"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              //   name="firstName"
              className="w-[400px] p-2 border border-gray-300 rounded-md outline-none"
              {...register("firstName")}
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              //   name="lastName"
              className="w-[400px] p-2 border border-gray-300 rounded-md outline-none"
              {...register("lastName")}
            />
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              //   name="phoneNumber"
              className="w-[400px] p-2 border border-gray-300 rounded-md outline-none"
              {...register("phoneNumber")}
            />
            {errors.phoneNumber && (
              <p className="text-red-500">{errors.phoneNumber.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              //   name="email"
              className="w-[400px] p-2 border border-gray-300 rounded-md outline-none"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2 relative">
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-[400px] p-2 border border-gray-300 rounded-md outline-none pr-10"
              {...register("password")}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[38px] text-sm text-gray-600"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 relative">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type={showConfirm ? "text" : "password"}
              id="confirmPassword"
              className="w-[400px] p-2 border border-gray-300 rounded-md outline-none pr-10"
              {...register("confirmPassword")}
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-[38px] text-sm text-gray-600"
            >
              {showConfirm ? "Hide" : "Show"}
            </button>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <div className="mt-5">
            <div className="space-y-4 text-sm text-gray-700">
              <label className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  {...register("newsLetter")}
                />
                <span>Yes, I want to receive Lottery Display emails</span>
              </label>

              <label className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  {...register("term")}
                />
                <span>
                  I agree to all the
                  <a
                    href="#"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Term
                  </a>
                  ,
                  <a
                    href="#"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Privacy Policy
                  </a>
                  and
                  <a
                    href="#"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Fees
                  </a>
                </span>
              </label>
              {errors.term && (
                <p className="text-red-500 text-sm">{errors.term.message}</p>
              )}
            </div>

            <button
              className="bg-blue-500 text-white p-2 rounded-md w-[200px] mt-10 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!isValid}
              type="submit"
            >
              Create Account
            </button>
            <p className="text-sm text-gray-500 mt-5 font-bold pb-10">
              Already have an account?{" "}
              <a href="/login" className="text-blue-500">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
