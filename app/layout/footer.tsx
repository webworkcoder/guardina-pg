"use client";
import React from "react";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { Send } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#2C4A42] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & About Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#E6AC6F] rounded-full flex items-center justify-center">
                <span className="text-[#2C4A42] font-bold text-2xl">G</span>
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold tracking-wide">
                  Guardian
                </h2>
                <p className="text-[10px] uppercase tracking-[0.2em] opacity-70">
                  PG
                </p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[FaFacebook, BsTwitter, BsInstagram, LiaLinkedin, BsYoutube].map(
                (Icon, idx) => (
                  <Link
                    key={idx}
                    href="#"
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#E6AC6F] hover:text-[#2C4A42] hover:border-[#E6AC6F] transition-all duration-300"
                  >
                    <Icon size={18} />
                  </Link>
                ),
              )}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="lg:pl-10">
            <h3 className="text-xl font-serif mb-6">Links</h3>
            <ul className="space-y-4 text-white/70 text-sm">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#E6AC6F] transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#E6AC6F] transition-colors"
                >
                  Our Staff
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#E6AC6F] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#E6AC6F] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#E6AC6F] transition-colors"
                >
                  Guest Review
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-xl font-serif mb-6">Contact Info</h3>
            <ul className="space-y-4 text-white/70 text-sm">
              <li className="hover:text-[#E6AC6F] cursor-pointer">
                (+91) 1234567891
              </li>
              <li className="hover:text-[#E6AC6F] cursor-pointer">
                example@gmail.com
              </li>
              <li className="leading-relaxed">
                2464 Royal Ln. Mesa, New
                <br /> Jersey 45463
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-serif">Get the latest information</h3>
            <div className="relative group">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-white/10 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-[#E6AC6F]/50 transition-all text-sm placeholder:text-white/40"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#E6AC6F] p-3 rounded-lg text-[#2C4A42] hover:bg-[#d49b5f] transition-all">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-white/50">
          <p>
            Copyright © {new Date().getFullYear()} Guardian Pg. All Rights
            Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">
              User Terms & Conditions
            </Link>
            <span className="opacity-30">|</span>
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
