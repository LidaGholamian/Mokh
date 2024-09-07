import Image from "next/image";
import { TopicsType } from "../types/topics.type";
import Link from "next/link";

export const TopVideosCard: React.FC<TopicsType> = ({ title, desc, image }) => {
  return (
    <div className="shadow-2xl rounded-b-xl md:w-72 w-[285px] mt-10 mr-auto ml-auto">
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
      <div className="flex justify-center items-start bg-white relative rounded-b-xl mb-5">
        <div className="card-body bg-white  flex flex-col justify-center items-center">
          <Link href="/" className="text-sm items-center  pt-4 pb-2 font-bold">
            {title}
          </Link>
          <div className="flex flex-col justify-center items-center text-sm gap-4">
            <p>{desc}</p>
            <button className="text-primary text-sm items-center font-bold">
              &lt; مشاهده ویدئوها
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
