import Image from "next/image";
import { TopicsType } from "../types/topics.type";
import Link from "next/link";

export const TopicPostCard: React.FC<TopicsType> = ({ title, image }) => {
  return (
    <>
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
        <div className="card-body bg-white rounded-b-xl">
          <Link
            href="/"
            className="text-sm font-bold items-center flex justify-center p-4"
          >
            {title}
          </Link>
        </div>
      </div>
    </>
  );
};
