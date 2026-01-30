import Image from "next/image";

export default function ShopPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">

      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-6 text-center">
        Sharwari Collection
      </h1>

      <p className="text-center text-gray-600 mb-12">
        Western & Traditional Clothing Store
      </p>

      {/* IMAGES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/shop-front.jpg"
            alt="Shop Front"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/shop-inside.jpg"
            alt="Shop Inside"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* INFO */}
      <div className="bg-gray-50 p-8 rounded-2xl shadow-md max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Shop Information</h2>

        <p className="mb-2">
          <strong>Owner:</strong> Aniket Kapare
        </p>

        <p className="mb-2">
          <strong>Address:</strong> Jejuri, Maharashtra
        </p>

        <p className="mb-6">
          <strong>Phone:</strong> 9XXXXXXXXX
        </p>

        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Contact on WhatsApp
        </a>
      </div>

    </main>
  );
}
