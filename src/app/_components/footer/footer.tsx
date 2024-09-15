import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-white flex flex-col justify-center items-center container mt-20 mb-8">
        <div className="flex justify-between items-center container">
          <ul className="list-none flex justify-around items-start container pr-40 pl-40">
            <li className="w-60">
              <Image src="/image/BG.png" width={60} height={54} alt="mokh" />
              <p className="text-neutral-shadow text-sm font-normal mt-5">
                مخ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                مجله در ستون و سطرآنچنان که لازم است استفاده قرار گیرد.
              </p>
            </li>
            <li className="text-lg font-bold w-28">
              موضوعات
              <ul className="font-normal text-sm text-neutral-shadow mt-3 list-image-[url('/image/Stroke.png')]">
                <li>درسی</li>
                <li>زبـان</li>
                <li>هنر</li>
                <li>زبـان</li>
                <li>ورزش</li>
                <li>مهارت</li>
                <li>تکنولوژی</li>
              </ul>
            </li>
            <li className="text-lg font-bold w-56">
              سئوالات متداول
              <ul className="text-sm font-normal text-neutral-shadow mt-3 list-disc list-inside marker:text-primary">
                <li>آیا مخ لورم ایپسوم متن ساختگی است؟</li>
                <li>آیا مخ لورم ایپسوم متن ساختگی است؟</li>
                <li>آیا مخ لورم ایپسوم متن ساختگی است؟</li>
                <li>آیا مخ لورم ایپسوم متن ساختگی است؟</li>
              </ul>
            </li>
            <li className="text-lg font-bold w-64">
              تماس با ما
              <ul className="text-sm font-normal text-neutral-shadow mt-3 pr-8">
                <li className="list-image-[url('/image/email.png')]">
                  info@gajino.com
                </li>
                <li className="list-image-[url('/image/tell.png')]">
                  021-6420
                </li>
                <li className="list-image-[url('/image/Vector.png')]">
                  تهران کیلومتر 14 جاده مخصوص - بلوار ایران خودرو - نرسیده به
                  فتح - پلاک 2
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="flex justify-between items-center mt-20 mb-12 container pr-40 pl-40">
          <div className="w-1/2">
            <ul className="flex justify-between items-center gap-10">
              <li>
                <img src="/image/gaj.svg" />
              </li>
              <li>
                <img src="/image/Gaj-Market-English.png" />
              </li>
              <li>
                <img src="/image/DrIQ.png" />
              </li>
              <li>
                <img src="/image/gajmaj.png" />
              </li>
            </ul>
          </div>
          <div className="w-1/2">
            <ul className="flex justify-between items-center pr-40">
              <li>
                <img src="/image/senf.png" />
              </li>
              <li>
                <img src="/image/enamad.png" />
              </li>
              <li>
                <img src="/image/Samandehi.png" />
              </li>
              <li>
                <img src="/image/namad.png" />
              </li>
            </ul>
          </div>
        </div>
        <p className="text-neutral-shadow text-sm">
          تمامی حقوق برای گاج محفوظ است
        </p>
      </footer>
    </>
  );
};
