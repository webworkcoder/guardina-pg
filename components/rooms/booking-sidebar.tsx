export const BookingSidebar = ({ price }: { price: number }) => (
  <div className="bg-white border rounded-xl p-8 shadow-xl shadow-slate-200/50">
    <div className="flex justify-between items-baseline mb-8">
      <h3 className="text-3xl font-bold text-[#2C4A42]">₹{price}</h3>
      <span className="text-slate-400">/ month</span>
    </div>

    <div className="space-y-4 mb-8">
      <div className="p-4 border rounded-lg">
        <label className="block text-xs font-bold text-slate-400 uppercase mb-1">
          Student Name
        </label>
      </div>
      <div className="p-4 border rounded-lg">
        <label className="block text-xs font-bold text-slate-400 uppercase mb-1">
          Rooms
        </label>
        <select className="w-full outline-none font-medium bg-transparent">
          <option>Single Bed</option>
          <option>Double Bed</option>
          <option>Tripple Bed</option>
        </select>
      </div>
    </div>

    <button
      className="px-8 py-2 rounded-full w-full
        bg-gradient-to-r from-green-300 to-green-500
        text-black font-semibold shadow-sm"
    >
      Book Now
    </button>

    <p className="text-center text-slate-400 text-sm mt-4 italic">
      Booking Your Rooms as Soon as Possible.
    </p>
  </div>
);
