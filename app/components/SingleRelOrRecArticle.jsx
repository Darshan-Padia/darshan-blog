import React from "react";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";

const SingleRelOrRecArticle = (props) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-2">
        {/* small image of article  */}

        <div key={props.article.titile}>
          {/* rounded small image for the article */}
          <img
          style={{
            minWidth: "40px",
          }}
            src={props.article.featuredImage.url}
            alt="Picture of the article"
            className="rounded-full w-10 h-10 "
          />
        </div>

        {/* author name and date  */}
        <div className="flex flex-col gap-0">
         
          {/* link */}
          <div className="text-lg">
            <Link href={`/articles/${props.article.slug}`}>
              {/* title of article  */}
              <div className="text-lg line-clamp-1 ">{props.article.titile}</div>
            </Link>
          </div>
           {/* date */}
           <div className="text-sm text-gray-400">
            {moment(props.article.date).format("MMM Do YY")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRelOrRecArticle;
