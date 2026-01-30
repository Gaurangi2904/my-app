import Image from "next/image";

export default function CategoryCard({ title, image }) {
  return (
    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-white group hover:shadow-2xl transition-all duration-300">

      {/* CATEGORY IMAGE */}
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-contain p-4 transition-transform duration-300 group-hover:scale-100"
        priority
      />

      {/* SOFT OVERLAY */}
      <div className="absolute inset-0 bg-black/20" />

      {/* TITLE */}
      <div className="absolute inset-0 flex items-end justify-center pb-6">
        <h3 className="text-white text-2xl font-extrabold tracking-wide drop-shadow-xl">
          {title}
        </h3>
      </div>

    </div>
  );
}
