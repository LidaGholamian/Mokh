import Image from "next/image";
import { TopicPostCard } from "../topics";
import { TopicsType } from "../types/topics.type";

const posts: TopicsType[] = [
  {
    id: 1,
    title: "برنامه‌نویسی",
    image: "/image/code.png",
  },
  {
    id: 2,
    title: "شیرینی‌پزی",
    image: "/image/pastry.png",
  },
  {
    id: 3,
    title: "گویندگی",
    image: "/image/speak.png",
  },
  {
    id: 4,
    title: "نقاشی سیاه‌قلم",
    image: "/image/painting.png",
  },
];

export const TopicBottomList: React.FC = () => {
  return (
    <>
      <div className="w-[950px] flex justify-center items-center ml-auto mr-auto mt-20 mb-5 z-10">
        <ul className="flex justify-center items-center gap-5">
          <li className="pt-1 pb-1">
            <div className=" flex flex-col justify-center items-center rounded-xl shadow-xl bg-white -mt-64">
              <div className="bg-secondary rounded-t-xl">
                <Image
                  src="/image/code.png"
                  alt="coding"
                  width={220}
                  height={220}
                  className="rounded-t-xl opacity-65 w-[220px] h-[220px]"
                />
              </div>
              <div className="text-lg font-bold m-2">
                <h3>برنامه‌نویسی</h3>
              </div>
            </div>
          </li>
          <li className="pt-1 pb-1">
            <div className=" flex flex-col justify-center items-center rounded-xl shadow-xl bg-white -mt-52">
              <div className="bg-secondary rounded-t-xl">
                <Image
                  src="/image/pastry.png"
                  alt="coding"
                  width={220}
                  height={220}
                  className="rounded-t-xl opacity-65 w-[220px] h-[220px]"
                />
              </div>
              <h3 className="text-lg font-bold m-2">شیرینی‌پزی</h3>
            </div>
          </li>
          <li className="pt-1 pb-1">
            <div className=" flex flex-col justify-center items-center rounded-xl shadow-xl bg-white -mt-64">
              <div className="bg-secondary rounded-t-xl">
                <img
                  src="/image/speak.png"
                  alt="coding"
                  width={220}
                  height={220}
                  className="rounded-t-xl opacity-65"
                />
              </div>
              <h3 className="text-lg font-bold m-2">گویندگی</h3>
            </div>
          </li>
          <li className="pt-1 pb-1">
            <div className=" flex flex-col justify-center items-center rounded-xl shadow-xl bg-white -mt-44">
              <div className="bg-secondary rounded-t-xl">
                <Image
                  src="/image/painting.png"
                  alt="coding"
                  width={220}
                  height={220}
                  className="rounded-t-xl opacity-65 w-[220px] h-[220px]"
                />
              </div>
              <h3 className="text-lg font-bold m-2 ">نقاشی سیاه‌قلم</h3>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
