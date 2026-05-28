"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUpPage = () => {
  const [image, setImage] = useState(null);
  const [show, setShow] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));
    console.log(formData);
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-100 via-white to-gray-200 px-4">
        <div className="w-full max-w-md bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl p-6">
          {/* Header */}
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Create Account
          </h2>
          <p className="text-center text-gray-500 text-sm mt-1">
            Sign up to get started
          </p>

          {/* Avatar Upload UI */}
          <div className="flex justify-center mt-6"></div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="mt-6 space-y-4">
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <input
                onClick={handleImage}
                name="image"
                type="file"
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <div className="relative w-full">
                <input
                  name="password"
                  type={show ? "text" : "password"}
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                {/* toggle icon */}
                <div
                  onClick={() => setShow(!show)}
                  className="absolute right-4 top-4 text-gray-500 cursor-pointer"
                >
                  {show ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
              <div className="relative w-full">
                <input
                  name="cpassword"
                  type={isShow ? "text" : "password"}
                  placeholder="Confarm Password"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                {/* toggle icon */}
                <div
                  onClick={() => setIsShow(!isShow)}
                  className="absolute right-4 top-4 text-gray-500 cursor-pointer"
                >
                  {isShow ? <FaEyeSlash /> : <FaEye />}
                </div>
                <span>Forget Password?</span>
              </div>

              <button className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                Sign Up
              </button>

              <p className="text-center text-sm text-gray-500">
                Already have an account?
                <Link
                  href={"/signin"}
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
          <div className="divider">or</div>
          <ul className="flex gap-5 justify-around my-5">
            <li>
              <button
                className="social-button hover:scale-105  apple"
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
                className="social-button apple"
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
                className="social-button apple"
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
    </div>
  );
};

export default SignUpPage;
