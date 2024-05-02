import {
  faLinkedin,
  faMedium,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import React, { useEffect } from "react";
import ReactGA from "react-ga";
export default function ContactSection() {
  useEffect(() => {
    // 傳送頁面檢視
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  const form = useRef<HTMLFormElement>(null);
  const [state, setState] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentForm = form.current;

    if (currentForm) {
      emailjs
        .sendForm(
          "service_sebawang",
          "template_bqe7pvh",
          currentForm,
          "OttCEhVhISflR4CHl"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent!");
            setState("success");
            currentForm.reset();
          },
          (error) => {
            console.log(error.text);
            console.log("error sending message, try again!");
            setState("error");
          }
        );
    }
  };
  return (
    <div id="contactSection">
      <div className="bg-[#6c6c6c] relative">
        <div className="triangle absolute left-0 top-0 hidden md:block"></div>
        <div className="container mx-auto pt-12 text-center">
          <p className="text-[36px] font-bold text-[#DD663C] tracking-[16px] hidden md:block">
            CONTACT
          </p>
          <p className="text-left tracking-widest text-[#FF7241] text-[16px] block md:hidden font-semibold">
            CONTACT ME
          </p>
          <div className="w-[10px] border-b-[4px] border-[#FF7241] h-[16px] block md:hidden">
            &nbsp;
          </div>
          <p className="text-left max-w-[569px] mx-auto font-light text-[#D9D9D9] mt-5 text-[16px] md:text-[18px] mb-4">
            For inquiries or opportunities, feel free to reach out to me! I'm
            always open to connecting with fellow professionals and discussing
            design.{" "}
            <span className="font-bold">
              Let's spin impactful services together!
            </span>
          </p>
          <div className="flex gap-14 md:gap-4 justify-center mt-8 h-[100px]">
            <a
              href="mailto:sebaswang.design@gmail.com"
              className="hidden md:block"
            >
              <div className=" border-[2px] rounded-full p-[24px] cursor-pointer relative text-white text-[24px] hover:border-[4px] hover:-m-[2px]">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/sebastian-wang-26369a222/"
            >
              <div className="border-[2px] rounded-full p-[24px] cursor-pointer relative text-white text-[24px] hover:border-[4px] hover:-m-[2px]">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://medium.com/@SBSTN_WANG"
            >
              <div className="border-[2px] rounded-full p-[24px] cursor-pointer relative text-white text-[24px] hover:border-[4px] hover:-m-[2px]">
                <FontAwesomeIcon
                  icon={faMedium}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/haoooo2playhard/"
            >
              <div className="border-[2px] rounded-full p-[24px] cursor-pointer relative text-white text-[24px] hover:border-[4px] hover:-m-[2px]">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center block md:hidden bg-[#F3EEEE]">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col gap-4 w-[90%] mx-auto  p-8 h-fit "
                id='emailBox'
              >
                <input
                  name="user_name"
                  type="name"
                  placeholder="Name"
                  required
                  className="w-full bg-white p-2 font-light bg-opacity-70"
                />
                <input
                  name="user_email"
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full bg-white p-2 font-light bg-opacity-70"
                />
                <input
                  name="user_subject"
                  placeholder="Subject"
                  required
                  className="w-full bg-white p-2 font-light bg-opacity-70"
                />
                <textarea
                  name="user_message"
                  placeholder="Hello! Nice to meet you! "
                  required
                  rows={6}
                  className="w-full bg-white p-2 font-light bg-opacity-70"
                ></textarea>
                <div className="text-center my-4">
                  <button
                    type="submit"
                    className="text-white bg-[#DD663C] px-8 py-1 rounded-lg"
                  >
                    Submit
                  </button>
                  {state == "success" ? <span className='ml-2 font-light text-[#DD663C]'>Email Sending Success !</span> : <></>}
                </div>
              </form>

             
            </div>
      <div className="bg-[#202020] h-[200px] md:h-[60px]">
        <div className="flex justify-center text-[12px] mx-auto h-[200px] md:h-[60px] items-center text-white font-light tracking-[2px] inter">
          Copyright © 2024 Sebastian Wang
        </div>
      </div>
    </div>
  );
}
