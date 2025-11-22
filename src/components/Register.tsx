import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { commonService } from "../api/commonService";

const Register = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState<any>({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<any>({
    name: "",
    email: "",
    password: "",
  });
  const [touched, setTouched] = useState<any>({
    name: false,
    email: false,
    password: false,
  });
  const [pswStrength, setPswStrength] = useState<any>("");

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
    } else if (name === "password") {
      if (!value) error = "Password is required";
      else if (value.length < 6)
        error = "Password must be at least 6 characters";
    } else if (name === "name") {
      if (!value) error = "Name is required";
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

  console.log(
    "user details",
    userDetails,
    "errors",
    errors,
    "touched",
    touched
  );

  const isFormValid: boolean =
    !errors.email &&
    !errors.password &&
    !errors.name &&
    userDetails.name &&
    userDetails.email &&
    userDetails.password;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, password: true });

    validate("name", userDetails.name);
    validate("email", userDetails.email);
    validate("password", userDetails.password);
    if (isFormValid) {
      console.log("Submitted successfully");
      // axios.post("http://localhost:5000/api/auth/register", userDetails);
      commonService.register(userDetails);
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-4">
          Create an account
        </h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              placeholder="Enter your first name"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg 
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              onChange={(e) => handleChange(e, "name")}
              onBlur={handleBlur}
            />
            {errors.name && touched.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
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
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
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
          {<div>{pswStrength}</div>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg text-lg font-medium 
            hover:bg-blue-700 transition active:scale-95"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-6">
          Do you have an account?{" "}
          <a
            href="/login"
            className="text-blue-600 font-medium hover:underline"
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
