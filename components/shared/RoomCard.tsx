"use client";
import Image from "next/image";
import { Star, Bed, Bath, Maximize } from "lucide-react";
import Link from "next/link";

interface IRoom {
  category?: string;
  price?: number;
  title?: string;
  bed?: number;
  bath?: number;
  sqft?: number;
  rating?: string;
  image?: string;
  slug: string;
}

const RoomCard = ({
  category,
  price,
  title,
  bed,
  bath,
  sqft,
  rating,
  image,
  slug,
}: IRoom) => {
  return (
    <Link href={`/rooms/${slug}`} className="block group">
      <div className="bg-white rounded-2xl border-b-2 border-b-[#2C4A42] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 group">
        <div className="relative h-[250px] w-full overflow-hidden">
          <Image
            src={image || ""}
            alt={title || ""}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Category Badge */}
          <div className="absolute bottom-0 left-0 bg-[#2C4A42] text-white px-6 py-2 rounded-tr-2xl text-sm font-medium">
            {category}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-serif font-bold text-[#2C4A42]">
                ₹{price}
              </span>
              <span className="text-slate-400 text-sm">/month</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
              <span className="font-semibold text-slate-700">{rating}</span>
            </div>
          </div>

          <h3 className="text-xl font-serif font-bold text-slate-900">
            {title}
          </h3>

          <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <Bed className="w-4 h-4 text-orange-400" />
              <span>{bed} Bed</span>
            </div>
            <div className="flex items-center gap-2">
              <Bath className="w-4 h-4 text-orange-400" />
              <span>{bath} Bath</span>
            </div>
            <div className="flex items-center gap-2">
              <Maximize className="w-4 h-4 text-orange-400" />
              <span>{sqft} sqft</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RoomCard;
