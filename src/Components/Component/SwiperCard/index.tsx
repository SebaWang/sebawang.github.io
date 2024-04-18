import { useEffect, useRef } from "react";
import img_blog_01 from "../../../assets/img/img_landing_blog_01.webp";
import img_blog_02 from "../../../assets/img/img_landing_blog_02.webp";
import img_blog_03 from "../../../assets/img/img_landing_blog_03.webp";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface HandleTouchDirParams {
  container: string;
  leftCb: () => void;
  rightCb: () => void;
}

let s1 = document.querySelector(".s1");
let s2 = document.querySelector(".s2");
let s3 = document.querySelector(".s3");
let swiperOrderList: (Element | null)[] = [s1, s2, s3];
let swiperClassList: string[] = ["swiper-1", "swiper-2", "swiper-3"];

function handleTouchDir({
  container,
  leftCb,
  rightCb,
}: HandleTouchDirParams): void {
  const box: Element | null = document.querySelector(container);
  let startTime: number = 0;
  let startDistanceX: number = 0;
  let startDistanceY: number = 0;
  let endTime: number = 0;
  let endDistanceX: number = 0;
  let endDistanceY: number = 0;
  let moveTime: number = 0;
  let moveDistanceX: number = 0;
  let moveDistanceY: number = 0;

  box?.addEventListener("touchstart", (e: Event) => {
    const touchEvent = e as TouchEvent;
    startTime = new Date().getTime();
    startDistanceX = touchEvent.touches[0].screenX;
    startDistanceY = touchEvent.touches[0].screenY;
  });

  box?.addEventListener("touchend", (e: Event) => {
    const touchEvent = e as TouchEvent;
    endTime = new Date().getTime();
    endDistanceX = touchEvent.changedTouches[0].screenX;
    endDistanceY = touchEvent.changedTouches[0].screenY;
    moveTime = endTime - startTime;
    moveDistanceX = startDistanceX - endDistanceX;
    moveDistanceY = startDistanceY - endDistanceY;

    if (
      (Math.abs(moveDistanceX) > 40 || Math.abs(moveDistanceY) > 40) &&
      moveTime < 500
    ) {
      if (Math.abs(moveDistanceX) > Math.abs(moveDistanceY)) {
        if (moveDistanceX > 0) {
          leftCb();
        } else {
          rightCb();
        }
      } else {
        // Logic for 'up' or 'down' could be implemented here
      }
    }
  });
}
swiperOrderList.forEach((swiper, i) => {
  if (!swiper) return;
  swiper.classList.add(swiperClassList[i]);
});

function leftCb(): void {
  console.log("left");
  const s = swiperOrderList.shift();
  if (!s) return;
  swiperOrderList.push(s);
  swiperOrderList.forEach((swiper, i) => {
    if (!swiper) return;
    swiperClassList.forEach((c) => {
      swiper.classList.remove(c);
    });
    swiper.classList.add(swiperClassList[i]);
  });
}

function rightCb(): void {
  console.log("right");
  const s = swiperOrderList.pop();
  if (!s) return;
  swiperOrderList.unshift(s);
  swiperOrderList.forEach((swiper, i) => {
    if (!swiper) return;
    swiperClassList.forEach((c) => {
      swiper.classList.remove(c);
    });
    swiper.classList.add(swiperClassList[i]);
  });
}

export default function SwiperBlogCard() {
  useEffect(() => {
    s1 = document.querySelector(".s1");
    s2 = document.querySelector(".s2");
    s3 = document.querySelector(".s3");
    swiperOrderList = [s1, s2, s3];
    swiperClassList = ["swiper-1", "swiper-2", "swiper-3"];
    rightCb();
    handleTouchDir({
      container: ".con",
      leftCb,
      rightCb,
    });
  }, []);

  return (
    <>
      <div className="con">
        <div className="absolute left-0 top-1/2 text-white text-3xl cursor-pointer" onClick={leftCb}>
        <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div className="absolute right-0 top-1/2 text-white text-3xl cursor-pointer" onClick={rightCb}>
        <FontAwesomeIcon icon={faChevronRight} />
        </div>
        <div className="swiperr s1 rounded-md shadow-md !text-[#333333] !text-left">
          <div className="max-h-[250px]  overflow-hidden relative rounded-t-md">
            <div className="absolute top-0 left-0 bottom-0 right-0 bg-yellow-800 bg-opacity-30 flex justify-center items-center text-white text-[26px] px-10">
              What Financial Vulnerability Is
            </div>
            <img className="w-full object-cover" src={img_blog_02} />
          </div>
          <div className="p-6 text-[16px] font-bold">
            Design for Financial Vulnerability #1
            <p className="text-xs font-light text-gray-700 mt-2">
              What is financial vulnerability? Why does it matter? How does it
              happen? Can service design help improve the issue?
            </p>
          </div>
        </div>
        <div className="swiperr s2 rounded-md shadow-md !text-[#333333] !text-left">
          <div className="max-h-[250px]  overflow-hidden relative rounded-t-md">
            <div className="absolute top-0 left-0 bottom-0 right-0 bg-yellow-800 bg-opacity-30 flex justify-center items-center text-white text-[26px] px-10">
              Research through Design: The Spirit of Iteration
            </div>
            <img className="w-full object-cover" src={img_blog_01} />
          </div>
          <div className="p-6 text-[16px] font-bold">
            Design for Futures #3
            <p className="text-xs font-light text-gray-700 mt-2">
              What is Research through Design? What is its value? How did I
              conduct it in my design?
            </p>
          </div>
        </div>
        <div className="swiperr s3 rounded-md shadow-md !text-[#333333] !text-left">
          <div className="max-h-[250px]  overflow-hidden relative rounded-t-md">
            <div className="absolute top-0 left-0 bottom-0 right-0 bg-yellow-800 bg-opacity-30 flex justify-center items-center text-white text-[26px] px-10">
              5 Tips to Tell A Good Story
            </div>
            <img className="w-full object-cover" src={img_blog_03} />
          </div>
          <div className="p-6 text-[16px] font-bold">
            Design for Futures #4
            <p className="text-xs font-light text-gray-700 mt-2">
              Good storytelling should provoke various interactions and opinions
              beyond ranking the idea as good or bad.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
