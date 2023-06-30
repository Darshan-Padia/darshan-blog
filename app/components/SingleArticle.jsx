import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import styles from "./any.module.css"
const SingleArticle = (props) => {
    return (
        <div className=" dark:bg-gray-900 bg-slate-100 shadow-md rounded-md p-2 m-2">
            <hr className="border-1" />

            <div className="main flex gap-3 items-center">
                <img
                    src={props.article.author.photo.url}
                    alt="author"
                    // width={50}
                    // height={50}
                    className="rounded-full w-10 h-10 "
                />

                <div className="flex flex-col gap-0">
                    <div className="font-semibold text-lg">
                        {props.article.author.name}
                    </div>
                    <div className="text-sm text-gray-500">
                        {moment(props.article.date).format("MMM Do YY")}
                    </div>
                </div>
            </div>

            <div className="  w-full justify-between flex-col-reverse sm:flex-row md:flex-row lg:flex-row  flex gap-5 mt-2">
                <div className="flex flex-col gap-3 justify-center">
                    <Link href={`/articles/${props.article.slug}`}>
                        {/* content heading of 1 line if overflow then ellipses. */}
                        <div
                            style={{
                                maxWidth: "774px",
                                width: "100%",
                            }}
                            className="font-semibold text-3xl line-clamp-2 mb-4"
                        >
                            {props.article.titile}
                        </div>
                    </Link>
                    <div className="smallIntro line-clamp-3 light:text-gray-700 text-sm">
                        {props.article.excerpt}
                    </div>
                    {/* displaying categories as tags */}
                    <div className="flex flex-row flex-wrap gap-2 mt-2  mb-2">
                        {props.article.categories.map((category) => {
                            return (
                                <div className="text-sm text-gray-600 bg-gray-200 dark:bg-neutral-400 dark:text-zinc-950 rounded-md px-2 py-1">
                                    {category.name}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div
                   
                    // className="xl:w-80 imageDiv  flex items-center relevantImageToArticle  bg-contain "
                    className = {`${styles.imageDiv} xl:w-80 flex items-center relevantImageToArticle  bg-contain`}
                >
                    <img
                        src={props.article.featuredImage.url}
                        alt="article_photo"
                        // width='10'
                        className="rounded-md  lg:h-4/5 lg:w-96 sm:h-4/5 sm:w-full hover:opacity-80 transition duration-500 ease-in-out"
                        // style={{margin:'none',objectFit:'contain',borderRadius:'10px'}}
                        style={{margin:'none',objectFit:'cover',borderRadius:'10px'}}
                
                    />
                </div>
            </div>
        </div>
    );
};

export default SingleArticle;
