import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "../button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export const SearchBar: React.FC = () => {
  return (
    <form className="w-[1168px] h-[60px] relative flex justify-center items-center mr-7 ml-7">
      <div className="relative flex justify-center items-center border-none w-full bg-neutral rounded-2xl ml-4">
        <div className="flex items-center w-1/2 pr-4 relative">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "#29AFBD" }}
            width={20}
            height={20}
            className="absolute top-[20%] translate-y-[50%] right-2"
          />
          <input
            id="teacher"
            type="search"
            className="pt-4 pb-4 pr-4 bg-neutral border-none outline-none w-[100%] text-sm text-neutral-shadow "
            placeholder="نام درس و مدرس..."
          />
        </div>
        <div>
          <img src="/image/vector2.png" className="mr-2" />
        </div>
        <div className="flex items-center w-1/2 relative">
          <FontAwesomeIcon
            icon={faLocationDot}
            style={{ color: "#29AFBD" }}
            width={20}
            height={20}
            className="absolute top-[20%] translate-y-[50%]"
          />
          <input
            id="teacher"
            type="search"
            className="pt-4 pb-4 pr-6 bg-neutral border-none outline-none w-[80%] text-sm text-neutral-shadow"
            placeholder="شهر ..."
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
