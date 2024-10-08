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
                <Image
                  alt="gaj"
                  width={140}
                  height={54}
                  className="w-[140px] h-[54px]"
                  src="/image/gaj.svg"
                />
              </li>
              <li>
                <Image
                  alt="gajmarket"
                  width={160}
                  height={40}
                  className="w-[160px] h-[40px]"
                  src="/image/Gaj-Market-English.png"
                />
              </li>
              <li>
                <Image
                  alt="DrIQ"
                  width={146}
                  height={40}
                  className="w-[146px] h-[40px]"
                  src="/image/DrIQ.png"
                />
              </li>
              <li>
                <Image
                  alt="gajmaj"
                  width={115}
                  height={40}
                  className="w-[115px] h-[40px]"
                  src="/image/gajmaj.png"
                />
              </li>
            </ul>
          </div>
          <div className="w-1/2">
            <ul className="flex justify-between items-center pr-40">
              <li>
                <Image
                  src="/image/senf.png"
                  width={60}
                  height={54}
                  alt="senf"
                  className="w-[60px] h-[54px]"
                />
              </li>
              <li>
                <Image
                  src="/image/enamad.png"
                  width={60}
                  height={54}
                  alt="enamad"
                  className="w-[60px] h-[54px]"
                />
              </li>
              <li>
                <Image
                  src="/image/Samandehi.png"
                  width={60}
                  height={54}
                  alt="Samandehi"
                  className="w-[60px] h-[54px]"
                />
              </li>
              <li>
                <Image
                  src="/image/namad.png"
                  width={60}
                  height={54}
                  alt="namad"
                  className="w-[60px] h-[54px]"
                />
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
