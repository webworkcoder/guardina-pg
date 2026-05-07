"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { toast, Toaster } from "react-hot-toast";
import FeatureBar from "../shared/FeatureBar";

export const ReservationForm = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/send-reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Reservation request sent successfully!");

        setFormData({
          fullName: "",
          phone: "",
          mobile: "",
          email: "",
          message: "",
        });
      } else {
        toast.error(data.error || "Something went wrong!");
      }
    } catch (error) {
      toast.error("Failed to send reservation request!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <section className="py-10 relative overflow-hidden" id="contact">
        <div className="absolute top-10 left-0 w-full hidden md:flex justify-center pointer-events-none select-none opacity-[0.03] z-0">
          <h1 className="text-[3rem] lg:text-[10rem] font-bold text-slate-900 uppercase tracking-tighter leading-none whitespace-nowrap">
            Contact US
          </h1>
        </div>

        <div className="px-4 md:px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-10 md:mb-16 space-y-4">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-6 flex justify-center items-center opacity-60">
                <svg viewBox="0 0 100 20" className="w-full h-full">
                  <path
                    d="M0 10 Q 25 0 50 10 T 100 10"
                    fill="none"
                    stroke="#1B5E20"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              <span className="text-[#1B5E20] uppercase tracking-[0.4em] font-bold text-xs md:text-sm">
                Make a Reservation
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#1A1A1A] max-w-3xl mx-auto leading-tight">
              Book <span className="text-[#1B5E20]">Your Stay</span> and Enjoy
              Exceptional Comfort
            </h2>
          </div>

          {/* Main Card */}
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Form Side */}
              <form
                onSubmit={handleSubmit}
                className="space-y-6 order-2 lg:order-1"
              >
                {/* Heading */}
                <div className="space-y-3">
                  <span className="inline-flex items-center gap-2 text-[#1B5E20] rounded-full text-xs font-bold uppercase tracking-[0.25em]">
                    Luxury PG Booking
                  </span>

                  <h2 className="text-3xl md:text-5xl w-full font-bold text-[#1A1A1A] leading-tight">
                    Find Your Perfect{" "}
                    <span className="text-[#1B5E20]">Stay Experience</span>
                  </h2>

                  <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                    Enjoy premium comfort, fully furnished rooms, high-speed
                    WiFi, delicious meals, and a peaceful environment designed
                    for students and working professionals.
                  </p>
                </div>

                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter Your Full Name"
                    className="w-full h-14 md:h-16 px-5 rounded-full bg-[#1B5E20] border border-slate-200 focus:outline-none focus:bg-white focus:border-[#1B5E20]/30 focus:ring-2 focus:ring-[#1B5E20]/5 transition-all text-white focus:text-slate-700 placeholder:text-white"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">
                    Phone Number *
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter Your Contact Number"
                    className="w-full h-14 md:h-16 px-5 rounded-full bg-[#1B5E20] border border-slate-200 focus:outline-none focus:bg-white focus:border-[#1B5E20]/30 focus:ring-2 focus:ring-[#1B5E20]/5 transition-all text-white focus:text-slate-700 placeholder:text-white"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email Address"
                    className="w-full h-14 md:h-16 px-5 rounded-full bg-[#1B5E20] border border-slate-200 focus:outline-none focus:bg-white focus:border-[#1B5E20]/30 focus:ring-2 focus:ring-[#1B5E20]/5 transition-all text-white focus:text-slate-700 placeholder:text-white"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">
                    Additional Preferences (Optional)
                  </label>

                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your requirement..."
                    className="w-full rounded-2xl bg-[#F8FAFC] border border-slate-200 px-5 py-4 focus:outline-none focus:bg-white focus:border-[#1B5E20]/30 focus:ring-4 focus:ring-[#1B5E20]/5 transition-all text-slate-700 placeholder:text-slate-400 resize-none"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-14 md:h-16 cursor-pointer bg-[#1B5E20] text-white font-semibold uppercase tracking-[0.2em] hover:bg-[#143f16] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(27,94,32,0.35)] rounded-full flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={22} />
                      Sending...
                    </>
                  ) : (
                    "Book Now"
                  )}
                </button>
              </form>

              {/* Image Side */}
              <div className="relative h-[350px] md:h-[500px] rounded-[2rem] overflow-hidden group order-1 lg:order-2">
                <Image
                  src="/pg2.jpg"
                  alt="Premium Stay"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  priority
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Floating Badge */}
                <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-5 py-3">
                  <p className="text-white text-xs uppercase tracking-[0.25em]">
                    Premium Living
                  </p>

                  <h4 className="text-white text-xl font-bold mt-1">
                    Luxury PG
                  </h4>
                </div>

                {/* Bottom Tags */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
                  {[
                    "High Speed WiFi",
                    "Power Backup",
                    "Fully Furnished",
                    "24/7 Security",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/10 backdrop-blur-xl text-white text-[11px] md:text-xs px-4 py-2 rounded-full border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Decorative Glow */}
                <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#1B5E20]/30 blur-3xl rounded-full" />
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .py-4.5 {
            padding-top: 1.125rem;
            padding-bottom: 1.125rem;
          }
        `}</style>
      </section>

      <FeatureBar
        features={[
          "Nutritious Home-Style Meals",
          "24/7 Safety & Care",
          "High-Speed Wi-Fi for Study & Streaming",
          "Comfortable Study & Living Spaces",
          "Biometric Access",
          "Regular Cleaning & Maintenance",
        ]}
        duration={12}
      />
    </>
  );
};
