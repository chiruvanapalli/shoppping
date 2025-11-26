import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { fetchUserDetails } from "../store/slices/authSlice";
// import type { AppDispatch, RootState } from "../store";
import { commonService } from "../api/commonService";

const Login = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState<any>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<any>({
    email: "",
    password: "",
  });
  const [touched, setTouched] = useState<any>({
    email: false,
    password: false,
  });
  const [pswStrength, setPswStrength] = useState<any>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const checkPasswordStrength = (password: string) => {
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/; // strong
    const mediumRegex = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/; // medium

    if (strongRegex.test(password)) return "strong";
    if (mediumRegex.test(password)) return "medium";
    return "weak";
  };

  const validate = (name: string, value: string) => {
    let error = "";

    if (name === "email") {
      if (!value) error = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        error = "Please enter a valid email";
    }

    if (name === "password") {
      if (!value) error = "Password is required";
      else if (value.length < 6)
        error = "Password must be at least 6 characters";
    }

    setErrors((prev: any) => ({ ...prev, [name]: error }));
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    const { name, value } = event.target;

    if (type === "email") {
      setUserDetails({ ...userDetails, [name]: value });
      if (touched[name as keyof typeof touched]) {
        validate(name, value);
      }
    } else {
      setUserDetails((prev: any) => ({ ...prev, [name]: value }));
      if (touched[name as keyof typeof touched]) {
        setPswStrength(checkPasswordStrength(value));
      }
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setTouched((prev: any) => ({ ...prev, [name]: true }));
    validate(name, value);
  };

  // console.log(
  //   "user details",
  //   userDetails,
  //   "errors",
  //   errors,
  //   "touched",
  //   touched
  // );

  const isFormValid: boolean =
    !errors.email &&
    !errors.password &&
    userDetails.email &&
    userDetails.password;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ email: true, password: true });

    validate("email", userDetails.email);
    validate("password", userDetails.password);
    if (isFormValid) {
      console.log("Submitted successfully");
      setIsLoading(true);
      try {
        const response: any = await commonService.login(userDetails);
        if (response.status === 200) {
          localStorage.setItem("token", JSON.stringify(response.data));
          navigate("/", { replace: true });
        }
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/", { replace: true });
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">
          Login
        </h2>
        {isLoading && <div className="text-center">Redirecting...</div>}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg 
              focus:ring-2 focus:ring-blue-500 focus:border-blue-50 outline-none transition"
              onChange={(e) => handleChange(e, "email")}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg 
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              onChange={(e) => handleChange(e, "password")}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <div className="flex justify-end">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>
          {pswStrength && <div>{pswStrength}</div>}
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg text-lg font-medium 
            hover:bg-blue-700 transition active:scale-95"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-blue-600 font-medium hover:underline"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
