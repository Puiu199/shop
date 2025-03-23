import { useState } from "react";
import { register } from "../api/requests";
import { useNavigate } from "react-router";

const pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [emailErrors, setEmailError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errorPasswod, setPasswordError] = useState<string>("");

  const handleLogin = () => {
    if (!pattern.test(password)) {
      setPasswordError("Have to contain UpeecaseLetter,symbols, numbers");
    } else {
      setPasswordError("");
    }

    if (email && password && confirmPassword) {
      if (password !== confirmPassword) {
        return console.log("Password doesn't match");
      }

      const registerData = {
        firstName: name,
        email: email,
        password: password,
      };
      console.log(registerData);

      register(registerData)
        .then((response) => {
          // console.log(response.data)
          localStorage.setItem("accessToken", response.data.accessToken);
          localStorage.setItem("refreshToken", response.data.refreshToken);
          navigate("/products");
        })
        .catch((error) => {
          if (error.response.data.message) {
            setEmailError(error.response.data.message);
          }
        });
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-[#b0c0fa]">
      <div className="w-1/3 h-4/5 bg-white shadow-2xl shadow-black-500/50 flex items-center justify-center flex-col px-10 py-20 rounded-3xl">
        <h1 className="text-[#3c0a8b] text-5xl font-semibold">SHOP</h1>
        <h2 className="font-medium text-2xl mt-5">Register</h2>
        <div className="mt-8">
          <div className="my-2">
            <label className="text-lg font-medium">First Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              className="w-full border-1 border-[#3d0793] rounded-xl p-2 mt-1 placeholder:text-[#ab96d3]"
              placeholder="Enter your name"
              type="text"
            />
          </div>
          <div className="my-2">
            <label className="text-lg font-medium">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-1 border-[#3d0793] rounded-xl p-2 mt-1 placeholder:text-[#ab96d3]"
              placeholder="Enter your email"
              type="text"
            />
            {emailErrors && <label className="text-lg font-medium text-red-800">{emailErrors}</label>}
          </div>
          <div className="my-2">
            <label className="text-lg font-medium">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-1 border-[#3d0793] rounded-xl p-2 mt-1 placeholder:text-[#ab96d3]"
              placeholder="Enter your password"
              type="password"
            />
            {errorPasswod && <label className="text-lg font-medium text-red-800">{errorPasswod}</label>}
          </div>

          <div className="my-2">
            <label className="text-lg font-medium">Confirm Password</label>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border-1 border-[#3d0793] rounded-xl p-2 mt-1 placeholder:text-[#ab96d3]"
              placeholder="Confrim your password"
              type="password"
            />
          </div>
          <div className="mt-8 flex items-center justify-center flex-col gap-5">
            <div>
              <input type="checkbox" />
              <label className="ml-2 font-medium text-base">I agree to terms and conditions</label>
            </div>
            <button
              onClick={handleLogin}
              className="active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all font-medium text-base bg-[#fac605] text-white p-3 rounded-xl"
            >
              Create Account
            </button>
            <p>Already have an account? Login here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
