"use client";

import React from "react";
import { useState, useEffect, useRef } from "react";
import { submitComment } from "../services";
export const CommentsForm = () => {
    const [error, setError] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const commentEl = useRef();
    const nameEl = useRef();
    const emailEl = useRef();
    const storeDataEl = useRef();
    const slug = window.location.pathname.split("/")[2];
    useEffect(() => {
        window.localStorage.getItem("name") &&
            (nameEl.current.value = window.localStorage
                .getItem("name")
                .replace(/['"]+/g, ""));
        window.localStorage.getItem("name") &&
            (emailEl.current.value = window.localStorage
                .getItem("email")
                .replace(/['"]+/g, ""));
        if (nameEl.current.value && emailEl.current.value) {
            storeDataEl.current.checked = true;
        }
    }, []);

    const handleSubmit = () => {
        setError(false);

        const { value: comment } = commentEl.current;
        const { value: name } = nameEl.current;
        const { value: email } = emailEl.current;
        const { checked: storeData } = storeDataEl.current;

        if (!commentEl || !nameEl || !emailEl) {
            setError("Please fill all the fields");
            return;
        } else {
            submitComment({ name, comment, email, slug }).then((res) => {
                setShowSuccessMessage(true);
                setTimeout(() => {
                    setShowSuccessMessage(false);
                }, 3000);
            });
        }

        if (storeData) {
            window.localStorage.setItem("name", JSON.stringify(name));
            window.localStorage.setItem("email", JSON.stringify(email));
        } else {
            window.localStorage.removeItem("name");
            window.localStorage.removeItem("email");
        }
    };

    return (
        <div className=" dark:bg-slate-900  light: bg-slate-200 p-8 rounded-lg">
            <h1 className="mb-4 ml-1">
                <span className="  text-2xl  font-bold">Leave a comment</span>
            </h1>
            <textarea
                className="commentField outline-cyan-100 bg-white-300 p-6 pt-4 rounded-lg w-full "
                placeholder="Write your comment here..."
                name="comment"
                ref={commentEl}
            ></textarea>

            <div className="  flex flex-col md:flex-row md:justify-between">
                <div className=" w-full gap-1 flex flex-col md:flex-row md:justify-between">
                    <input
                        className="inputField outline-cyan-100 bg-white-300 p-4 pt-4 rounded-lg w-full md:w-1/2"
                        type="text"
                        placeholder="Name"
                        name="name"
                        ref={nameEl}
                    />
                    <input
                        className="inputField outline-cyan-100 bg-white-300 p-4 pt-4 rounded-lg w-full md:w-1/2"
                        type="email"
                        placeholder="Email"
                        name="email"
                        ref={emailEl}
                    />
                </div>
            </div>
            <div>
                <input
                    type="checkbox"
                    name="storeData"
                    ref={storeDataEl}
                    id="storeData"
                    className="mt-3 mr-2 "
                />
                <label
                    className="text-sm font-semibold text-gray-500 dark:text-gray-400"
                    htmlFor="storeData"
                >
                    Save my name, email for the
                    next time I comment.
                </label>
            </div>
            <div className="flex justify-center mt-2">
                <button
                    className="btn text-lg font-semibold bg-cyan-500 dark:bg-cyan-900 text-white-100 dark:hover:bg-cyan-800 hover:bg-cyan-600 p-4 rounded-lg w-full md:w-1/3"
                    onClick={handleSubmit}
                    // disabled={loading}
                >
                    Post Comment
                </button>

                {error && (
                    <span className="text-red-500 text-sm font-bold">
                        {error}
                    </span>
                )}
                {showSuccessMessage && (
                    <span className="text-green-500 text-sm font-bold">
                        Comment submitted successfully!
                    </span>
                )}
            </div>
        </div>
    );
};
