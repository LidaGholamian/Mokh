import Image from "next/image";
import { TopNavigation } from "./top-navigation";
import { Button } from "../button";

export const Header: React.FC = () => {
  return (
    <header className="bg-white container">
      <div className="container flex items-center justify-between mt-8 mb-8 pr-20 pl-20">
        <Image
          src="/image/BG.png"
          width="0"
          height="0"
          alt="mokh"
          priority
          className="w-auto h-auto"
        />
        <TopNavigation />
        <span className="mr-auto">
          <div className="flex items-center justify-center gap-7">
            <Button
              type="button"
              variant="primary"
              size="large"
              className=" bg-white text-primary w-[108px] h-[32px]"
            >
              ورود / ثبت‌نام
            </Button>
            <Button
              type="button"
              variant="primary"
              size="large"
              className=" bg-primary text-white rounded-2xl w-[192px] h-[45px]"
            >
              معلم خصوصی شو
            </Button>
          </div>
        </span>
      </div>
    </header>
  );
};
