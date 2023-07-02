"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getPosts, getTotalPosts } from "../services";
        // var ttl = 0;
        // let props.catArray = [];

const SingleCategory = (props) => {
    useEffect(() => {
        getPosts(props.articlesPerPage, 0, props.catArray).then((data) => {
            //console.log(data, "data________________________________");
            //console.log(props.catArray, "props.catArray________________________________");
            getTotalPosts(props.catArray).then((res) => {
                props.setCatNumberOfPages (Math.ceil(
                   res / props.articlesPerPage)
                  );
              });
            
              props.setFilteredData(data);
          }
          );

    }, [props.categoryArray]);
  // const [catTotalPosts, setCatTotalPosts] = useState(0);
    // const showArticleCategoryWise = () => {

    //     if(props.catArray.includes(props.category.name)){
    //       props.catArray.splice(props.catArray.indexOf(props.category.name),1)
    //       //console.log("in if");
    //     }
    //     else{
    //       props.catArray.push(props.category.name)
    //       //console.log(props.catArray,"ot props.catArray");
    //       //console.log("in else");
    //     }
    //     if(props.catArray.length===0){
    //       props.setFilteredData(props.data)

    //     }else{

    //       //console.log(props.catArray,"props.catArray");
    //       const filteredData =[]
    //       props.data.map((article) => {
    //         article.node.categories.map((category) => {
    //           if(props.catArray.includes(category.name)){
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
    //console.log(props.catArray        );
    const showArticleCategoryWise = () => {
        if (props.catArray.includes(props.category.slug)) {
            props.catArray.splice(props.catArray.indexOf(props.category.slug), 1);
            props.setCategoryArray(props.catArray);
            //console.log("in if");
        } else {
            props.catArray.push(props.category.slug);
            //console.log(props.catArray, "ot props.catArray");
            //console.log("in else");
            props.setCategoryArray(props.catArray);
        }

        //console.log(props.catArray, "props.catArray");
        
        // let catTotalPostss ={catTotPos :0} ;
        
        getTotalPosts(props.catArray).then((data) => {
          //console.log(data, "data -------------------____");
            // catTotalPostss.catTotPos = data;
            let ttl ;
            ttl = data;
            props.setTotalPosts(data)
            // //console.log(props.catArray, "props.catArray________________________________");
            getPosts(props.articlesPerPage, 0, props.catArray).then((data) => {
                //console.log(data, "data________________________________");
                //console.log(props.catArray, "props.catArray________________________________");
                props.setCatNumberOfPages (Math.ceil(
                  ttl / props.articlesPerPage)
                );
                  props.setFilteredData(data);
              }
              );
          });
          //console.log(props.totalPosts,"catTotalPostss.catTotPos +++++++++++++++++++++++++++++++");
        // const filteredData = [];
          props.setCatOffset((props.catCurrentPage - 1) * props.articlesPerPage);
          props.setCatCurrentPage(1);
          const offs = (props.catCurrentpage - 1) * props.articlesPerPage;
         
          //console.log(offs,'oooooooooooooofffffffffffffffffssssssssssssss');
          

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
                        props.catArray.includes(props.category.slug) ? 'bg-red-400 hover:bg-red-300' : 'bg-slate-400 hover:bg-slate-500'
                    }
                    text-lg cursor-pointer  p-2 py-1 rounded-lg font-semibold `}
                >
                    {props.category.name}
                    {/* if this article is present in category array then showing cross button to make option available to remove it */}
                    {/* if this article is present in category array then changing background color to make option available to remove it */}
                    

                    {/* {props.catArray.includes(props.category.slug) && (
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
                        {props.catArray.includes(props.category.name) && (
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
