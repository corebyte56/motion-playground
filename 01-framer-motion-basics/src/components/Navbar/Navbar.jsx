import { motion, hover } from "motion/react";
import { X, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [ShowMenu, setShowMenu] = useState(false);

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
          <motion.button
            whileTap={{
              opacity: 0.1,
              scale: 0.2,
            }}
            transition={{}}
            className="hidden sm:block px-4 py-2 rounded-2xl border border-green-500 text-green-600 cursor-pointer hover:bg-green-500 hover:text-white transition"
          >
            Login
          </motion.button>

          <motion.button
            whileTap={{
              opacity: 0.1,
              scale: 0.2,
            }}
            transition={{}}
            className="px-4 py-2 border border-transparent bg-green-500 text-white rounded-2xl cursor-pointer hover:bg-transparent hover:text-green-600 hover:border hover:border-green-500 transition shadow-md"
          >
            Sign Up
          </motion.button>
        </div>

        {/* resposive Menu */}

        <div className="md:hidden cursor-pointer">
          <motion.button
            whileTap={{
              opacity: 0.5,
            }}
            transition={{
              duration: 0.6,
            }}
            onClick={() => {
              setShowMenu(!ShowMenu);
            }}
            className="cursor-pointer"
          >
            {ShowMenu ? <X /> : <Menu />}
          </motion.button>

          <div className="hidden flex flex-col items-center gap-4 absolute top-0 text-gray-700 font-medium">
            <p className="hover:text-green-600 cursor-pointer transition">
              Home
            </p>
            <p className="hover:text-green-600 cursor-pointer transition">
              Menu
            </p>
            <p className="hover:text-green-600 cursor-pointer transition">
              About
            </p>
          </div>

          <div className="hidden flex items-center gap-4">
          <motion.button
            whileTap={{
              opacity: 0.1,
              scale: 0.2,
            }}
            transition={{}}
            className="hidden sm:block px-4 py-2 rounded-2xl border border-green-500 text-green-600 cursor-pointer hover:bg-green-500 hover:text-white transition"
          >
            Login
          </motion.button>

          <motion.button
            whileTap={{
              opacity: 0.1,
              scale: 0.2,
            }}
            transition={{}}
            className="px-4 py-2 border border-transparent bg-green-500 text-white rounded-2xl cursor-pointer hover:bg-transparent hover:text-green-600 hover:border hover:border-green-500 transition shadow-md"
          >
            Sign Up
          </motion.button>
        </div>

        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
