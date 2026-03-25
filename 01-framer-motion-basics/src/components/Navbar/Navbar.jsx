import { motion } from "motion/react";

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-green-600 cursor-pointer">
          🍽️ Foodie
        </h1>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <p className="hover:text-green-600 cursor-pointer transition">Home</p>
          <p className="hover:text-green-600 cursor-pointer transition">Menu</p>
          <p className="hover:text-green-600 cursor-pointer transition">
            About
          </p>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:block px-4 py-2 rounded-2xl cursor-pointer border border-green-500 text-green-600 hover:bg-green-500 hover:text-white transition">
            Login
          </button>

          <button className="px-4 py-2 bg-green-500 text-white rounded-2xl cursor-pointer hover:bg-green-600 transition shadow-md">
            Sign Up
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
