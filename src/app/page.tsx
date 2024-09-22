import { TopImage } from "./_components/top-image";
import { HomeHeroSection } from "./_components/home-hero-section";
import { TopicsPostCardList } from "./_components/topics";
import { CoursesList } from "./_components/courses/courses-list";
import { Slider } from "./_components/slider";
import { TopVideoList } from "./_components/top-video";
import { TopicBottomList } from "./_components/topic-bottom";

export default function Home() {
  return (
    <>
      <section className="mt-8 bg-neutral flex flex-col relative container md:pt-[50px]">
        <HomeHeroSection />
        <div className="flex flex-col justify-center items-center mr-auto ml-auto w-[950px]">
          <TopImage />
          <TopicsPostCardList />
          <CoursesList />
        </div>
        <div className="bg-white flex flex-col justify-center items-center mr-auto ml-auto w-full">
          <TopVideoList />
        </div>
        <div className="bg-neutral mr-auto ml-auto mb-40">
          <Slider />
        </div>
        <div className="bg-white container mr-auto ml-auto">
          <TopicBottomList />
        </div>
      </section>
    </>
  );
}
