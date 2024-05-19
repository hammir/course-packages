import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import {apiUrl , filterData} from "./data";
import { toast } from "react-toastify";
import Spinner from "./Components/Spinner";

const App = () => {

const [courses,setCourses] = useState(null);
const [loading,setLoading] = useState(true);
const [category,setCategory] = useState(filterData[0].title); //Initializing it with "All" category


async function fetchData()
{
  try {
    setLoading(true);
    let response = await fetch(apiUrl);
    let output = await response.json();

    setCourses(output.data);
    
  } catch (error) {

    toast.error("error in network");
    
  }
  setLoading(false);
}

useEffect(() => {
  fetchData();
},[]);

  return (
    <div className="flex flex-col min-h-screen bg-bgDark2  ">
           <div>
           <Navbar></Navbar>
           </div>
           
           <div className="">

           <div>
           <Filter filterData={filterData} 
           category={category}
           setCategory={setCategory}/>
           </div>
           
           <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center 
           items-center min-h-[50vh]">
           {
            loading ? <Spinner/> : <Cards courses={courses} category={category}/>
           }
           </div>

           </div>

    </div>
  );
};

export default App;
