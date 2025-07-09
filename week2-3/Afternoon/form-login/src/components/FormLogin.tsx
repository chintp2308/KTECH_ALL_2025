import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type LoginData = {
  username: string;
  password: string;
  remember: boolean;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ mode: "onChange" });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: LoginData) => {
    if (data.remember) {
      localStorage.setItem("rememberedUser", data.username);
    }
    console.log("Login data:", data);
    alert("Login successful!");
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar Left */}
      <div className="w-1/2 bg-[#eaf1f8] flex flex-col justify-center items-center px-10">
        <img
          src="/images/sidebar.png"
          alt="Sidebar"
          className="w-[350px] mb-8"
        />
        <h2 className="text-3xl font-bold text-[#2d3e50] text-center leading-snug">
          Set Your Partner <br /> Recruitment on Auto-Pilot
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
            <img src="/images/logo.png" alt="Grovia" className="w-24" />
          </div>

          <h2 className="text-2xl font-bold text-red-600 mb-2">Login</h2>
          <p className="text-sm text-gray-600 mb-6">
            Login to your account <br />
            Thank you for coming back to Grovia, let’s access our best
            recommendation contact for you.
          </p>

          {/* Username */}
          <div className="mb-4">
            <input
              {...register("username", {
                required: "Username is required",
                minLength: { value: 5, message: "Minimum 5 characters" },
                validate: (value) =>
                  /^\S+@\S+\.\S+$/.test(value) ||
                  /^[0-9]{9,15}$/.test(value) ||
                  "Invalid email or phone",
              })}
              placeholder="Email or Phone Number"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
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
              {...register("password", {
                required: "Password is required",
                minLength: { value: 8, message: "Minimum 8 characters" },
                validate: (val) =>
                  (!/\s/.test(val) && /[a-zA-Z]/.test(val)) ||
                  "No spaces and must include at least 1 letter",
              })}
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
              <p className="text-sm text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember me + Reset */}
          <div className="flex justify-between items-center text-sm mb-5">
            <label className="flex items-center gap-2">
              <input type="checkbox" {...register("remember")} />
              Remember me
            </label>
            <a href="#" className="text-red-500 hover:underline">
              Reset Password?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded font-semibold transition"
          >
            SIGN IN
          </button>

          {/* Bottom Text */}
          <p className="text-center mt-4 text-sm">
            Don’t have an account yet?{" "}
            <a href="/register" className="text-red-500 hover:underline">
              Join Grovia Now!
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
