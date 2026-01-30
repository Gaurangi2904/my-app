"use client";

import { useState } from "react";
import products from "@/app/data/products";
import ProductCard from "@/app/components/ProductCard";
import CategoryCard from "@/app/components/CategoryCard";
import SearchBar from "@/app/components/SearchBar";

export default function Home() {
  const [search, setSearch] = useState("");
const [category, setCategory] = useState("All");

const filteredProducts = products.filter((product) => {
  const matchesSearch = product.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesCategory =
    category === "All" || product.category === category;

  return matchesSearch && matchesCategory;
});


  return (
    <main className="max-w-7xl mx-auto px-6 py-12">

      {/* 🌸 HERO SECTION */}
      <section className="mb-14">
        <h1
          className="text-4xl md:text-5xl font-extrabold 
          bg-gradient-to-r from-pink-600 via-purple-500 to-indigo-500
          text-transparent bg-clip-text"
        >
          Sharwari Collection ✨
        </h1>

        <p className="text-gray-600 text-lg mt-3 max-w-2xl">
          Explore stylish western & traditional clothes 👗🛍️  
          Designed with love & elegance 💖
        </p>
      </section>

      {/* 🔍 SEARCH BAR */}
      <section className="mb-14">
        <SearchBar search={search} setSearch={setSearch} />
      </section>

      {/* 🧸 CATEGORY SECTION */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8">
          Shop by Category 🛒
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <CategoryCard title="Kids" image="/kids2.jpg" />
          <CategoryCard title="Men" image="/men2.jpg" />
          <CategoryCard title="Girls" image="/girls2.jpg" />
        </div>
      </section>
      {/* CATEGORY FILTER BUTTONS */}
<div className="flex gap-4 mb-8 flex-wrap">
  {["All", "Kids", "Men", "Girls"].map((cat) => (
    <button
      key={cat}
      onClick={() => setCategory(cat)}
      className={`px-5 py-2 rounded-full font-medium transition
        ${
          category === cat
            ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
    >
      {cat}
    </button>
  ))}
</div>


      {/* 🔥 PRODUCTS SECTION */}
      <section>
        <h2 className="text-2xl font-bold mb-8">
          Trending Styles 🔥
        </h2>

        {filteredProducts.length === 0 ? (
          <p className="text-gray-500">
            😔 No products found. Try a different search.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

    </main>
  );
}
