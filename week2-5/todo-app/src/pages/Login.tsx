import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { login } from "../services/service";
import { useContext } from "react";
import AuthContext from "../context";

interface LoginFormData {
  username: string;
  password: string;
}

const schema = yup.object({
  username: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: "tungnt@softech.vn",
      password: "123456789",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await login(data.username, data.password);
      const authenticatedUser = {
        id: response.loggedInUser.id,
        email: response.loggedInUser.email,
        access_token: response.access_token,
      };
      setUser(authenticatedUser);
      localStorage.setItem("user", JSON.stringify(authenticatedUser));
      localStorage.setItem("access_token", response.access_token);
      navigate("/our-tasks");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (name: "username" | "password", value: string) => {
    setValue(name, value);
    console.log(name, value);
  };

  return (
    <div className="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="relative py-3 sm:w-96 mx-auto text-center">
        <span className="text-2xl font-light ">Login to your account</span>
        <div className="mt-4 bg-white shadow-md rounded-lg text-left">
          <div className="h-2 bg-green-400 rounded-t-md"></div>
          <div className="px-8 py-6 ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="block font-semibold"> Username or Email </label>
              <input
                type="text"
                placeholder="Email"
                className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-green-500 focus:ring-1 rounded-md"
                {...register("username")}
                onChange={(e) => {
                  handleChange("username", e.target.value);
                }}
              />
              <p className="text-red-500">{errors.username?.message}</p>

              <label className="block mt-3 font-semibold"> Password </label>
              <input
                type="password"
                placeholder="Password"
                className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-green-500 focus:ring-1 rounded-md"
                {...register("password")}
                onChange={(e) => {
                  handleChange("password", e.target.value);
                }}
              />
              <p className="text-red-500">{errors.password?.message}</p>
              <div className="flex justify-between items-baseline">
                <button
                  type="submit"
                  className="mt-4 bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 "
                >
                  Login
                </button>
                <a href="#" className="text-sm hover:underline">
                  Forgot password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
