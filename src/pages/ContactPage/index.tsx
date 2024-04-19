import Header from "../../Components/Header";
import { ReactElement, useRef, useState } from "react";
import ContactSection from "../LandingPage/ContactSection";
import emailjs from "@emailjs/browser";
import {
  faLinkedin,
  faMedium,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactPage(): ReactElement {
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
    <>
      <Header />

      <div className="bg-[#E5E5E5] pt-24 min-h-screen">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-16 my-12 min-h-[72vh]">
            <div className="flex flex-col justify-center">
              <p className="text-[24px] text-[#DD663C] font-bold">Contact Me</p>
              <p className="text-[18px] tracking-wide mt-8">
                Thank you for visiting my website. Whether you're seeking a
                seasoned service designer, have comments, or simply want to say
                hello, I'd be delighted to hear from you. <br />
                Feel free to reach out to me!
              </p>
              <div className="flex gap-8 justify-start mt-8 ">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/sebastian-wang-26369a222/"
                >
                  <div className="border-[2px] border-black rounded-full p-[24px] cursor-pointer relative text-[24px] hover:border-[4px] hover:-m-[2px] hover:border-[#DD663C] hover:text-[#DD663C]">
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
                  <div className="border-[2px] border-black rounded-full p-[24px] cursor-pointer relative text-[24px] hover:border-[4px] hover:-m-[2px] hover:border-[#DD663C] hover:text-[#DD663C]">
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
                  <div className="border-[2px] border-black rounded-full p-[24px] cursor-pointer relative text-[24px] hover:border-[4px] hover:-m-[2px] hover:border-[#DD663C] hover:text-[#DD663C]">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col gap-4 w-[90%] mx-auto shadow-xl p-8 h-fit "
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
                <textarea
                  name="user_message"
                  placeholder="Write message..."
                  required
                  rows={6}
                  className="w-full bg-white p-2 font-light bg-opacity-70"
                ></textarea>
                <div className="text-left">
                  <button
                    type="submit"
                    className="text-white bg-[#DD663C] px-8 py-1 hover:scale-[1.05] duration-300 hover:shadow-xl"
                  >
                    Sumit
                  </button>
                  {state == "success" ? <span className='ml-2 font-light text-[#DD663C]'>Email Sending Success !</span> : <></>}
                </div>
              </form>

             
            </div>
          </div>
        </div>
        <div className="bg-[#202020] h-[60px] "></div>
      </div>
    </>
  );
}
