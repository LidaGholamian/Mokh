import { SearchBar } from "../search";

export const TopImage: React.FC = () => {
  return (
    <div className="text-center -mt-28 flex flex-col justify-center items-center gap-7 md:flex md:flex-col">
      <h1 className="text-3xl text-white/80 align-text-bottom ">
        دنبال یاد گرفتن چی با کی هستی؟
      </h1>
      <div className="bg-white z-10 h-28 w-[950px] rounded-2xl flex justify-center items-center ">
        <SearchBar />
      </div>
    </div>
  );
};
