import React, { useEffect, useState } from 'react';

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
    <div className='grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-9 container mx-auto py-13'>
      {info.length > 0 ? (
        info.map((meal) => (
          <div key={meal.idMeal} className='p-7 border flex flex-col gap-5 items-center justify-between rounded-2xl'>
            <h2 className='text-[20px] font-medium'>{meal.strMeal}</h2>
            <img className='rounded-2xl' src={meal.strMealThumb} alt={meal.strMeal} width={200} />
          </div>
        ))
      ) : (
        <p>No meals found</p>
      )}
    </div>
  );
};

export default App;