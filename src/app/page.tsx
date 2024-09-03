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
      <section className="mt-8 bg-neutral flex flex-col relative container">
        <HomeHeroSection />
        <div className="flex flex-col justify-center items-center w-[950px] mr-auto ml-auto">
          <TopImage />
          <TopicsPostCardList />
          <CoursesList />
        </div>
        <div className="bg-white flex flex-col justify-center items-center mr-auto ml-auto mt-10 w-full">
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
