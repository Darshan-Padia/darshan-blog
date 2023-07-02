"use client"

import SingleRelOrRecArticle from "./SingleRelOrRecArticle";
import { useState, useEffect } from "react";
import Articles from "./Articles";
import { getRecentPosts, getSimilarPosts } from "../services";

const RelatedOrRecents = ({categories , slug}) => {
  //console.log(categories, slug);
 const [data, setData] = useState([]);

 useEffect(() => {
  if (slug) {
    getSimilarPosts(categories, slug).then((data) => {
      setData(data);
    });
  } else {
    getRecentPosts().then((data) => {
      setData(data);
    });
  }
 },[slug])
//  //console.log(data);
  return (
    <div>
      <div className="text-2xl font-semibold mb-2 font-sans ">
        {slug ? "Related Articles" : "Recent Articles"}
      </div>
      <div className="overflow-auto max-h-96 h-full flex flex-col gap-2">
       {
          data.map((recentArticle) => {
            return (
              <div>
                <SingleRelOrRecArticle article={recentArticle} />
              </div>
            );
          })
       }
        

      </div>
    </div>
  );
};

export default RelatedOrRecents;
