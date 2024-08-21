import Image from "next/image";

export const HomeHeroSection: React.FC = () => {
  return (
    <>
      <div className="flex items-center bg-secondary ">
        <Image
          src="/image/surface.png"
          width={1920}
          height={902}
          alt="surface"
          className="opacity-20 "
        />
        {/* <div className=" absolute text-center bottom-5 left-20 right-20 flex flex-col gap-5">
          <h1 className="text-3xl text-white/80 align-text-bottom ">
            دنبال یاد گرفتن چی با کی هستی؟
          </h1>
          <div className="bg-white rounded-md h-28">
            <h1 className="  text-xl"> باکس جستجو</h1>
          </div>
        </div> */}
      </div>
    </>
  );
};
