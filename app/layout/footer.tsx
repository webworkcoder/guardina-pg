"use client";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { Send } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-[#1B5E20] text-white pt-16 pb-8">
      <div className="px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & About Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              {/* Logo */}
              <div className="relative w-[95px] h-[70px] flex-shrink-0">
                <Image
                  src={"/pg.png"}
                  fill
                  alt="Guardian PG Logo"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Text */}
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-wide text-white leading-none">
                  Guardian
                </h2>

                <p className="text-[11px] md:text-xs uppercase tracking-[0.28em] text-white/70 font-medium mt-1 leading-none">
                  Boy&#39;s Hostel & PG
                </p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Experience premium PG living with fully furnished rooms, healthy
              home-style meals, high-speed WiFi, and a safe environment crafted
              for students and working professionals.
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
                  href="/"
                  className="hover:text-[#E6AC6F] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#E6AC6F] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/rooms"
                  className="hover:text-[#E6AC6F] transition-colors"
                >
                  Rooms
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-[#E6AC6F] transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/food-menu"
                  className="hover:text-[#E6AC6F] transition-colors"
                >
                  Food Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#E6AC6F] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-xl font-serif mb-6">Contact Info</h3>
            <ul className="space-y-4 text-white/70 text-sm">
              <li className="hover:text-[#E6AC6F] cursor-pointer">
                (+91) 9473434263
              </li>
              <li className="hover:text-[#E6AC6F] cursor-pointer">
                info@guardianpg.in
              </li>
              <li className="leading-relaxed">
                Vivekanand Marg, H/O-10, Mother Teresa Marg, Patna 800013
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
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-white/50">
          <p className="text-center md:text-left">
            Copyright © {new Date().getFullYear()} Guardian PG. All Rights
            Reserved.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3 text-center">
            <Link href="#" className="hover:text-white transition-colors">
              User Terms & Conditions
            </Link>

            <span className="opacity-30 hidden md:block">|</span>

            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>

            <span className="opacity-30 hidden md:block">|</span>

            <a
              href="https://axvionel.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E6AC6F] transition-colors"
            >
              Designed & Developed by Axvionel Digital Private Limited
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
