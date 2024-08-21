import Image from "next/image";
import { Button } from "../button";

export const TopImage: React.FC = () => {
  return (
    <div className="text-center -mt-28 flex flex-col justify-center items-center gap-7">
      <h1 className="text-3xl text-white/80 align-text-bottom ">
        دنبال یاد گرفتن چی با کی هستی؟
      </h1>
      <div className="bg-white opacity-100 h-28 w-[950px] rounded-2xl flex justify-center items-center">
        <input
          type="text"
          className="block p-2 pl-10 w-70 text-neutral_content rounded-lg focus:pl-3"
          placeholder="Search Here..."
        />
        <input
          type="text"
          className="block p-2 pl-10 w-70 text-neutral_content rounded-lg focus:pl-3"
          placeholder="Search Here..."
        />
        <Button
          type="button"
          variant="primary"
          size="large"
          className=" bg-primary text-white rounded-2xl w-[192px] h-[45px]"
        >
          جستجو
        </Button>
      </div>
    </div>
  );
};
