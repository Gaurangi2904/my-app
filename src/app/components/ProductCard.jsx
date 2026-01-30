import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="group bg-gradient-to-br from-white to-pink-50 rounded-3xl shadow-md p-4 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      
      {/* IMAGE */}
      <div className="relative h-64 w-full bg-gradient-to-br from-gray-100 to-purple-50 rounded-2xl overflow-hidden flex items-center justify-center">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="mt-4 space-y-1">
        <h3 className="font-bold text-lg text-gray-800 tracking-wide">
          {product.name}
        </h3>

        <p className="text-pink-600 font-extrabold text-xl">
          ₹{product.price}
        </p>

        <p className="text-sm text-gray-500">
          Sizes: {product.size}
        </p>
      </div>

      {/* BUTTON */}
      <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 font-semibold tracking-wide shadow-md transition hover:opacity-90 hover:shadow-lg">
        View Details
      </button>
    </div>
  );
}
