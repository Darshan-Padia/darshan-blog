"use client";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getSimilarPosts } from "../services";
import RelatedPostCard from "./RelatedPostCard";
import Link from "next/link";
export const RelatedPostsCarousel = ({ categories, slug }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getSimilarPosts(categories, slug).then((data) => {
            setData(data);
        });
    }, []);
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 768, min: 640 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 640, min: 0 },
            items: 1,
        },
    };

    const customLeftArrow = (
        <div className="absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6  text-white w-full"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
            </svg>
        </div>
    );

    const customRightArrow = (
        <div className="absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6  text-white w-full"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
            </svg>
        </div>
    );

    return (
        <div className="w-1/2 mb-8">
             {data.length>0 && <div className="flex justify-center items-center mb-4">
                <h3 className="text-xl font-semibold">Related Posts</h3>
            </div>}

            <Carousel
                infinite
                customLeftArrow={customLeftArrow}
                customRightArrow={customRightArrow}
                responsive={responsive}
                itemClass="px-4"
            >
                {data.map((post, index) => (
                    <RelatedPostCard key={index} post={post} />
                ))}
            </Carousel>
        </div>
    );
};

export default RelatedPostsCarousel;
