'use client'
import Image from "next/image"
import Link from "next/link";
import { useState, useEffect } from "react";
let catArray = []
const SingleCategory = (props) => {
  const showArticleCategoryWise = () => {
    
      if(catArray.includes(props.category.name)){
        catArray.splice(catArray.indexOf(props.category.name),1)
        console.log("in if");
      }
      else{
        catArray.push(props.category.name)
        console.log(catArray,"ot catArray");
        console.log("in else");
      }
      if(catArray.length===0){
        props.setFilteredData(props.data)
  
      }else{
      
        console.log(catArray,"catArray");
        const filteredData =[]
        props.data.map((article) => {
          article.node.categories.map((category) => {
            if(catArray.includes(category.name)){
             if(!filteredData.includes(article)){
               filteredData.push(article)
             }
            }
          })
        }
        );
        props.setFilteredData(filteredData);
      }
  
    
   }

  return (
    <div className="flex flex-row gap-2 ">
      {/* <img
        className="rounded-full"
        src={props.category.icon.url}
        alt="rel_image"
        width={30}
        height={30}
      /> */}

     

      {/* <Link href={`/categories/${props.category.slug}`}> */}

      {  !window.location.pathname.includes("articles") && <button onClick={showArticleCategoryWise} 
         className="text-lg cursor-pointer  bg-slate-400 hover:bg-slate-500 p-2 py-1 rounded-lg font-semibold "
         >
          {props.category.name}
          {/* if this article is present in category array then showing cross button to make option available to remove it */}
            {
              catArray.includes(props.category.name) && 
              <span className="text-red-500 ml-2 cursor-pointer">X</span>
            }

        </button>}
        {
          // check url if article is present then diable all the buttons


          window.location.pathname.includes("articles") &&
          <button disabled = {true} title="disabled button"
         className="text-lg bg-slate-400 hover:bg-slate-500 p-2 py-1 rounded-lg font-semibold "
         >
          {props.category.name}
          {/* if this article is present in category array then showing cross button to make option available to remove it */}
            {
              catArray.includes(props.category.name) && 
              <span className="text-red-500 ml-2 cursor-pointer">X</span>
            }

        </button>
        }
      {/* </Link> */}

     
    </div>
  );
};

export default SingleCategory;
