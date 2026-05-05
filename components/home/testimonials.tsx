"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import FeatureBar from "../shared/FeatureBar";

interface TestimonialItem {
  name: string;
  role: string;
  title: string;
  content: string;
  rating: string;
  image: string;
}

export const Testimonials: React.FC = () => {
  const reviews: TestimonialItem[] = [
    {
      name: "Jenny Wilson",
      role: "Happy Guest",
      title: "Professional and Friendly!",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      rating: "5.0",
      image: "/pg.png",
    },
    {
      name: "Bessie Cooper",
      role: "Happy Guest",
      title: "Excellent Hospitality!",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium .",
      rating: "5.0",
      image: "/pg.png",
    },
    {
      name: "Bessie Cooper",
      role: "Happy Guest",
      title: "Excellent Hospitality!",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      rating: "5.0",
      image: "/pg.png",
    },
    {
      name: "Jenny Wilson",
      role: "Happy Guest",
      title: "Professional and Friendly!",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      rating: "5.0",
      image: "/pg.png",
    },
  ];

  return (
    <>
      <section className="py-10 relative overflow-hidden testimonial-moving-section">
        {/* Background Ghost Text */}
        <div className="absolute top-10 left-0 w-full flex justify-center pointer-events-none select-none opacity-[0.03] z-0">
          <h1 className="text-[3rem] md:text-[10rem] font-bold text-slate-900 uppercase tracking-tighter leading-none whitespace-nowrap">
            GUEST REVIEWS
          </h1>
        </div>

        <div className="px-4 md:px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16 space-y-4">
            <div className="flex flex-col items-center gap-2">
              <span className="text-[#1B5E20] uppercase tracking-[0.4em] font-bold text-sm">
                Guest Reviews
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-[#1A1A1A] max-w-4xl mx-auto leading-tight">
              What Our <span className="text-[#1B5E20]">Satisfied Guests</span>{" "}
              Are Saying
            </h2>
          </div>

          {/* Moving Slider Container */}
          <div>
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{
                clickable: true,
                el: ".custom-pagination",
              }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="!pb-20"
            >
              {reviews.map((item, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative bg-white border border-slate-100 p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 h-full min-h-[380px] flex flex-col justify-between"
                  >
                    {/* Design logic stays identical to image_48f9a7.png */}
                    <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-[0.04] pointer-events-none">
                      <svg
                        width="150"
                        height="120"
                        viewBox="0 0 150 120"
                        fill="#2C4A42"
                      >
                        <path d="M0 120V57.6C0 25.6 24 0 52.8 0V24C38.4 24 28.8 38.4 28.8 52.8V57.6H57.6V120H0ZM91.2 120V57.6C91.2 25.6 115.2 0 144 0V24C129.6 24 120 38.4 120 52.8V57.6H148.8V120H91.2Z" />
                      </svg>
                    </div>

                    <div className="relative z-10 space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={20}
                              fill="yellow"
                              className="text-yellow-400"
                            />
                          ))}
                        </div>
                        <span className="text-[#1A1A1A] font-bold text-xl">
                          {item.rating}
                        </span>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-2xl font-serif font-bold text-[#1B5E20]">
                          {item.title}
                        </h3>
                        <p className="text-slate-500 leading-relaxed text-base italic">
                          &#34;{item.content}&#34;
                        </p>
                      </div>

                      <div className="flex items-center gap-4 pt-4 mt-auto">
                        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md bg-slate-50">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-[#1B5E20]">
                            {item.name}
                          </h4>
                          <p className="text-slate-500 font-medium text-xs">
                            {item.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Functional Pagination Dots */}
            <div className="custom-pagination flex justify-center gap-2 -mt-10"></div>
          </div>
        </div>

        <style jsx global>{`
          .testimonial-moving-section
            .custom-pagination
            .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            background: #1b5e20;
            opacity: 1;
            border-radius: 9999px;
            transition: all 0.3s ease;
            cursor: pointer;
          }
          .testimonial-moving-section
            .custom-pagination
            .swiper-pagination-bullet-active {
            width: 32px;
            background: #2c4a42 !important;
          }
          /* Ensures cards don't shrink or grow oddly */
          .testimonial-moving-section .swiper-slide {
            height: auto;
            display: flex;
          }
        `}</style>
      </section>
      <FeatureBar
        features={[
          "Breakfast Included",
          "Swimming Pool",
          "High Speed Wifi",
          "Spa & Wellness",
        ]}
        duration={10}
      />
    </>
  );
};
