"use client";
import React, { use } from "react";

import SingleArticle from "./SingleArticle";
import { getPosts, getRecentPosts } from "../services";
import { useState, useEffect } from "react";

// getting data from api adnstoring it to show it in the articles section by fetch

const Articles = ({
    data,
    setData,
    filteredData,
    setFilteredData,
    articlesPerPage,
    categoryArray,
    setCategoryArray,
    catCurrentpage,
    setCatCurrentPage,
    catNumberOfPages,
    setCatNumberOfPages,
    catOffset,
    setCatOffset,
    catArray
}) => {

    
    useEffect(() => {
        getPosts(articlesPerPage, (catCurrentpage - 1) * articlesPerPage, []).then((data) => {
            setData(data);
            setFilteredData(data);
        });
    }, []);

    // useEffect(() => {
    //     offset = (currentPage - 1) * articlesPerPage;
    // }, [currentPage]);

    useEffect(() => {
        //console.log(data, "useeffect  data");
    }, [data]);

    // showing page numers at bottom +-3 from current page
    const pageNumbers = [];
    // if(catArray.length==0)
    for (let i = catCurrentpage - 1; i <= catCurrentpage + 1; i++) {
        if (i > 0 && i <= catNumberOfPages) {
            pageNumbers.push(i);
        }
    }
    // else{
    //     //console.log(catCurrentpage,"eeelseeeeeeeeee");
    //     //console.log(catNumberOfPages,"catNumberOfPages");
    //     for (let i = catCurrentpage - 1; i <= catCurrentpage + 1; i++) {
    //         if (i > 0 && i <= catNumberOfPages) {
    //             pageNumbers.push(i);
    //         }
    //     }
    // }
    return (
        <div className="sm:w-full mt-10">
            <h1 className="text-3xl font-sans light:text-gray-900">Articles</h1>
            {/* {//console.log(data)} */}
            {/* div that dynamicaly wil l show the added articles */}
            <div className="mt-5">
                {/* returning 'No articles Found' if articles are not found */}

                {filteredData.length === 0 && (
                    <div className="text-2xl font-sans light:text-gray-900 flex h-full w-full justify-center items-center">
                        Fetching articles...
                    </div>
                )}

                {filteredData.map((article) => {
                    //console.log(article.node);
                    return (
                        <div>
                            <SingleArticle article={article.node} />
                        </div>
                    );
                })}
            </div>

            {/* showing page numbers at bottom */}
           { filteredData.length>0 && <div className="flex justify-center items-center mt-10 mb-10">
                <div className="flex gap-2">
                    {pageNumbers.map((number) => {
                        //console.log(number, "numberrrrrrrrrrrrrrrrrrrr");
                        return (
                            <div
                                className={`${
                                    number === catCurrentpage
                                        ? "bg-blue-500 text-white"
                                        : "bg-white text-blue-500"
                                } w-10 h-10 flex justify-center items-center rounded-full cursor-pointer`}
                                onClick={() => {
                                    setCatCurrentPage(number);
                                    // currentPageNormal = number;
                                    // setCatCurrentPage(number);
                                    getPosts(articlesPerPage, 
                                        (number - 1) * articlesPerPage,[]
                                        ).then(
                                        (data) => {
                                            setData(data);
                                            setFilteredData(data);
                                        }
                                    );
                                }}
                            >
                                {number}
                            </div>
                        );
                    })}
                </div>
            </div>}
            
            {/* { catArray.length>0 && filteredData.length>0 && <div className="flex justify-center items-center mt-10 mb-10">
                <div className="flex gap-2">
                    {pageNumbers.map((number) => {
                        //console.log(number, "numberrrrrrrrrrrrrrrrrrrr");
                        return (
                            <div
                                className={`${
                                    number === catCurrentpage
                                        ? "bg-blue-500 text-white"
                                        : "bg-white text-blue-500"
                                } w-10 h-10 flex justify-center items-center rounded-full cursor-pointer`}
                                onClick={() => {
                                    setCatCurrentPage(number);
                                    currentPageNormal = number;
                                    setCatCurrentPage(number);
                                    getPosts(articlesPerPage, 
                                        (number - 1) * articlesPerPage,catArray
                                        ).then(
                                        (data) => {
                                            //console.log(data,"mydata");
                                            setData(data);
                                            setFilteredData(data);
                                        }
                                    );
                                }}
                            >
                                {number}
                            </div>
                        );
                    })}
                    {//console.log(filteredData, "filteredData //////////////////////")}
                </div>
            </div>} */}
            
        </div>

    );
};

export default Articles;
