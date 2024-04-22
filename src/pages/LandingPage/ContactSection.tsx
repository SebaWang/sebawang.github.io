import {
    faLinkedin,
    faMedium,
    faInstagram,
  } from "@fortawesome/free-brands-svg-icons";
  import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  
  export default function ContactSection() {
    return (
      <div id="ContactSection">
        <div className="bg-[#6c6c6c] relative">
          <div className="triangle absolute left-0 top-0"></div>
          <div className="container mx-auto pt-12 text-center">
            <p className="text-[36px] font-bold text-[#DD663C] tracking-[16px]">
              CONTACT
            </p>
            <p className="text-left max-w-[569px] mx-auto font-light text-[#D9D9D9] mt-5 text-[18px] mb-4">
              For inquiries or opportunities, feel free to reach out to me! I'm
              always open to connecting with fellow professionals and discussing
              design.{" "}
              <span className="font-bold">
                Let's spin impactful services together!
              </span>
            </p>
            <div className="flex gap-4 justify-center mt-8 h-[100px]">
              <a href="mailto:sebaswang.design@gmail.com">
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
        <div className="bg-[#202020] h-[60px]"></div>
      </div>
    );
  }
  