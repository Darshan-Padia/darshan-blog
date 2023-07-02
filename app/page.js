'use client'
import Image from "next/image";
import Search from "./components/Search";
import Articles from "./components/Articles";
import Categories from "./components/Categories";
import RelatedOrRecents from "./components/RelatedOrRecents";
import { useState , useEffect } from "react";
import { getTotalPosts } from "./services";
import { GoogleAdSense } from "nextjs-google-adsense";

export default function Home() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [categoryArray, setCategoryArray] = useState([]);
  // applying pagination 
  const [totalPosts, setTotalPosts] = useState(0);
  const[catCurrentpage, setCatCurrentPage] = useState(1);
  const[catNumberOfPages, setCatNumberOfPages] = useState(0);
  const[catOffset, setCatOffset] = useState(0);
  useEffect(() => {
    getTotalPosts([]).then((res) => {
      let ttlPosts 
      ttlPosts = res;
      setTotalPosts(ttlPosts);
    });
  }, []);
  const articlesPerPage = 2;
  const currentPageNormal = 1;
  const [currentPage, setCurrentPage] = useState(1);
 
  console.log(totalPosts, 'total posts');
  const numberOfPages = Math.ceil( totalPosts / articlesPerPage);
  const offset = (currentPage - 1) * articlesPerPage;

  
  return (
    <main className=" 
    pr-5 pl-5 
    md:pl-16 md:pr-16
    sm:pl-12 sm:pr-12
    lg:pl-12 lg:pr-12
    mb-5
    "
    // style={{backgroundImage: "url('/bg2.jpg')"}}
    >
      <GoogleAdSense publisherId={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_PUB_ID} />

      <div className=" gap-2 flex-col  md:flex-row  lg:gap-7 sm:gap-7  flex w-full md:gap-7 justify-between " >
        <div className=" searchAndArticles lg:max-w-none min-w-full md:min-w-0  w-full sm:max-w-sm md:max-w-xl  flex  flex-col gap-3 " >
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
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          articlesPerPage={articlesPerPage}
          numberOfPages={numberOfPages}
          offset={offset}
          currentPageNormal={currentPageNormal}
          categoryArray={categoryArray}
          setCategoryArray={setCategoryArray}
          catCurrentpage={catCurrentpage}
          setCatCurrentPage={setCatCurrentPage}
          catNumberOfPages={catNumberOfPages}
          setCatNumberOfPages={setCatNumberOfPages}
          catOffset={catOffset}
          setCatOffset={setCatOffset}
          
            />
        </div>

        <div className=" w-full sticky md:sticky md:h-1 md:right-0 md:top-14 sm:flex  flex flex-col gap-3 md:w-2/5" >
          <Categories 
          data={data}
          setData={setData}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          articlesPerPage={articlesPerPage}
          numberOfPages={numberOfPages}
          offset={offset}
          // currentPageNormal={currentPageNormal}
          categoryArray={categoryArray}
          setCategoryArray={setCategoryArray}
          catCurrentpage={catCurrentpage}
          setCatCurrentPage={setCatCurrentPage}
          catNumberOfPages={catNumberOfPages}
          setCatNumberOfPages={setCatNumberOfPages}
          catOffset={catOffset}
          setCatOffset={setCatOffset}
           />
          <hr/>
          <RelatedOrRecents />
        </div>
      </div>
    </main>
  );
}
