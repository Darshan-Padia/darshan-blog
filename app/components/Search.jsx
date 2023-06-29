'use client'
import React from "react";
import { useState , useEffect } from "react";
const Search = ({data, setData, filteredData, setFilteredData}) => {

    const [searchQuery, setSearchQuery] = useState("")
    const [searchClicked, setSearchClicked] = useState(false)
    const handleSearch = (e) => {
        e.preventDefault();
        setSearchClicked(true);
        console.log(searchQuery);
        let newFilteredData = data.filter((article) => {
            return (
                article.node.titile.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.node.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
            );
        });
        console.log(newFilteredData,'newFilteredData');
        setFilteredData(newFilteredData);
    }

    return (
        <div className="mt-5">
            {/* creating a search field in a form with a button */}
            <form>
                <div className="  flex justify-center flex-col sm:flex-row gap-5">
                    <input
                        className=" m-auto w-4/5 p-1 outline-none border-2 border-gray-300 lg:pr-96 md:pr-36 sm:pr-36 rounded-md sm:w-4/5 md:w-full lg:w-full"
                        type="text"
                        placeholder="Search Globally"
                        value={searchQuery}
                        onChange = {
                            (e)=>{setSearchQuery(e.target.value);}
                        }
                    />

                    <button
                        onClick={handleSearch}
                        type="submit"
                        className=" m-auto w-1/4 text-center pr-5 pl-5 pt-2 pb-2 rounded-full text-orange-600 font-bold
                      border-red-300 border-2 hover:bg-slate-100 "
                    >
                        Search
                    </button>
                </div>
                {/* if search is clicked showing remove search filter  */}
                {searchClicked && (
                    <div className="flex justify-center">
                        <button 
                        onClick = {
                            (e) => {
                                e.preventDefault();
                                setFilteredData(data);
                                setSearchClicked(false);
                            }
                        }
                        className="text-center pr-5 pl-5 pt-2 pb-2 rounded-full text-orange-600 font-bold
                        border-red-300 border-2 hover:bg-slate-100 mt-2"
                        >
                            Remove Search Filter
                        </button>
                    </div>
                )}


            </form>
        </div>
    );
};

export default Search;
