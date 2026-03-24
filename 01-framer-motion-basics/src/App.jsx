import React, { useEffect, useState } from 'react';
import {motion} from 'motion/react'
import { hover } from "motion"

const App = () => {
  const [info, setInfo] = useState([]);

  const renderCards = async () => {
    try {
      const res = await fetch(
        'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
      
      const data = await res.json();
      setInfo(data.meals || []);
      console.log(data.meals);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    renderCards();
  }, []);

  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-9 container mx-auto py-13'>
      {info.length > 0 ? (
        info.map((meal) => (
          <motion.div key={meal.idMeal} 
          whileHover={{
            scale : 1.1,
            transition : {
              duration : 0.3
            }
          }}
          className='bg-white shadow-2xl p-4 flex flex-col lg:flex-row gap-5 justify-between rounded-2xl cursor-pointer'>

            <div className='flex flex-col gap-8 items-start'>
              <img className='rounded-2xl w-full h-40 object-cover' src={meal.strMealThumb} alt={meal.strMeal} width={200} />
              <button className='px-3 py-2 bg-green-600 rounded-2xl text-[16px] font-medium border border-transparent cursor-pointer'>Order Now</button>
            </div>
            
            <div className='flex flex-col justify-between'>
              <h2 className='text-[14px] font-bold'>{meal.strMeal}</h2>
            <p className='font-medium text-[#454545]'>price : ${Math.floor(Math.random() * (1000 - 100 + 1)) + 100}</p>
            </div>
            
          </motion.div>
          
        ))
      ) : (
        <div className=' h-screen w-screen'>
      <h3 className=' text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>
        Loading...
      </h3>
    </div>
      )}
    </div>
  );
};

export default App;