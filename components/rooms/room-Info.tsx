/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Bed,
  Bath,
  Maximize,
  Users,
  Star,
  LocationEdit,
  CheckCheck,
} from "lucide-react";

export const RoomInfo = ({ room }: any) => {
  return (
    <div className="space-y-10">
      {/* Header Info */}
      <div className="border-b pb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="bg-[#2C4A42]/10 text-[#2C4A42] px-4 py-1 rounded-full text-sm font-semibold">
            {room.category}
          </span>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 fill-orange-400 text-orange-400" />
            <span className="font-bold">{room.rating}</span>
            <span className="text-slate-400">({room.reviews} Reviews)</span>
          </div>
        </div>
        <h2 className="text-4xl font-serif font-bold text-slate-900 mb-2">
          {room.title}
        </h2>
        <p className="text-slate-500 flex items-center gap-2">
          <LocationEdit size={16} /> {room.location}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 bg-slate-50 rounded-3xl px-8">
        <div className="flex items-center gap-3">
          <Bed className="text-[#2C4A42]" />
          <div>
            <p className="text-xs text-slate-400">Bed</p>
            <p className="font-bold">{room.bed}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Bath className="text-[#2C4A42]" />
          <div>
            <p className="text-xs text-slate-400">Bath</p>
            <p className="font-bold">{room.bath}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Maximize className="text-[#2C4A42]" />
          <div>
            <p className="text-xs text-slate-400">Sqft</p>
            <p className="font-bold">{room.sqft}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Users className="text-[#2C4A42]" />
          <div>
            <p className="text-xs text-slate-400">Guests</p>
            <p className="font-bold">{room.guests}</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-serif font-bold mb-4">Room Overview</h3>
        <p className="text-slate-600 leading-relaxed text-lg">
          {room.overview}
        </p>
      </div>

      <div>
        <h3 className="text-2xl  font-bold mb-6">Amenities</h3>
        <div className="grid grid-cols-2 gap-4">
          {room.amenities.map((item: string) => (
            <div
              key={item}
              className="flex items-center gap-3 p-4 border rounded-2xl hover:border-[#2C4A42] transition-colors group"
            >
              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-[#2C4A42]/10">
                <CheckCheck size={16} />
              </div>
              <span className="font-medium text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
