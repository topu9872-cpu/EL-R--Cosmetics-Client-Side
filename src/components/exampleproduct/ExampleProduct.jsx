import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ExampleProduct = () => {
  return (
    <div className='mx-auto text-center bg-gray-50 pb-10'>
      <Image src='/f86d32f3f70ebb216f4a1cc37a90aa1b (1)_LE_upscale_prime-ezremove.png' height={700} width={1000} alt='image'/>
      <Link href='/shop' className='btn btn-outline rounded-full text-lg font-semibold'>Find My Shade</Link>
    </div>
  );
};

export default ExampleProduct;