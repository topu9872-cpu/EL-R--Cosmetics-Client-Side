"use client";

import React, { useEffect, useState } from "react";
import { getSearchProducts } from "../api/Server";
import AllCards from "@/app/AllCards/AllCards";
import PaginationBasic from "@/components/Pagination/Pagination";

const ShopPage = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadData = async () => {
      const res = await getSearchProducts(search, page);

      setData(res.data);
      setTotalPages(res.totalPages);
    };

    loadData();
  }, [search, page]);

  return (
    <div className="mt-20 mx-auto w-11/12">

      {/* SEARCH */}
      <div className="my-10 flex justify-end">
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1); // reset page
          }}
          type="search"
          placeholder="Search products..."
          className="p-2 border rounded w-full md:w-60"
        />
      </div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((product) => (
          <AllCards key={product._id} product={product} />
        ))}
      </div>

      {/* PAGINATION */}
      <PaginationBasic
        page={page}
        total={totalPages}
        setPage={setPage}
      />

    </div>
  );
};

export default ShopPage;