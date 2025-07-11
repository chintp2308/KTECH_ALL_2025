const Login = () => {
  return (
    <div className="flex justify-center items-center h-[500px] border-2 border-gray-300 w-[400px]  rounded-md">
      <form className="flex flex-col gap-4">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Username"
          className="border-2 border-gray-300 rounded-md p-2"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          className="border-2 border-gray-300 rounded-md p-2"
        />
        <button
          type="submit"
          className="bg-green-500 p-2 rounded-md text-white w"
        >
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
