import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <div className="relative inset-0 ">
      <Image
        src="/Gemini_Generated_Image_l1m8ful1m8ful1m8_LE_upscale_prime.jpeg"
        alt="banner"
        height={1000}
        width={1200}
        className="object-fill font-light h-screen  "
        priority
      />
      <div className="absolute inset-0 flex flex-col mt-50 justify-center px-6 sm:px-12 md:px-20 text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-xl">
          Shine from within
        </h1>

        <p className="mt-3 max-w-xl text-sm sm:text-base text-white/90">
          Enhance your lips with silky, nourishing color. A shade for every mood
          and moment. Feel confident, radiant, and effortlessly you.
        </p>

        <Link
          href="/shop"
          className="mt-6 w-fit bg-white text-black font-semibold px-4 py-2 z-20 rounded-full hover:scale-105 hover:shadow-lg transition duration-200"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default HeroBanner;
