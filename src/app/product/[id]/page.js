"use client";

import { useState } from "react";
import products from "@/app/data/products";
import Image from "next/image";

export default function ProductDetail({ params }) {
  const product = products.find(
    (item) => item.id === params.id
  );

  const [height, setHeight] = useState("");
  const [size, setSize] = useState("");
  const [error, setError] = useState("");

  const recommendSize = () => {
    if (height === "4-5") return "S";
    if (height === "5-5.5") return "M";
    if (height === "5.5-6") return "L";
    return "";
  };

  const handleContact = () => {
    if (!size || !height) {
      setError("Please select size and height");
      return;
    }

    setError("");

    const message = `Hello, I am interested in:
Product: ${product.name}
Category: ${product.category}
Size: ${size}
Height: ${height} ft`;

    const whatsappUrl = `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-8 max-w-3xl mx-auto">

      {/* IMAGE */}
      <div className="relative h-96 rounded-xl overflow-hidden mb-6 shadow-lg">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-gray-500 mb-4">{product.category}</p>

      {/* SIZE */}
      <div className="mb-6">
        <p className="font-semibold mb-2">Select Size</p>
        <div className="flex gap-3">
          {["S", "M", "L", "XL"].map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`border px-4 py-1 rounded transition ${
                size === s
                  ? "bg-black text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* HEIGHT */}
      <div className="mb-6">
        <p className="font-semibold mb-2">Select Height</p>
        <select
          className="border p-2 rounded w-full"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        >
          <option value="">Choose height</option>
          <option value="4-5">4 – 5 ft</option>
          <option value="5-5.5">5 – 5.5 ft</option>
          <option value="5.5-6">5.5 – 6 ft</option>
        </select>
      </div>

      {/* RECOMMENDATION */}
      {height && (
        <p className="mb-3 text-green-600 font-semibold">
          Recommended Size: {recommendSize()}
        </p>
      )}

      {/* SELECTED INFO */}
      {(size || height) && (
        <p className="mb-4 text-gray-700">
          Selected: {size && `Size ${size}`} {height && `| Height ${height} ft`}
        </p>
      )}

      {/* ERROR */}
      {error && (
        <p className="text-red-500 mb-4">{error}</p>
      )}

      {/* CONTACT BUTTON */}
      <button
        onClick={handleContact}
        className="bg-green-600 text-white px-6 py-3 rounded-lg w-full font-semibold hover:bg-green-700 transition"
      >
        Contact on WhatsApp
      </button>

    </div>
  );
}
