import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Filter from './Components/Filter';
import Cards from './Components/Cards';
import Spinner from './Components/Spinner';
import { filterData, apiUrl } from './data';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [loading, setLoader] = useState(true);
  const [courses, setCourses] = useState(null);
  const [category, setCategory] = useState(filterData[0].title); 
  async function fetchData() {
    setLoader(true);
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();
      setCourses(output.data);
    } catch (error) {
      toast.error("Something went wrong"); // Display error notification
    }
    setLoader(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='min-h-screen flex flex-col bg-[#1e1954]'>
      <div>
        <Navbar /> 
      </div>
        <div>
            <Filter filterData={filterData} category={category} setCategory={setCategory} /> 
       </div>
        <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
            {loading ? <Spinner /> : <Cards courses={courses} category = {category}/>}
       </div>
      <ToastContainer /> {/* ToastContainer to display notifications */}
    </div>
  );
}

export default App;
