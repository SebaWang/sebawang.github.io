import {
    faLinkedin,
    faMedium,
  } from "@fortawesome/free-brands-svg-icons";
  import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

  export default function ContactMobile() {
   
    return (
      <div id="contactSection">
        <div className="bg-[#6c6c6c] relative">
          <div className="container mx-auto pt-12 text-center">
            <p className="text-[16px] font-bold text-[#DD663C] tracking-[4px]">
              CONTACT
            </p>
            <p className="px-5 mx-auto font-light text-[#D9D9D9] mt-5 text-[14px] mb-4">
              Whether it&rsquo;s a role, a project or an idea about services
            and foresight, I&rsquo;d love to hear from you.{" "}
              <span className="font-bold">
                Let's spin impactful services together!
              </span>
            </p>
            <div className="flex gap-4 justify-center mt-8 h-[80px] px-6">
              <a
                href="mailto:sebaswang.design@gmail.com"
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
            </div>
          </div>
        </div>
  
        <div className="bg-[#202020] h-[200px] md:h-[60px]">
          <div className="flex justify-center text-[12px] mx-auto h-[200px] md:h-[60px] items-center text-white font-light tracking-[2px] inter">
            Copyright © 2026 Sebastian Wang
          </div>
        </div>
      </div>
    );
  }
  