"use client";

import { useState } from "react";

export default function AdminPage() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Product added (demo only)");
  };

  return (
    <div className="max-w-xl mx-auto p-8">

      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          placeholder="Product Name"
          className="border p-2 w-full"
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />

        <input
          placeholder="Price"
          className="border p-2 w-full"
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />

        <input
          placeholder="Category"
          className="border p-2 w-full"
          onChange={(e) => setProduct({ ...product, category: e.target.value })}
        />

        <input
          placeholder="Image Path"
          className="border p-2 w-full"
          onChange={(e) => setProduct({ ...product, image: e.target.value })}
        />

        <button className="bg-black text-white px-6 py-2 rounded">
          Add Product
        </button>
      </form>
    </div>
  );
}
