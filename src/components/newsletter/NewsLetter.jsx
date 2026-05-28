"use client";
import React from "react";
import Image from "next/image";
import toast from "react-hot-toast";

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Thank you for subscribing!", {
      style: {
        position: "top-center",
        borderRadius: "8px",
        fontSize: "14px",
      },
    });

    e.currentTarget.reset();
  };

  return (
    <section className="w-full bg-white py-16 px-6 md:px-16 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left Side: Image Container */}
        <div className="relative w-full sm:aspect-square md:aspect-[1.15/1] rounded-[2.5rem] overflow-hidden bg-gray-100 shadow-sm">
          <Image
            src="/upscalemedia-transformed_LE_upscale_prime-ezremove.png"
            alt="ELÀRÀ models smiling together"
            width={660}
            height={660}
          />
        </div>

        <div className="flex flex-col justify-center max-w-lg">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-black mb-10 uppercase leading-tight">
            Subscribe to <br /> our newsletter
          </h2>

          <form onSubmit={handleSubmit} className="w-full mb-6">
            <div className="relative flex items-center border-b border-black pb-2 group">
              <input
                type="email"
                placeholder="EMAIL"
                required
                className="w-full bg-transparent text-sm font-medium tracking-widest text-black placeholder-gray-500  outline-none py-1 pr-10"
              />

              <button
                type="submit"
                className="absolute right-0 bottom-2  text-black hover:translate-x-1 transition-transform duration-200"
                aria-label="Submit email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </form>

          {/* Description Text */}
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed tracking-wide font-normal">
            Stay connected with ELÀRÀ for new shade drops, exclusive offers, and
            beauty inspiration and be the first to discover what&apos;s next.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
