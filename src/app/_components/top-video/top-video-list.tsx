import { Button } from "../button";
import { TopicsType } from "../types/topics.type";
import { TopVideosCard } from "./top-video";

const cards: TopicsType[] = [
  {
    id: 1,
    title: "12 جلسه آموزش مجسمه‌سازی",
    desc: "فرید انصاری فرد",
    image: "/image/mojasame.png",
  },
  {
    id: 2,
    title: "8 جلسه آموزش گیتار",
    desc: "آرمان پیرزاده",
    image: "/image/gitar.png",
  },
  {
    id: 3,
    title: "10 جلسه آموزش بسکتبال",
    desc: "پژمان نصیری",
    image: "/image/basketball.png",
  },
  {
    id: 4,
    title: "8 جلسه آموزش نقاشی کودکان",
    desc: "مونا سعیدی پور",
    image: "/image/paint.png",
  },
  {
    id: 5,
    title: "8 جلسه آموزش زبان فرانسوی",
    desc: "مارال صفاری‌نژاد",
    image: "/image/french.png",
  },
  //   {
  //     id: 6,
  //     title: "+218 ویدئو با موضوعات مختلف",
  //     image: "",
  //   },
];

export const TopVideoList: React.FC = () => {
  return (
    <div className=" grid grid-cols-3 gap-10 mt-10 mb-10 w-[950px]">
      {cards.map((card) => (
        <TopVideosCard
          key={card.id}
          title={card.title}
          image={card.image}
          desc={card.desc}
          id={card.id}
        />
      ))}
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-5xl font-bold text-secondary border-b-primary border-b-4">
          +218{" "}
        </h1>
        <h2 className="text-secondary text-lg">ویدئو با موضوعات مختلف</h2>
        <Button
          type="button"
          variant="primary"
          size="large"
          className=" bg-primary text-white p-3 rounded-xl items-center flex justify-center gap-2"
        >
          <span className="text-lg">&lt;</span>
          <span>مشاهده تمام ویدئـــوها</span>
        </Button>
      </div>
    </div>
  );
};
