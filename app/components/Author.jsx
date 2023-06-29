import React from "react";

export const Author = ({ author }) => {
    return (
        <div className="relative"  >
          <div className=" absolute z-10 w-full flex justify-center align-middle items-center" >
            {/* <div className="absolute "> */}
                {/* image of author */}
                <img
                    src={author.photo.url}
                    alt={author.name}
                    className=" h-24 w-24 rounded-full"
                />
            {/* </div> */}

          </div>
            <div className="bg-gray-200 bg-opacity-20 mt-16 rounded-md flex flex-col gap-2 align-middle items-center justify-center ">
                <div>
                    <h1 className=" text-blue-600 authorName mt-12 text-center text-2xl font-semibold tracking-wide">
                        {author.name}
                    </h1>

                    <div className="authorDescription text-lg text-gray-600 text-center ">
                        {author.bio}
                    </div>
                </div>
            </div>
        </div>
    );
};
