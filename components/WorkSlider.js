import { BsArrowRight } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "WhatsApp Clone",
          path: "/wa.png",
          link: "https://whatsapp-vivek.vercel.app/login",
        },
        {
          title: "Quiz App",
          path: "/quizzie.png",
          link: "https://quizzie-pro-vivek.vercel.app/",
        },
        {
          title: "Book Table",
          path: "/home.png",
          link: "https://bookmytable.vercel.app/",
        },
        {
          title: "Admin Dashboard",
          path: "/admin.png",
          link: "https://vivek-admin-dashboard.vercel.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "WhatsApp Clone",
          path: "/wa.png",
          link: "https://whatsapp-vivek.vercel.app/login",
        },
        {
          title: "Quiz App",
          path: "/quizzie.png",
          link: "https://quizzie-pro-vivek.vercel.app/",
        },
        {
          title: "Portfolio",
          path: "/preview.png",
          link: "https://vivekb.vercel.app/",
        },
        {
          title: "Admin Dashboard",
          path: "/admin.png",
          link: "https://vivek-admin-dashboard.vercel.app/",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((item, index) => (
        <SwiperSlide key={index}>
          <div className=" grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {item.images.map((img, i) => (
              <div
                className=" relative rounded-lg overflow-hidden flex items-center justify-center group"
                key={i + 10}
                onClick={() => window.open(img.link, "_blank")}
              >
                <div className=" relative flex items-center justify-center overflow-hidden group">
                  {/* img */}
                  <Image src={img.path} width={500} height={300} alt="" />
                  {/* overlay gradient */}
                  <div className=" absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                  {/* title */}
                  <div className=" absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all">
                    <div className="flex items-center gap-x-2  text-[13px] tracking-[0.2em]">
                      {/* part 1 */}
                      <div className=" delay-100">LIVE</div>
                      {/* part 2*/}
                      <div className=" translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        {img.title}
                      </div>
                      {/* icon */}
                      <div className=" text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-300">
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
