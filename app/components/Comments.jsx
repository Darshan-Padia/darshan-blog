"use client";
import React from "react";
import { useState, useEffect } from "react";
import moment from "moment";
import parse from "html-react-parser";
import { getComments } from "../services";
export const Comments = ({ slug }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        // const slug = window.location.pathname.split('/')[2]
        console.log(slug);
        getComments(slug)
            .then((res) => setComments(res))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className=" bg-slate-200 w-full
         dark:bg-slate-900 shadow-lg rounded-lg p-8 pb-12 mb-8">
            <h3 className="text-xl font-semibold mb-8 border-b pb-4">
                {comments.length}
                {' '}
                Comments
            </h3>
            {
                comments.map((comment) => (
                  <div
                    key={comment.createdAt}
                    className="bordere-b border-gray-100 mb-4 pb-4"
                  >
                    <p className="mb-4" >
                      <span className="font-semibold" >
                        {comment.name}
                      </span>
                      {' '}
                      on
                      {' '}
                      {moment(comment.createdAt).format("MMMM Do YYYY")}
                    </p>
                    <p className="whitespace-pre-line text-gray-600 w-full text-lg" >
                      {parse(comment.comment)}
                    </p>

                  </div>
                ))
            }

        </div>
    );
};
