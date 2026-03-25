import React, { useEffect, useState } from "react";
import { motion, useScroll, hover } from "motion/react";
import CircularProgress from "@mui/material/CircularProgress";

const Hero = () => {
  const [info, setInfo] = useState([]);

  const renderCards = async () => {
    try {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood",
      );

      const data = await res.json();
      setInfo(data.meals || []);
      console.log(data.meals);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    renderCards();
  }, []);

  const getPrice = (id) => {
    return (id % 500) + 100;
  };

  const getRating = (id) => {
    return (id % 5) + 1;
  };

  return (
    <div>
        <h1 className="text-4xl font-bold text-center py-10">
  Welcome to <span className="text-green-500">TasteTown</span> 🍔
</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4 container mx-auto py-13 px-4 ">
        {info.length > 0 ? (
          info.map((meal) => (
            <motion.div
              key={meal.idMeal}
              whileHover={{
                scale: 1.1,
                y: -5,
                transition: {
                  duration : 0.1,
                },
                zIndex: 10,
              }}
              className="bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 p-4 flex flex-col gap-6 rounded-2xl cursor-pointer"
            >
              {/* Img */}
              <div className="flex flex-col gap-8 items-start">
                <motion.img
                  className="rounded-2xl w-full h-40 object-cover"
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  width={200}
                />
              </div>

              {/* Header, price And Rating, Order Button */}
              <div className="flex flex-col justify-between space-y-3">
                <h2 className="text-[14px] font-bold">{meal.strMeal}</h2>

                {/* price And Rating */}
                <div className="border border-transparent">
                  <p className="font-medium text-[#454545]">
                    price: ${getPrice(meal.idMeal)}
                  </p>

                  <p className="text-yellow-500 text-sm">
                    {"⭐".repeat(getRating(meal.idMeal))}
                  </p>
                </div>

                {/* Order Button */}
                <motion.button
                  whileTap={{
                    opacity: 0.5,
                    scale: 0.9,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="w-full px-4 py-3 bg-green-500 hover:bg-green-600 transition-all rounded-xl text-white font-semibold cursor-pointer"
                >
                  Order Now
                </motion.button>
              </div>
            </motion.div>
          ))
        ) : (
          // Loading Spinner
          <div className=" col-span-full flex justify-center items-center py-20">
            <h3 className=" text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold">
              <CircularProgress />
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
