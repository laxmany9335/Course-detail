import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Filter from './Components/Filter';
import Cards from './Components/Cards';
import Spinner from './Components/Spinner';
import { filterData, apiUrl } from './data';
import { toast, ToastContainer } from 'react-toastify';  // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css';  // Import Toastify CSS

function App() {
  const [loading, setLoader] = useState(true);
  const [courses, setCourses] = useState(null);

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
  }, []); // Empty dependency array to run once on mount

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Filter filterData={filterData} />
      </div>
      <div>
        {loading ? <Spinner /> : <Cards courses={courses} />}
      </div>
      {/* ToastContainer to display notifications */}
      <ToastContainer />
    </div>
  );
}

export default App;
