import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Filter from './Components/Filter'
import Cards from './Components/Cards'
import Spinner from './Components/Spinner'
import { filterData,apiUrl } from './data'
import { useState,useEffect } from 'react'
function App() {
  
const[loading,setLoader] = useState(true);
const[courses, setCourses] = useState([]);
 async function fetchData() {
  setLoader(true);
    try{
       let response = await fetch(apiUrl);
       let output = await response.json();
       setCourses(output.data);
    }catch(error){
      toast.error("Something went wrong");
    }
    setLoader(false);
 }
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div>
          <Filter filterData = {filterData}/>
        </div>
        <div>
           {
            loading ? <Spinner/> : <Cards/>
           }
        </div>
    </div>
  )
}

export default App