import React from 'react';
import Link from 'next/link';
import { FaCamera, FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
// If you use Lucide icons or React Icons, import them here. 
// Otherwise, standard SVGs/images work perfectly.

const Footer=()=> {
  return (
    <footer className="w-full bg-[#F5ECE8] text-[#1E293B] font-sans pt-12 pb-6 px-6 md:px-16">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-12">
        
        {/* Brand Logo */}
        <div className="flex items-start">
          <span className="text-2xl font-black tracking-wider text-black">ELÀRÀ</span>
        </div>

        {/* Company Column */}
        <div>
          <h3 className="font-bold text-base text-black mb-4">Company</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><Link href="/shop" className="hover:text-black transition hover:underline">Shop</Link></li>
            <li><Link href="/about" className="hover:text-black transition hover:underline">About</Link></li>
            <li><Link href="/login" className="hover:text-black transition hover:underline">Login</Link></li>
            <li><Link href="/blog" className="hover:text-black transition hover:underline">Blog</Link></li>
          </ul>
        </div>

        {/* Support Column */}
        <div>
          <h3 className="font-bold text-base text-black mb-4">Support</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><Link href="/help" className="hover:text-black hover:underline transition">Help</Link></li>
            <li><Link href="/policy" className="hover:text-black hover:underline transition">Policy</Link></li>
            <li><Link href="/terms" className="hover:text-black hover:underline transition">Terms & Condition</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h3 className="font-bold text-base text-black mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><Link href="/faq" className="hover:text-black hover:underline transition">FAQ</Link></li>
            <li><Link href="/partnerships" className="hover:text-black hover:underline transition">Partnerships</Link></li>
            <li><Link href="/contact" className="hover:text-black hover:underline transition">Get-in-touch</Link></li>
          </ul>
        </div>

      </div>

      {/* Divider Line */}
      <hr className="border-t border-gray-300 max-w-7xl mx-auto" />

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex justify-end items-center pt-6">
        {/* Social Icons Container */}
        <div className="flex gap-3">
          {/* Instagram */}
          <a href="#" className="w-8 h-8 rounded-full text-[#E1306C] flex items-center justify-center  hover:opacity-90 transition" aria-label="Instagram">
          <FaCamera size={30}/>
          </a>
          {/* Facebook */}
          <a href="#" className="w-8 h-8 rounded-full  flex items-center justify-center  hover:opacity-90 transition" aria-label="Facebook">
           <FaFacebook size={30}/>
          </a>
          {/* X (Twitter) */}
          <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-90 transition" aria-label="X">
<FaXTwitter  size={30}/>
          </a>
          {/* YouTube */}
          <a href="#" className="w-8 h-8 rounded-full text-[#FF0000] flex items-center justify-center  hover:opacity-90 transition" aria-label="YouTube">
<FaYoutube size={30}/>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer ;