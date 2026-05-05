"use client";
import React, { useState } from "react";
import { Plus, Minus, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FeatureBar from "../shared/FeatureBar";

const faqData = [
  {
    question: "What time is check-in and check-out?",
    answer:
      "Standard check-in time is at 2:00 PM and check-out is at 11:00 AM. Early check-in or late check-out is subject to availability.",
  },
  {
    question: "What is the hotel's cancellation policy?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.",
  },
  {
    question: "Does the hotel have on-site restaurants?",
    answer:
      "Yes, we have three multi-cuisine restaurants and a rooftop bar serving local and international delicacies.",
  },
  {
    question: "What types of rooms are available?",
    answer:
      "We offer Deluxe Rooms, Executive Suites, and Family Villas, each designed for maximum comfort and high-fidelity living.",
  },
  {
    question: "Is parking available at the hotel?",
    answer:
      "Yes, we provide complimentary secure valet parking for all our staying guests and event attendees.",
  },
  {
    question: "Does the hotel have event or meeting spaces?",
    answer:
      "Absolutely. We have state-of-the-art conference rooms and a grand ballroom for weddings and corporate events.",
  },
];

export const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  return (
    <>
      <section className="py-10 relative overflow-hidden">
        {/* Background Ghost Text */}
        <div className="absolute top-10 left-0 w-full flex justify-center pointer-events-none select-none opacity-[0.03] z-0">
          <h1 className="md:text-[10rem] text-[3rem] font-bold text-slate-900 uppercase tracking-tighter leading-none whitespace-nowrap">
            FAQS
          </h1>
        </div>

        <div className="px-4 md:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16 space-y-2">
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-5 flex justify-center items-center opacity-60">
                <svg viewBox="0 0 100 20" className="w-full h-full">
                  <path
                    d="M0 10 Q 25 0 50 10 T 100 10"
                    fill="none"
                    stroke="#1B5E20"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <span className="text-[#1B5E20] uppercase tracking-[0.4em] font-bold text-xs">
                Faqs
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A]">
              Question? Look here.
            </h2>
          </div>

          <div className=" grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* FAQ Accordion List */}
            <div className="lg:col-span-2 space-y-4">
              {faqData.map((item, index) => {
                const isOpen = activeIndex === index;
                return (
                  <div
                    key={index}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "bg-[#1B5E20] border-[#1B5E20]"
                        : "bg-white border-slate-100"
                    }`}
                  >
                    <button
                      onClick={() => setActiveIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                    >
                      <span
                        className={`font-bold text-lg md:text-xl ${isOpen ? "text-white" : "text-[#1A1A1A]"}`}
                      >
                        {item.question}
                      </span>
                      {isOpen ? (
                        <Minus className="text-white" size={24} />
                      ) : (
                        <Plus className="text-slate-400" size={24} />
                      )}
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-6 text-white/80 leading-relaxed text-sm md:text-base">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Right Side Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <div className="bg-[#1B5E20] rounded-2xl p-8 text-center space-y-6 text-white relative overflow-hidden">
                {/* Small Chat Icon Style Decoration */}
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-[#E6AC6F]/10 rounded-full flex items-center justify-center">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="#ffffff"
                      className="opacity-90"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">
                    You have different questions?
                  </h3>
                  <p className="text-white/70 text-sm">
                    Our team will answer all your questions. We ensure a quick
                    response.
                  </p>
                </div>

                <button className="w-full py-2 px-4 bg-white text-[#1A1A1A] font-bold rounded-2xl hover:bg-[#d49b5f] transition-all">
                  Contact Us
                </button>
              </div>

              {/* Service Card */}
              <div className="bg-white rounded-2xl p-8 border border-slate-100 flex items-center gap-5 shadow-sm">
                <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center text-[#2C4A42]">
                  <PhoneCall size={28} />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                    Your Comfort, Our Priority
                  </p>
                  <h4 className="text-xl font-bold text-[#1A1A1A]">
                    24/7 Service
                  </h4>
                  <p className="text-[#2C4A42] font-bold">+91 123456781</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
