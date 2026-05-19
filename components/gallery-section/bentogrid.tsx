"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

const GALLERY_DATA = [
  {
    id: 1,
    src: "/single/s1.jpeg",
    title: "Premium Resident Room",
    tag: "Luxury Room",
  },
  {
    id: 2,
    src: "/single/s2.jpeg",
    title: "Luxury Living Space",
    tag: "Luxury Room",
  },
  {
    id: 3,
    src: "/double/d1.jpeg",
    title: "Premium Resident Room",
    tag: "Luxury Room",
  },
  {
    id: 4,
    src: "/double/d2.jpeg",
    title: "Luxury Living Space",
    tag: "Luxury Room",
  },
  {
    id: 5,
    src: "/rooms/pg5.jpeg",
    title: "Premium Resident Room",
    tag: "Luxury Room",
  },
  {
    id: 6,
    src: "/rooms/pg6.jpeg",
    title: "Luxury Living Space",
    tag: "Luxury Room",
  },
  {
    id: 7,
    src: "/rooms/pg7.jpeg",
    title: "Premium Resident Room",
    tag: "Luxury Room",
  },
  {
    id: 8,
    src: "/rooms/pg8.jpeg",
    title: "Luxury Living Space",
    tag: "Luxury Room",
  },
  {
    id: 9,
    src: "/rooms/pg9.jpeg",
    title: "Premium Resident Room",
    tag: "Luxury Room",
  },
  {
    id: 10,
    src: "/rooms/pg10.jpeg",
    title: "Luxury Living Space",
    tag: "Luxury Room",
  },
  {
    id: 11,
    src: "/rooms/pg11.jpeg",
    title: "Premium Resident Room",
    tag: "Luxury Room",
  },
  {
    id: 12,
    src: "/rooms/pg12.jpeg",
    title: "Luxury Living Space",
    tag: "Luxury Room",
  },
  {
    id: 13,
    src: "/rooms/pg13.jpeg",
    title: "Premium Resident Room",
    tag: "Luxury Room",
  },
  {
    id: 14,
    src: "/rooms/pg14.jpeg",
    title: "Luxury Living Space",
    tag: "Luxury Room",
  },
  {
    id: 15,
    src: "/rooms/pg15.jpeg",
    title: "Premium Resident Room",
    tag: "Luxury Room",
  },
  {
    id: 16,
    src: "/rooms/pg16.jpeg",
    title: "Luxury Living Space",
    tag: "Luxury Room",
  },
  {
    id: 17,
    src: "/rooms/pg17.jpeg",
    title: "Premium Resident Room",
    tag: "Luxury Room",
  },
  {
    id: 18,
    src: "/rooms/pg18.jpeg",
    title: "Luxury Living Space",
    tag: "Luxury Room",
  },
  {
    id: 19,
    src: "/rooms/pg19.jpeg",
    title: "Premium Resident Room",
    tag: "Luxury Room",
  },
  {
    id: 20,
    src: "/rooms/pg20.jpeg",
    title: "Luxury Living Space",
    tag: "Luxury Room",
  },
  {
    id: 21,
    src: "/rooms/pg21.jpeg",
    title: "Premium Resident Room",
    tag: "Luxury Room",
  },
  {
    id: 22,
    src: "/rooms/pg22.jpeg",
    title: "Luxury Living Space",
    tag: "Luxury Room",
  },
  {
    id: 23,
    src: "/rooms/pg23.jpeg",
    title: "Premium Resident Room",
    tag: "Luxury Room",
  },
  {
    id: 24,
    src: "/rooms/pg24.jpeg",
    title: "Luxury Living Space",
    tag: "Luxury Room",
  },
  {
    id: 25,
    src: "/rooms/pg25.jpeg",
    title: "Premium Resident Room",
    tag: "Luxury Room",
  },
  {
    id: 26,
    src: "/rooms/pg26.jpeg",
    title: "Luxury Living Space",
    tag: "Luxury Room",
  },
  {
    id: 27,
    src: "/rooms/pg27.jpeg",
    title: "Premium Resident Room",
    tag: "Luxury Room",
  },
  {
    id: 28,
    src: "/rooms/pg28.jpeg",
    title: "Luxury Living Space",
    tag: "Luxury Room",
  },
  {
    id: 29,
    src: "/rooms/pg29.jpeg",
    title: "Premium Resident Room",
    tag: "Luxury Room",
  },
  {
    id: 30,
    src: "/rooms/pg30.jpeg",
    title: "Luxury Living Space",
    tag: "Luxury Room",
  },
  {
    id: 31,
    src: "/rooms/pg31.jpeg",
    title: "Premium Resident Room",
    tag: "Luxury Room",
  },
  {
    id: 32,
    src: "/rooms/pg32.jpeg",
    title: "Luxury Living Space",
    tag: "Luxury Room",
  },
  {
    id: 33,
    src: "/rooms/pg33.jpeg",
    title: "Premium Resident Room",
    tag: "Luxury Room",
  },
  {
    id: 34,
    src: "/rooms/pg34.jpeg",
    title: "Luxury Living Space",
    tag: "Luxury Room",
  },
  {
    id: 35,
    src: "/rooms/pg35.jpeg",
    title: "Premium Resident Room",
    tag: "Luxury Room",
  },
  {
    id: 36,
    src: "/rooms/pg36.jpeg",
    title: "Luxury Living Space",
    tag: "Luxury Room",
  },
];

