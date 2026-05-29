import {getSearchProducts } from '@/app/api/Server';
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueData = async() => {
    const productsData=await getSearchProducts()
    
  return (
   <div className="w-full space-x-5 overflow-hidden py-6">
  <Marquee
    speed={40}
    pauseOnHover={true}
    gradient={false}
  >
    {productsData.map((product) => (
      <div
        key={product._id}
        className="  space-x-6 grid gap-6 mx-3 py-2 min-w-fit"
      >
        <Image
          src={product.image}
          width={100}
          height={200}
          alt={product.name}
          className="w-50 h-100 sm:w-20 sm:h-30 object-cover mx-auto rounded-lg"
        />

        <h1 className="text-sm  md:text-base font-medium whitespace-nowrap">
          {product.name}
        </h1>
        
      </div>
      
    ))}
  </Marquee>
</div>
  );
};

export default MarqueData;