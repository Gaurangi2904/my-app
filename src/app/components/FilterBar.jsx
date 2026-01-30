"use client";

export default function FilterBar({ category, setCategory }) {
  const categories = ["All", "Kids", "Men", "Girls"];

  return (
    <div className="flex gap-4 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          className={`px-4 py-2 rounded-full border ${
            category === cat
              ? "bg-black text-white"
              : "hover:bg-gray-100"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
