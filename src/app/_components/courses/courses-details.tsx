import Image from "next/image";
import { TopicsType } from "../types/topics.type";
import Link from "next/link";

export const CourseDetails: React.FC<TopicsType> = ({
  title,
  image,
  desc,
  discount,
  price,
}) => {
  return (
    <div className="card">
      <figure className="bg-secondary rounded-t-xl">
        <Image
          src={image}
          title="title"
          id="id"
          width={460}
          height={259}
          alt="topics"
          className="rounded-t-xl opacity-65"
        />
      </figure>
      <div className="flex justify-center items-start bg-white relative">
        <div className="card-body bg-white rounded-b-xl flex flex-col justify-center items-center ">
          <Link href="/" className="text-sm items-center  pt-4 pb-2 font-bold">
            {title}
          </Link>
          <div className="flex flex-col justify-center items-center text-sm gap-4">
            <p>{desc}</p>
            <p className="text-xs line-through decoration-accent">
              {price} تومان
            </p>
            <p className="text-primary font-bold">{discount} تومان</p>
          </div>
        </div>
        <img
          src="/image/AD.png"
          alt="AD"
          className=" absolute top-4 left-3 w-8 h-8"
        />
      </div>
    </div>
  );
};
