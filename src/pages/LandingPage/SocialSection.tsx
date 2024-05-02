import DraggableCard from "../../Components/Component/DragNDropCard";
import { ReactComponent as DecoBubble } from "../../assets/img/img_deco_bubble_social.svg";
import ProjectPreviewCard from "../ProjectPage/ProjectPreviewCard";
import img_project_01 from "../../assets/img/img_landing_project_01.jpeg";
import img_project_02 from "../../assets/img/img_landing_project_02.jpg";
import img_project_03 from "../../assets/img/img_project_cover_03.jpg";
import img_project_04 from "../../assets/img/img_project_cover_04.png";
import img_project_05 from "../../assets/img/img_project_cover_06.jpg";
import img_project_06 from "../../assets/img/img_project_cover_05.png";
import { Link } from "react-router-dom";
export default function SocialSection() {
  return (
    <>
      <div className="bg-[#e8e8e8]  hidden md:block">
        <div className="container mx-auto pt-48">
          <div className="grid md:grid-cols-5 gap-x-24 pb-48 ">
            <div className="text-left relative col-span-3">
              <div className="absolute right-0 -bottom-24">
                <DecoBubble />
              </div>
              <DraggableCard>
                <div className="cursor-grab text-[13px] p-8 border-[1px] border-[#808080] rounded-xl w-[540px] grid grid-cols-11 gap-4 absolute hover:z-50 right-8 bg-[#e8e8e8] z-40">
                  <p className="col-span-10">
                    "Sebastian exemplifies effective co-production by nurturing
                    collective and reflective project development. His strong
                    diligence and intelligence shine through, as he engages with
                    people earnestly and delivers remarkable insights and
                    outcomes. It's refreshing to see a designer prioritize
                    genuine inclusivity."
                    <span className="font-bold">
                      {" "}
                      - Natalie, V&A Design Curator
                    </span>
                  </p>
                  <div className="h-[30px] bg-[#DFC3C3] rounded-md">&nbsp;</div>
                </div>
              </DraggableCard>
              <div className="-rotate-[5deg] relative hover:z-50">
                <DraggableCard>
                  <div className="cursor-grab text-[13px] p-8 border-[1px] border-[#808080] rounded-xl w-[540px]  grid grid-cols-11 gap-4 absolute hover:z-50 bg-[#e8e8e8] right-24 -bottom-64 z-30">
                    <p className="col-span-10">
                      "Wang possesses a keen insight into the diverse
                      personalities of others, always able to communicate
                      effectively between departments, and calmly work through
                      challenges with everyone. Working with him is truly
                      enjoyable and seamless!"{" "}
                      <span className="font-bold">
                        {" "}
                        - Kevin, Project Manager of Advantech
                      </span>
                    </p>
                    <div className="h-[30px] bg-[#CAC4C0] rounded-md">
                      &nbsp;
                    </div>
                  </div>
                </DraggableCard>
              </div>
              <div className="-rotate-[5deg] relative hover:z-50">
                <DraggableCard>
                  <div className="cursor-grab  text-[13px] p-8 border-[1px] border-[#808080] rounded-xl w-[540px] grid grid-cols-11 gap-4 absolute hover:z-50 bg-[#e8e8e8] -left-0 -top-16 z-20">
                    <p className="col-span-10">
                      "It's amazing to see Seb's service design addressing
                      impulsive shopping in ADHD. I'm grateful for his extensive
                      research and deep understanding of dopamine-related
                      issues. His approach is truly compassionate and
                      intelligent."
                      <span className="font-bold">
                        {" "}
                        - Yolanda, Fashion Photographer and Writer
                      </span>
                    </p>
                    <div className="h-[30px] bg-[#DBBCAB] rounded-md">
                      &nbsp;
                    </div>
                  </div>
                </DraggableCard>
              </div>
              <div className="rotate-[5deg] relative hover:z-50">
                <DraggableCard>
                  <div className="cursor-grab text-[13px] p-8 border-[1px] border-[#808080] rounded-xl w-[540px] grid grid-cols-11 gap-4 absolute hover:z-50 bg-[#e8e8e8] right-0 -top-24 z-10">
                    <p className="col-span-10">
                      "Sebastian's systematic critical reflection, openness, and
                      continuous co-design have resulted in remarkably
                      thoughtful and critical work, highlighting the importance
                      of designing 'with' rather than 'for' disability. His
                      flexibility throughout the project and respect for the
                      uniqueness of each user are truly commendable."
                      <span className="font-bold">
                        {" "}
                        - Marion, Lecturer of UAL MA Service Design
                      </span>
                    </p>

                    <div className="h-[30px] bg-[#C0D6E3] rounded-md">
                      &nbsp;
                    </div>
                  </div>
                </DraggableCard>
              </div>
            </div>
            <div className="text-left col-span-2">
              <p className="tracking-widest text-[#EA5514] text-subtitle">
                SOCIAL PROOF
              </p>
              <div className="w-[10px] border-b-[4px] border-[#EA5514] h-[16px]">
                &nbsp;
              </div>
              <div className="mt-12 tracking-wide font-light text-content">
                <p>
                  It's a great pleasure to collaborate with diverse individuals
                  on my design journey. Here are some testimonials from
                  colleagues and industry experts who have worked with me.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#e8e8e8] block md:hidden" id='projectSection'>
        <div className="container mx-auto pt-24">
          <p className="tracking-widest text-[#EA5514] text-subtitle">
            PROJECTS
          </p>
          <div className="w-[10px] border-b-[4px] border-[#EA5514] h-[16px]">
            &nbsp;
          </div>
          <div className="flex flex-col gap-8 mt-12 pb-16">
            <Link to="/project/finance">
              <ProjectPreviewCard
                imgURL={img_project_02}
                title="A+ In Finance"
                subTitle="Inclusive Design for ADHD Financial Management"
                concept="Financial Inclusion"
                content="How might young adults with ADHD manage symptoms and curb impulsive shopping behavior without years of learning?"
              />
            </Link>
            <Link to="/project/mob">
              <ProjectPreviewCard
                imgURL={img_project_01}
                title="Ministry of Biodiversity"
                subTitle="Strategy & Speculative Design for Policy with GDS"
                concept="Agricultural Policy Communication"
                content="How might the government effectively engage the general public and communicate environmental policies ?"
              />
            </Link>
            <Link to="/project/epq">
              <ProjectPreviewCard
                imgURL={img_project_03}
                title="EPQ Learning Journey"
                subTitle="Social Design for Non-traditional Education"
                concept="Social Action for A-level Qualifications"
                content="How might universities offer motivating sessions for individuals with addiction and former offenders to complete A-level qualifications and reintegrate into the workforce smoothly?"
              />
            </Link>
            <Link to="/project/medicy">
              <ProjectPreviewCard
                imgURL={img_project_04}
                title="MEDICY: NFT News Fantasy"
                subTitle="Strategy & Service Design for NFT Trading"
                concept="NFT Development Strategy"
                content="How might NFT traders simplify the process of NFT values evaluation without navigating multiple platforms and piecing together fragmented information?"
              />
            </Link>
            <Link to="/project/advantech">
              <ProjectPreviewCard
                imgURL={img_project_05}
                title="Integrated Tele-health Solution"
                subTitle="IoT Telemedicine Service Design"
                concept="Remote Medical Diagnosis Service"
                content="How might we seamlessly integrate the telemedical hardware and software to enable medical professionals to conduct more precise diagnoses and enhance communication experiences?"
              />
            </Link>
            <Link to="/project/utech">
              <ProjectPreviewCard
                imgURL={img_project_06}
                title="UTech"
                subTitle="Universal Design for Urine Analysis Toilet"
                concept="Operation Process for All-Age"
                content="How might we design a clear and intuitive user journey, enabling various users to operate the urine analysis toilet within 10 secs toileting time?"
              />
            </Link>
            <div className="text-center border-[1px] border-[#575757] text-[12px] p-6">
            For a better reading experience and details about the research and design process, please visit my website using a laptop or larger screen. Thank you!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
