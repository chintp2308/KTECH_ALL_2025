import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { LoginContext } from "../context";
import { login } from "../services";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
interface FormInput {
  username: string;
  password: string;
}

const schema = yup
  .object({
    username: yup
      .string()
      .email("Email is invalid")
      .required("Email is required"),
    password: yup
      .string()
      .min(4, "Password must be at least 4 characters")
      .required("Password is required"),
  })
  .required();

export default function Login() {
  const { setUser } = useContext(LoginContext) as {
    setUser: (user: string | null) => void;
  };
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      username: "tungnt@softech.vn",
      password: "123456789",
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data: FormInput) => {
    try {
      const user = await login(data.username, data.password);
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      console.log(user);
      navigate("/our-tasks");
      toast("Login succeed!");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Left side illustration */}
      <div className="hidden lg:flex w-1/2 flex-col justify-center items-center px-10 bg-gradient-to-br from-green-100 to-green-300">
        <div className="mb-8 w-96">
          <DotLottieReact
            src="https://lottie.host/9c779515-f688-49cc-95cd-ed152afe200f/sUDBcb4B87.lottie"
            loop
            autoplay
          />
        </div>
        <h2 className="text-4xl font-bold text-[#2d3e50] text-center leading-snug">
          Set Your Task <br /> on Auto-Pilot with PC
        </h2>
      </div>

      {/* Right side login form */}
      <div className="lg:w-1/2 w-full flex justify-center items-center px-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md bg-white p-8 rounded-xl shadow-[0_10px_40px_rgba(34,197,94,0.2)] text-[#2d3e50]"
        >
          <h2 className="text-4xl font-bold text-green-600 mb-4">Login</h2>
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            Login to your account <br />
            Thank you for coming back to PC.
          </p>

          {/* Username */}
          <div className="mb-4">
            <input
              {...register("username")}
              placeholder="Email or Phone Number"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.username && (
              <p className="text-sm text-red-500 mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              placeholder="Password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="button"
              className="absolute top-2.5 right-3 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember me */}
          <div className="flex justify-between items-center text-sm mb-6">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            {/* <a href="#" className="text-green-500 hover:underline">Forgot?</a> */}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-semibold transition shadow-md hover:shadow-lg"
          >
            SIGN IN
          </button>
        </form>
      </div>
    </div>
  );
}
