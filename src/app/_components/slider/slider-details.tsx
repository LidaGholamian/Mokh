import Image from "next/image";
import { SliderType } from "../types/slider.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const SliderDetails: React.FC<SliderType> = ({
  image,
  title,
  desc,
  rate,
  id,
}) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-white rounded-xl shadow-xl w-[350px] h-[400px] pr-5 pl-5">
        <figure className="w-[200px] h-[200px] flex justify-center items-center">
          <Image
            src={image}
            width={200}
            height={150}
            alt="modares-1"
            className="rounded-full w-auto h-auto mt-5 mb-16 mr-auto ml-auto shadow-xl "
          />
        </figure>
        <h3 className="text-secondary-content font-bold text-lg">{title}</h3>
        <p className="text-neutral-base pb-5 border-b-primary text-sm">
          {desc}
        </p>
        <div className="flex justify-center items-center gap-5">
          <div className="flex gap-2 w-[45px] ">
            <FontAwesomeIcon
              icon={faStar}
              size="sm"
              style={{ color: "#FFD43B" }}
            />
            <span className="text-neutral-base text-sm">{rate}</span>
          </div>

          <span className="text-neutral-base text-sm"> از 582 نفر</span>
        </div>
        <button className="text-primary text-xl w-8 h-8 mt-5">&lt;</button>
      </div>
    </>
  );
};
