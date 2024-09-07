import { TopicsType } from "../types/topics.type";
import { CourseDetails } from "./courses-details";

const courses: TopicsType[] = [
  {
    id: 1,
    title: "12 جلسه آموزش مجسمه‌سازی",
    desc: "فرید انصاری‌فر",
    price: 480000,
    discount: 380000,
    image: "/image/mojasame.png",
  },
  {
    id: 2,
    title: "8 جلسه آموزش گیتار",
    desc: "آرمان پیرزاده",
    price: 1200000,
    discount: 950000,
    image: "/image/gitar.png",
  },
  {
    id: 3,
    title: "10 جلسه آموزش بسکتبال",
    desc: "پژمان نصیری",
    price: 520000,
    discount: 440000,
    image: "/image/basketball.png",
  },
];

export const CoursesList: React.FC = () => {
  return (
    <>
      <div className="flex flex-wrap gap-5 mt-10 container mb-20 rounded-xl">
        {courses.map((course) => (
          <CourseDetails
            key={course.id}
            id={course.id}
            title={course.title}
            image={course.image}
            desc={course.desc}
            price={course.price}
            discount={course.discount}
          />
        ))}
      </div>
      {/* <div className=" grid grid-cols-3 gap-10 mt-20 mb-20 rounded-xl">
        {courses.map((course) => (
          <CourseDetails
            key={course.id}
            id={course.id}
            title={course.title}
            image={course.image}
            desc={course.desc}
            price={course.price}
            discount={course.discount}
          />
        ))}
      </div> */}
    </>
  );
};
