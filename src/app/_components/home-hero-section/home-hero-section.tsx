import Image from "next/image";

export const HomeHeroSection: React.FC = () => {
  return (
    <>
      <div className="flex items-center bg-secondary container">
        <Image
          src="/image/surface.png"
          width={1920}
          height={902}
          alt="surface"
          className="opacity-20 container"
        />
      </div>
    </>
  );
};
