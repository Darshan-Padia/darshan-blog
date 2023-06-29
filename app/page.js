'use client'
import Image from "next/image";
import Search from "./components/Search";
import Articles from "./components/Articles";
import Categories from "./components/Categories";
import RelatedOrRecents from "./components/RelatedOrRecents";
import { useState , useEffect } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
    // useEffect(() => {
    //   if (data.length > 0 ) {
    //     setFilteredData(data);
    //   }
    // }, [data]);
  return (
    <main className=" 
    pr-5 pl-5 
    md:pl-16 md:pr-16
    sm:pl-12 sm:pr-12
    lg:pl-20 lg:pr-20
    
    "
    // style={{backgroundImage: "url('/bg2.jpg')"}}
    >
      <div className="flex w-full gap-28 justify-between " >
        <div className="searchAndArticles lg:max-w-none  w-full sm:max-w-sm md:max-w-xl  flex  flex-col gap-3 " >
          <Search
           data={data}
           setData={setData}
           filteredData={filteredData}
           setFilteredData={setFilteredData}
          />
          <hr/>
          <Articles
          data={data}
          setData={setData}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
            />
        </div>

        <div className="hidden sticky h-1 right-0 top-14 sm:flex md:flex lg:flex flex-col gap-3 w-2/5" >
          <Categories 
          data={data}
          setData={setData}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
           />
          <hr/>
          <RelatedOrRecents />
        </div>
      </div>
    </main>
  );
}
