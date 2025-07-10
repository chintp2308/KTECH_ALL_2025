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
    setUser: (user: any) => void;
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
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar Left */}
      <div className="w-1/2 bg-[#eaf1f8] flex flex-col justify-center items-center px-10">
        <div>
          <DotLottieReact
            src="https://lottie.host/9c779515-f688-49cc-95cd-ed152afe200f/sUDBcb4B87.lottie"
            loop
            autoplay
          />
        </div>
        <h2 className="text-3xl font-bold text-[#2d3e50] text-center leading-snug">
          Set Your Task <br /> on Auto-Pilot with PC
        </h2>
      </div>

      {/* Form Right */}
      <div className="w-1/2 bg-white flex justify-center items-center px-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-sm text-[#2d3e50]"
        >
          {/* Logo */}
          <div className="flex items-center justify-start mb-6">
            <img src="/images/logo.png" alt="PC" className="w-24" />
          </div>

          <h2 className="text-2xl font-bold text-green-600 mb-2">Login</h2>
          <p className="text-sm text-gray-600 mb-6">
            Login to your account <br />
            Thank you for coming back to Grovia, let’s access our best
            recommendation contact for you.
          </p>

          {/* Username */}
          <div className="mb-4">
            <input
              {...register("username")}
              placeholder="Email or Phone Number"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {errors.username && (
              <p className="text-sm text-green-500 mt-1">
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
              className="w-full border border-gray-300 rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="button"
              className="absolute top-2.5 right-3 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.password && (
              <p className="text-sm text-green-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember me + Reset */}
          <div className="flex justify-between items-center text-sm mb-5">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#" className="text-green-500 hover:underline">
              Reset Password?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold transition"
          >
            SIGN IN
          </button>

          {/* Bottom Text */}
          {/* <p className="text-center mt-4 text-sm">
            Don’t have an account yet?{" "}
            <a href="/register" className="text-red-500 hover:underline">
              Join Grovia Now!
            </a>
          </p> */}
        </form>
      </div>
    </div>
  );
}
