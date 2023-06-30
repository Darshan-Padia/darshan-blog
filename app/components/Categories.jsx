"use client";
import SingleCategory from "./SingleCategory";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";
const Categories = ({
    data,
    setData,
    filteredData,
    setFilteredData,
    currentPage,
    setCurrentPage,
    articlesPerPage,
    numberOfPages,
    offset,
    categoryArray,
    setCategoryArray,
    catCurrentpage,
    setCatCurrentPage,
    catNumberOfPages,
    setCatNumberOfPages,
    catOffset,
    setCatOffset,
}) => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getCategories().then((dataa) => {
            setCategories(dataa);
        });
    }, []);

    console.log("cate", categories);

    return (
        <div>
            <div className="text-2xl font-semibold mb-2 font-serif">
                Categories
            </div>
            <div className="w-full flex flex-wrap gap-3 flex-row max-h-52	overflow-auto">
                {
                    // {console.log(categories)}
                    categories.map((category, ind) => {
                        console.log(category, "cate", ind);
                        return (
                            <SingleCategory
                                data={data}
                                setData={setData}
                                category={category}
                                filteredData={filteredData}
                                setFilteredData={setFilteredData}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                articlesPerPage={articlesPerPage}
                                numberOfPages={numberOfPages}
                                offset={offset}
                                categoryArray={categoryArray}
                                setCategoryArray={setCategoryArray}
                                catCurrentpage={catCurrentpage}
                                setCatCurrentPage={setCatCurrentPage}
                                catNumberOfPages={catNumberOfPages}
                                setCatNumberOfPages={setCatNumberOfPages}
                                catOffset={catOffset}
                                setCatOffset={setCatOffset}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Categories;
