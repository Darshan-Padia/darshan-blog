import React from "react";
import Link from "next/link";
import moment from "moment";
export const ArticleDetail = ({ post }) => {
    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;

        if (obj) {
            if (obj.bold) {
                modifiedText = <b key={index}>{text}</b>;
            }

            if (obj.italic) {
                modifiedText = <em key={index}>{text}</em>;
            }

            if (obj.underline) {
                modifiedText = <u key={index}>{text}</u>;
            }
        }

        switch (type) {
            case "heading-three":
                return (
                    <h3 key={index} className="text-xl font-semibold mb-4">
                        {modifiedText.map((item, i) => (
                            <React.Fragment key={i}>{item}</React.Fragment>
                        ))}
                    </h3>
                );
            case "paragraph":
                return (
                    <p key={index} className="mb-8">
                        {modifiedText.map((item, i) => (
                            <React.Fragment key={i}>{item}</React.Fragment>
                        ))}
                    </p>
                );
            case "heading-four":
                return (
                    <h4 key={index} className="text-md font-semibold mb-4">
                        {modifiedText.map((item, i) => (
                            <React.Fragment key={i}>{item}</React.Fragment>
                        ))}
                    </h4>
                );
            case "image":
                return (
                    <img
                        key={index}
                        alt={obj.title}
                        height={obj.height}
                        width={obj.width}
                        src={obj.src}
                    />
                );
            default:
                return modifiedText;
        }
    };

    return (
        <div className="flex flex-col gap-1 ">
            <div className=" shadow-lg dark:bg-slate-900  bg-slate-100 rounded-lg lg:p-8 px-2 py-2 mb-2">
                {console.log(post)}
                <div className="flex gap-1 items-center mt-1 mb-1 ml-4">
                    <img
                        src={post.author.photo.url}
                        alt="Picture of the author"
                        className="rounded-full w-10 h-10 "
                    />
                    <div className="flex flex-col gap-0">
                        <div className="  text-xl font-sans ">
                            {post.author.name}
                        </div>
                        <div className="text-sm text-gray-400 m-auto">
                            {moment(post.date).format("MMM Do YY")}
                        </div>
                    </div>
                </div>

                <div className="relative overflow-hidden shoadow-md mb-6">
                    <img
                        src={post.featuredImage.url}
                        alt={post.titile}
                        className="object-top h-full w-full rounded t-lg"
                    />
                </div>
                <div className="px-4 lg:px-0">
                    <div className="flex items-center w-full justify-center">
                        <div className="flex gap-2">
                            <div className="flex flex-col gap-0"></div>
                        </div>
                    </div>
                </div>
                {/* <div className="text-lg"> */}
                    {/* title of article  */}
                    <div className=" text-center hover:scale-101 transition-all text-3xl font-semibold tracking-wider overflow-x-hidden  ">
                        {post.titile}
                    </div>
                {/* </div> */}
            </div>

            <div>
                {/* actual content */}
                <div className="">
                    {post.content.raw.children.map((typeObj, index) => {
                        const children = typeObj.children.map(
                            (item, itemindex) =>
                                getContentFragment(itemindex, item.text, item)
                        );

                        return getContentFragment(
                            index,
                            children,
                            typeObj,
                            typeObj.type
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
