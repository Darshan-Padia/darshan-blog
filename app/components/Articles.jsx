"use client";
import React, { use } from "react";

import SingleArticle from "./SingleArticle";
import { getPosts, getRecentPosts } from "../services";
import { useState, useEffect } from "react";
import { get } from "http";

// getting data from api adnstoring it to show it in the articles section by fetch

const Articles = ({data,setData,filteredData,setFilteredData}) => {
 

    useEffect(() => {
        getPosts().then((data) => {
            setData(data);
            setFilteredData(data);
        });
    }, []);

    useEffect(() => {
        console.log(data,'useeffect  data');
    }, [data]);

    return (
        <div className="mt-10">
            <h1 className="text-3xl font-sans light:text-gray-900">Articles</h1>
            {/* {console.log(data)} */}
            {/* div that dynamicaly wil l show the added articles */}
            <div className="mt-5">

                {/* returning 'No articles Found' if articles are not found */}

                {filteredData.length === 0 && (
                    <div className="text-2xl font-sans light:text-gray-900 flex h-full w-full justify-center items-center">
                        No articles found
                    </div>
                )}


                {filteredData.map((article) => {
                    console.log(article.node);
                    return (
                        <div>
                            <SingleArticle article={article.node} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Articles;
