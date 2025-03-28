import { useState } from "react";
import { logIn } from "../api/requests";
import { useNavigate } from "react-router";
const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  

  const submitForm = () => {
    if (email && password) {
      logIn({
        email,
        password,
      }).then((response) => {
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        navigate("/products");
      });
    }
  };

  return (
    <div className="flex items-center justify-center bg-blue-200 h-screen">
      <div className="bg-white p-6 rounded-2xl w-96 border-t-4 border-yellow-400">
        <h2 className="text-2xl font-semibold text-center text-blue-700 mb-6">Login</h2>
        <div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email."
            className="w-full p-3 border border-blue-300 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className=" p-3 border border-blue-300 mb-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            onClick={submitForm}
            className=" bg-blue-500  p-3 rounded-lg w-full hover:bg-blue-600 transition text-white duration-300"
          >
            Login
          </button>
          <a
            href="#"
            className="flex items-center justify-center text-blue-500 mt-4 hover:text-yellow-500 transition duration-300"
          >
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
