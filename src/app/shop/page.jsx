"use client";
import React, { useEffect, useState } from "react";
import { getSearchProducts } from "../api/Server";
import AllCards from "@/app/AllCards/AllCards";
import PaginationBasic from "@/components/Pagination/Pagination";

const ShopPage = () => {
  const [search, setSearch] = useState();
  const [data, setData] = useState([]);
  useEffect(() => {
    const handleData = async () => {
      const searchData = await getSearchProducts();
      setData(searchData);
    };
    handleData();
  }, []);

  return (
    <div className="mt-20 mx-auto w-11/12">
      <div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="Search"
          className="p-2 flex justify-end"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((product) => (
          <AllCards key={product._id} product={product} />
        ))}
      </div>
   
 <PaginationBasic />
   
     
    </div>
  );
};

export default ShopPage;
