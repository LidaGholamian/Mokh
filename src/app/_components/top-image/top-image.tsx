import Image from "next/image";
import { Button } from "../button";
import { SearchBar } from "../search/search";

export const TopImage: React.FC = () => {
  return (
    <div className="text-center -mt-28 flex flex-col justify-center items-center gap-7">
      <h1 className="text-3xl text-white/80 align-text-bottom ">
        دنبال یاد گرفتن چی با کی هستی؟
      </h1>
      <div className="bg-white opacity-100 h-28 w-[950px] rounded-2xl flex justify-center items-center">
        <SearchBar />
      </div>
    </div>
  );
};
