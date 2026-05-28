"use client";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const SigninPage = () => {
  const [show, setShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-100 via-white to-gray-200 px-4">
      <div className="w-full max-w-xs bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl p-6">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 text-sm mt-1">
          Sign in to your account
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Email */}
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Password */}
          <div className="relative w-full">
            <input
              name="password"
              type={show ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <div
              onClick={() => setShow(!show)}
              className="absolute right-4 top-4 text-gray-500 cursor-pointer"
            >
              {show ? <FaEyeSlash /> : <FaEye />}
            </div>
            <span>Forget Password?</span>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Sign In
          </button>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500">
            Don’t have an account?{" "}
            <Link
              href={"/signin"}
              className="text-blue-600 hover:underline cursor-pointer"
            >
              Sign Up
            </Link>
          </p>
        </form>
        <div className="divider">or</div>
        <ul className="flex gap-5 justify-around my-5">
          <li>
            <button
              className="social-button  hover:scale-105 apple"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                height={30}
                width={30}
                alt="gmail"
              />
            </button>
          </li>
          <li>
            <button
              className="social-button  hover:scale-105 apple"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://www.svgrepo.com/show/512317/github-142.svg"
                height={30}
                width={30}
                alt="gmail"
              />
            </button>
          </li>
          <li>
            <button
              className="social-button  hover:scale-105  apple"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                height={30}
                width={30}
                alt="gmail"
                className="rounded-full flex justify-center items-center"
              />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SigninPage;
