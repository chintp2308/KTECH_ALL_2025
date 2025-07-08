import { Search, Bell } from "lucide-react";

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full  h-16 bg-white p-4 border-b border-gray-200">
      {/* Search bar */}
      <div className="flex items-center bg-gray-100 rounded-md px-3 py-2 w-80 border border-gray-200">
        <Search className="w-5 h-5 text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-400"
        />
      </div>
      {/* Right side: bell, avatar, name */}
      <div className="flex items-center gap-4">
        <Bell className="w-6 h-6 text-gray-500 cursor-pointer" />
        <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center" />
        <span className="text-gray-600 font-medium">Emma Kwan</span>
      </div>
    </div>
  );
};

export default Header;
