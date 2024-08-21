import Image from "next/image";
import { Header } from "./_components/header/header";
import { Children } from "react";
import { Footer } from "./_components/footer/footer";
import { Button } from "./_components/button";
import { TopImage } from "./_components/top-image/top-image";
import { HomeHeroSection } from "./_components/home-hero-section/home-hero-section";

export default function Home() {
  return (
    <>
      <section className="mt-8 bg-neutral flex flex-col relative">
        <HomeHeroSection />
        <TopImage />
        <Button type="button" variant="primary" size="large">
          {" "}
          ثبت نام
        </Button>
        <h1>
          در حالی که بیشتر سبک‌ها در Preflight قرار است مورد توجه قرار نگیرند -
          آنها به سادگی باعث می‌شوند که چیزها طوری رفتار کنند که شما انتظار
          دارید - برخی از آنها عقیده بیشتری دارند و ممکن است وقتی برای اولین بار
          با آنها روبرو می‌شوید شگفت‌انگیز باشند.
        </h1>
      </section>
    </>
  );
}
