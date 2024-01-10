import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LandingPage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://image-api-h3en.onrender.com/');
        setData(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []); 

  console.log(data);

  return (
    <div className='grid grid-cols-5 p-3 gap-6'>
      {data ? (
        data.map((e, index) => (
          <div key={index} className="col-span-1 p-4 bg-slate-900 rounded-md flex flex-col justify-between">
            <img src={e.url} alt="" className='w-full '/>
            <h3 className='mt-3 font-semibold text-xl'>{e.imageName}</h3>
          </div>
        ))
      ) : (
        <h1>Loading......</h1>
      )}
    </div>
  );
  
}

export default LandingPage;
