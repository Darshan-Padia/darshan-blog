"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getPosts, getTotalPosts } from "../services";
let catArray = [];

const SingleCategory = (props) => {
  // const [catTotalPosts, setCatTotalPosts] = useState(0);
    // const showArticleCategoryWise = () => {

    //     if(catArray.includes(props.category.name)){
    //       catArray.splice(catArray.indexOf(props.category.name),1)
    //       ////console.log("in if");
    //     }
    //     else{
    //       catArray.push(props.category.name)
    //       ////console.log(catArray,"ot catArray");
    //       ////console.log("in else");
    //     }
    //     if(catArray.length===0){
    //       props.setFilteredData(props.data)

    //     }else{

    //       ////console.log(catArray,"catArray");
    //       const filteredData =[]
    //       props.data.map((article) => {
    //         article.node.categories.map((category) => {
    //           if(catArray.includes(category.name)){
    //            if(!filteredData.includes(article)){
    //              filteredData.push(article)
    //            }
    //           }
    //         })
    //       }
    //       );
    //       props.setFilteredData(filteredData);
    //     }

    //  }

    const showArticleCategoryWise = () => {
        if (catArray.includes(props.category.slug)) {
            catArray.splice(catArray.indexOf(props.category.slug), 1);
            props.setCategoryArray(catArray);
            ////console.log("in if");
        } else {
            catArray.push(props.category.slug);
            ////console.log(catArray, "ot catArray");
            ////console.log("in else");
            props.setCategoryArray(catArray);
        }

        ////console.log(catArray, "catArray");
        
        // let catTotalPostss ={catTotPos :0} ;
        
        var ttl = 0;
        getTotalPosts(catArray).then((data) => {
          ////console.log(data, "data -------------------____");
            // catTotalPostss.catTotPos = data;
            ttl = data;
            getPosts(props.articlesPerPage, 0, catArray).then((data) => {
                ////console.log(data, "data________________________________");
                ////console.log(catArray, "catArray________________________________");
                props.setCatNumberOfPages (Math.ceil(
                  ttl / props.articlesPerPage)
                );
                  props.setFilteredData(data);
              }
              );
          });
          ////console.log(ttl,"catTotalPostss.catTotPos +++++++++++++++++++++++++++++++");
        // const filteredData = [];
          props.setCatOffset((props.catCurrentPage - 1) * props.articlesPerPage);
          props.setCatCurrentPage(1);
          const offs = (props.catCurrentpage - 1) * props.articlesPerPage;
         
          ////console.log(offs,'oooooooooooooofffffffffffffffffssssssssssssss');
          

    };

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

            {!window.location.pathname.includes("articles") && (
                <button
                    onClick={showArticleCategoryWise}
                    className={`
                    ${
                        catArray.includes(props.category.slug) ? 'bg-red-400 hover:bg-red-300' : 'bg-slate-400 hover:bg-slate-500'
                    }
                    text-lg cursor-pointer  p-2 py-1 rounded-lg font-semibold `}
                >
                    {props.category.name}
                    {/* if this article is present in category array then showing cross button to make option available to remove it */}
                    {/* if this article is present in category array then changing background color to make option available to remove it */}
                    

                    {/* {catArray.includes(props.category.slug) && (
                        <span className="text-red-500 ml-2 cursor-pointer">
                            X
                        </span>
                    )} */}
                </button>
            )}
            {
                // check url if article is present then diable all the buttons

                window.location.pathname.includes("articles") && (
                    <button
                        disabled={true}
                        title="disabled button"
                        className="text-lg bg-slate-400 hover:bg-slate-500 p-2 py-1 rounded-lg font-semibold "
                    >
                        {props.category.name}
                        {/* if this article is present in category array then showing cross button to make option available to remove it */}
                        {catArray.includes(props.category.name) && (
                            <span className="text-red-500 ml-2 cursor-pointer">
                                X
                            </span>
                        )}
                    </button>
                )
            }
            {/* </Link> */}
        </div>
    );
};

export default SingleCategory;
