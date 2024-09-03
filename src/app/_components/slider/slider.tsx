"use client";

import { useState } from "react";
import { SliderType } from "../types/slider.types";
import { SliderDetails } from "./slider-details";

const cards: SliderType[] = [
  {
    id: 1,
    image: "/image/image-1.png",
    title: "مینا جعفرزاده همدانی",
    desc: "زبان انگلیسی",
    rate: 4.2,
  },
  {
    id: 2,
    image: "/image/image-2.png",
    title: "بهرام موسوی راد",
    desc: "ادبیات فارسی",
    rate: 4.2,
  },
  {
    id: 3,
    image: "/image/image-3.png",
    title: "علیرضا محمدیان",
    desc: "زبان آلمانی",
    rate: 4.2,
  },
  {
    id: 4,
    image: "/image/image-4.png",
    title: "پژمان نظمی",
    desc: "بسکتبال",
    rate: 4.2,
  },
  {
    id: 5,
    image: "/image/image-2.png",
    title: "عباس ترسیم",
    desc: "علوم اجتماعی",
    rate: 4.2,
  },
  {
    id: 6,
    image: "/image/image-3.png",
    title: "محمد غلامی",
    desc: "تنیس",
    rate: 4.2,
  },
  {
    id: 7,
    image: "/image/image-1.png",
    title: "مسعود نظامی",
    desc: "والیبال",
    rate: 4.2,
  },
  {
    id: 8,
    image: "/image/image-3.png",
    title: "مجید پاکدامن",
    desc: "ریاضیات",
    rate: 4.2,
  },
];

export const Slider: React.FC = () => {
  const slideLeft = () => {
    let slider: any = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 240;
  };

  const slideRight = () => {
    let slider: any = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 240;
  };

  return (
    <>
      <div className="container w-full relative  ">
        <div className="mr-40 flex mt-20 mb-14 gap-5">
          <div className="w-[20%] flex flex-col gap-3">
            <h3 className="text-lg">برترین مدرسین</h3>
            <p className="text-sm">
              رتبه مدرسین براساس امتیازی است که فراگیران بعد از هر جلسه به کلاس
              خود می‌دهند (مثلا)
            </p>
            <div className="flex gap-3">
              <button
                className="text-white text-xl items-center bg-primary w-8 h-8 rounded-lg"
                onClick={slideLeft}
              >
                &lt;
              </button>
              <button
                className="text-white text-xl items-center bg-neutral-shadow w-8 h-8 rounded-lg"
                onClick={slideRight}
              >
                &gt;
              </button>
            </div>
          </div>
          <div className="w-[80%]">
            <div
              className="flex gap-5 justify-start items-center overflow-hidden rounded-lg "
              id="slider"
            >
              {cards.map((card) => (
                <SliderDetails
                  key={card.id}
                  id={card.id}
                  title={card.title}
                  image={card.image}
                  rate={card.rate}
                  desc={card.desc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
