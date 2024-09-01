import { TopImage } from "./_components/top-image";
import { HomeHeroSection } from "./_components/home-hero-section";
import { TopicsPostCardList } from "./_components/topics";
import { CoursesList } from "./_components/courses/courses-list";
import { TopVideos } from "./_components/top-video/top-video";
import { Slider } from "./_components/slider";

export default function Home() {
  return (
    <>
      <section className="mt-8 bg-neutral flex flex-col relative md:flex md:flex-col">
        <HomeHeroSection />
        <div className="flex flex-col justify-center items-center w-[950px] mr-auto ml-auto">
          <TopImage />
          <TopicsPostCardList />
          <CoursesList />
        </div>
        <div className="bg-white flex flex-col justify-center items-center mr-auto ml-auto mt-10 w-full">
          <TopVideos />
          <Slider />
        </div>
      </section>
    </>
  );
}
