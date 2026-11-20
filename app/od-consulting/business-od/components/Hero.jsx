import Image from "next/image";

export default function BusinessODHero({ className = "" }) {
  return (
    <section className={`relative w-full overflow-hidden bg-white ${className}`}>
      <div className="relative w-full h-[45vh] sm:h-[55vh] md:h-[68vh] lg:h-[76vh] min-h-[340px] max-h-[880px]">
        <Image
          src="/BusinessOD/hero-building.jpg"
          alt="Business Organization Development"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-bottom"
        />
      </div>
    </section>
  );
}
