import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "../button";

export const SearchBar: React.FC = () => {
  return (
    <form className="w-[1168px] h-[56px] relative flex justify-center items-center mr-7 ml-7">
      <div className="relative flex justify-center items-center border-none w-full bg-neutral rounded-2xl ml-4">
        <div className="flex justify-center items-center w-1/2 border-r-neutral_content border-x-neutral_content">
          <img
            src="/image/search.png"
            width={20}
            height={20}
            alt="serach icon"
            className="m-2"
          />
          <label htmlFor="teacher" className="text-neutral-shadow text-sm">
            نام درس، مدرس و ...
          </label>
          <input
            id="teacher"
            type="search"
            className="p-4 bg-neutral border-none outline-none w-40 "
          />
        </div>
        <div>
          <img src="/image/vector2.png" className="mr-2" />
        </div>
        <div className="flex items-center w-1/2">
          <img
            src="/image/vector.png"
            width={20}
            height={20}
            alt="serach icon"
            className="m-2"
          />
          <label htmlFor="teacher" className="text-neutral-shadow text-sm">
            شهر
          </label>
          <input
            id="teacher"
            type="search"
            className="p-4 bg-neutral border-none outline-none w-40"
          />
        </div>
      </div>
      <Button
        type="submit"
        variant="primary"
        size="large"
        className=" bg-primary text-white rounded-2xl w-[192px] h-[56px]"
      >
        جستجو
      </Button>
    </form>
  );
};
