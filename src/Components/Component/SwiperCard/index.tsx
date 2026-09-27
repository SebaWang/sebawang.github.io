import { useEffect } from "react";
import { Link } from "react-router-dom";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { articles } from "../../../pages/WritingPage/articles";
import img_blog_01_clean from "../../../assets/img/img_landing_blog_01.webp";
import img_blog_02_clean from "../../../assets/img/img_landing_blog_02.webp";

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

// Preview of three of the site's own /writing articles, in the order the
// stack rotates through them. blog01/02/03.png (the article's own imgURL)
// are pre-designed share-card graphics with the title baked into the
// image itself, so they'd duplicate the title text rendered below — here
// we swap in the plain illustration where one exists.
// Initial layout after the mount-time rightCb(): [left, front, right] —
// the second id is the one shown up front.
const previewIds = [
  "financial-vulnerability",
  "scenario-planning-ai",
  "research-through-design",
];
const cleanImageOverrides: Record<string, string> = {
  "financial-vulnerability": img_blog_01_clean, // Wall Street chase illustration
  "research-through-design": img_blog_02_clean, // lightbulb crowd illustration
};
const previewArticles = previewIds
  .map((id) => articles.find((a) => a.id === id))
  .filter((a): a is (typeof articles)[number] => !!a)
  .map((a) => ({ ...a, previewImgURL: cleanImageOverrides[a.id] ?? a.imgURL }));

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
        {previewArticles.map((article, i) => (
          <div key={article.id} className={`swiperr s${i + 1} !bg-transparent`}>
            <Link to={`/writing/${article.id}`}>
              <div className="w-full h-full flex flex-col bg-white rounded-md shadow-lg overflow-hidden text-left">
                <img
                  className="w-full flex-1 min-h-0 object-cover"
                  src={article.previewImgURL}
                  alt={article.title}
                />
                <div className="shrink-0 px-4 py-3">
                  <p className="text-[#DD663C] text-[11px] font-light">
                    {article.date}
                  </p>
                  <p className="text-black font-bold text-[14px] leading-snug mt-1">
                    {article.title}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