const bentoPatterns = [
  "md:col-span-2 md:row-span-2 h-[350px] md:h-[480px]",
  "md:col-span-1 md:row-span-1 h-[228px]",
  "md:col-span-1 md:row-span-2 h-[350px] md:h-[480px]",
  "md:col-span-1 md:row-span-1 h-[228px]",
  "md:col-span-1 md:row-span-2 h-[350px] md:h-[480px]",
  "md:col-span-1 md:row-span-1 h-[228px]",
  "md:col-span-1 md:row-span-1 h-[228px]",
];

export const BentoGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeLightboxImg, setActiveLightboxImg] = useState<string | null>(
    null,
  );

  const imagesPerPage = 7;

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = GALLERY_DATA.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = Math.ceil(GALLERY_DATA.length / imagesPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    document
      .getElementById("gallery-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="gallery-section"
      className="px-4 md:px-8 py-10 relative overflow-hidden"
    >
      <div className="absolute top-10 left-0 w-full flex justify-center pointer-events-none select-none opacity-[0.03] z-0">
        <h1 className="text-[3rem] md:text-[10rem] font-bold text-slate-900 uppercase tracking-tighter leading-none whitespace-nowrap">
          Gallery
        </h1>
      </div>
      {/* Background Decorative Ambient Orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#1B5E20]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#1B5E20]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-4">
          <span className="text-[#1B5E20] uppercase tracking-[0.4em] font-bold text-xs bg-[#1B5E20]/10 px-4 py-1.5 rounded-full inline-block">
            Our Spaces
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
            Explore{" "}
            <span className="text-[#1B5E20]">Premium Living</span>
          </h2>
          <p className="text-slate-500 max-w-md mx-auto text-sm md:text-base">
            Take a virtual tour of our premium resident rooms, modern spaces,
            and comfort-driven residential designs.
          </p>
        </div>

        {/* Bento Grid Layout Configuration */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
          {currentImages.map((img, index) => {
            const gridClass = bentoPatterns[index % bentoPatterns.length];
            return (
              <div
                key={img.id}
                onClick={() => setActiveLightboxImg(img.src)}
                className={`relative rounded-[1rem] overflow-hidden group bg-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-slate-200/60 transition-all duration-700 hover:shadow-[0_20px_40px_rgba(27,94,32,0.1)] cursor-pointer ${gridClass}`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8" />

                {/* Permanent Floating Accent Tag */}
                {/* <div className="absolute top-5 left-5 z-20">
                  <span className="bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm border border-white/40">
                    {img.tag}
                  </span>
                </div> */}

                {/* Micro-Interactions on Card Hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex justify-between items-end">
                  <div className="text-white space-y-1">
                    <p className="text-xs uppercase tracking-widest text-white/60">
                      Guardian Premium
                    </p>
                    <h3 className="text-xl font-bold tracking-tight">
                      {img.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-slate-200 gap-4">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
            Showing Page{" "}
            <span className="text-slate-900 font-black">{currentPage}</span> of{" "}
            {totalPages}
          </p>

          <div className="flex items-center gap-3">
            {/* Previous Page Arrow Action */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-3 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white transition-all shadow-sm cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Pagination Sequence Node Tree */}
            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }, (_, idx) => (
                <button
                  key={idx + 1}
                  onClick={() => handlePageChange(idx + 1)}
                  className={`w-10 h-10 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    currentPage === idx + 1
                      ? "bg-[#1B5E20] text-white shadow-lg shadow-[#1B5E20]/20"
                      : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>

            {/* Next Page Arrow Action */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-3 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white transition-all shadow-sm cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal System */}
      {activeLightboxImg && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300">
          <button
            onClick={() => setActiveLightboxImg(null)}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors border border-white/10"
          >
            <X size={24} />
          </button>
          <div className="relative max-w-5xl w-full h-[80vh]">
            <Image
              src={activeLightboxImg}
              alt="Expanded Preview"
              fill
              className="object-contain rounded-xl"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  );
};
