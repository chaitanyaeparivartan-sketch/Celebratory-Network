import Image from "next/image";

export default function BusinessODHero({ className = "" }) {
  return (
    <section className={`relative w-full overflow-hidden bg-white ${className}`}>
      <div className="relative w-full h-[55vh] sm:h-[68vh] md:h-[78vh] lg:h-[86vh] min-h-[380px] max-h-[960px]">
        <Image
          src="/BusinessOD/business-od-cityscape.jpg"
          alt="Business Organization Development City Skyline"
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom"
        />
      </div>
    </section>
  );
}
