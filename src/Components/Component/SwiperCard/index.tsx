import { useEffect, useRef } from "react";
import img_blog_01 from "../../../assets/img/blog01.png";
import img_blog_02 from "../../../assets/img/blog02.png";
import img_blog_03 from "../../../assets/img/blog03.png";
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
        <div className="swiperr s1 !bg-transparent">
          <a href='https://medium.com/@SBSTN_WANG/what-financial-vulnerability-is-bd48d90b6ad6' target="_blank" rel="noreferrer" >
          <div className="relative rounded-t-md">
            <img className="w-full object-cover" src={img_blog_02} alt='blog02' />
          </div>
          </a>
        </div>
        <div className="swiperr s2 !bg-transparent">
          <a href='https://medium.com/design-bootcamp/inclusive-design-de-label-blur-the-boundary-cc2b06253644' target="_blank" rel="noreferrer">
          <div className="relative rounded-t-md">
            <img className="w-full object-cover" src={img_blog_01} alt='blog01' />
          </div>
          </a>
        </div>
        <div className="swiperr s3 !bg-transparent">
          <a href='https://medium.com/design-bootcamp/research-through-design-the-spirit-of-iteration-7af98ee546b7' target="_blank" rel="noreferrer">
          <div className="relative rounded-t-md">
            <img className="w-full object-cover" src={img_blog_03} alt='blog03' />
          </div>
          </a>
        </div>
      </div>
    </>
  );
}
