import img_blog_04 from "../../assets/img/blog04.png";
import img_cla_card from "../../assets/img/blog_cla/cla_card.jpg";
import img_cla_cover from "../../assets/img/blog_cla/cla_cover.jpg";
import img_cla_1 from "../../assets/img/blog_cla/cla_1.jpg";
import img_cla_2 from "../../assets/img/blog_cla/cla_2.jpg";
import img_cla_3 from "../../assets/img/blog_cla/cla_3.jpg";
import img_cla_4 from "../../assets/img/blog_cla/cla_4.jpg";
import img_cla_5 from "../../assets/img/blog_cla/cla_5.jpg";
import img_cla_6 from "../../assets/img/blog_cla/cla_6.jpg";
import img_cla_7 from "../../assets/img/blog_cla/cla_7.jpg";
import img_inc_cover from "../../assets/img/blog_inclusive/inc_cover.jpg";
import img_inc_card from "../../assets/img/blog_inclusive/inc_card.jpg";
import img_inc_1 from "../../assets/img/blog_inclusive/inc_1.jpg";
import img_inc_2 from "../../assets/img/blog_inclusive/inc_2.jpg";
import img_inc_3 from "../../assets/img/blog_inclusive/inc_3.jpg";
import img_inc_4 from "../../assets/img/blog_inclusive/inc_4.jpg";
import img_rtd_cover from "../../assets/img/blog_rtd/rtd_cover.jpg";
import img_rtd_1 from "../../assets/img/blog_rtd/rtd_1.jpg";
import img_rtd_2 from "../../assets/img/blog_rtd/rtd_2.jpg";
import img_rtd_3 from "../../assets/img/blog_rtd/rtd_3.jpg";
import img_rtd_4 from "../../assets/img/blog_rtd/rtd_4.jpg";
import img_rtd_5 from "../../assets/img/blog_rtd/rtd_5.jpg";
import img_rtd_6 from "../../assets/img/blog_rtd/rtd_6.jpg";

export interface ArticleBlock {
  type: "heading" | "paragraph" | "quote" | "list" | "image";
  text?: string;
  items?: string[];
  images?: string[]; // "image" blocks: one, or several side by side
  caption?: string;
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  tags: string[];
  imgURL: string;
  // CSS object-position for the list-card thumbnail, when the default
  // centre crop leaves too much empty space
  cardImgPosition?: string;
  // A different image for the list-card thumbnail; shown whole (contain)
  // rather than cropped, for diagrams with text in them
  cardImgURL?: string;
  excerpt: string;
  content: ArticleBlock[];
  references?: string[];
  originalUrl: string;
}

export const articles: Article[] = [
  {
    id: "scenario-planning-ai",
    imgURL: img_blog_04,
    title: "Creative Works in Scenario Planning That Can't Be Outsourced",
    subtitle: "Don't Rush to Ask AI for Ideation",
    date: "Jul 31, 2026",
    readTime: "4 min read",
    tags: ["Foresight", "Scenario", "AI Agent"],
    excerpt: "Don't Rush to Ask AI for Ideation",
    originalUrl:
      "https://medium.com/@SBSTN_WANG/dont-rush-to-ask-ai-for-foresight-a1bbd720fd79",
    content: [
      {
        type: "paragraph",
        text: "AI has moved into professional fields faster than most of them could work out how to judge its use, and it is already embedded in everyday work, including scenario planning.",
      },
      {
        type: "paragraph",
        text: "In 2025, the World Economic Forum and the OECD surveyed 167 foresight practitioners across 55 countries and found that two-thirds already use AI in foresight. Among those users, the most common applications are trend analysis and clustering (69%), scenario development (63%) and horizon scanning (60%).",
      },
      {
        type: "paragraph",
        text: "I use AI in my foresight research as well: build agentic routines to explore and organise large volumes of scanning material, and use tools like Claude Skills to maintain research records, challenge scenarios and surface contradictions I might have missed, often before the coffee kettle boils.",
      },
      {
        type: "paragraph",
        text: "The development of AI has made the future feel more tangible, and made people more willing to talk about it. But it keeps bringing me back to one question:",
      },
      {
        type: "quote",
        text: "If scenarios are a medium for generating insight, challenging assumptions and supporting strategy making, does outsourcing the development process to AI reduce the chances of reaching insight?",
      },
      {
        type: "paragraph",
        text: "Scenario planning involves two modes of thinking.",
      },
      {
        type: "paragraph",
        text: "The first is analysis and sensemaking: scanning signals, identifying change, and working out the critical uncertainties and assumptions.",
      },
      {
        type: "paragraph",
        text: "The second is creative imagination and narrative construction: recombining those uncertainties into a narrative sharp enough to challenge what an organisation already believes, and to change the direction of its strategy.",
      },
      {
        type: "paragraph",
        text: "AI genuinely performs well in parts of the first one, though hallucination and source reliability still need to be examined manually.",
      },
      {
        type: "paragraph",
        text: "Now people are bringing AI into the second mode as well: helping teams brainstorm and build new connections between conflicting signals, assumptions and worldviews, establish causal relationships, and turn them into full scenario narratives.",
      },
      { type: "heading", text: "The question is when AI enters, and in what role." },
      {
        type: "paragraph",
        text: "Generating a scenario draft with AI does lower the anxiety of writing and can speed up the process. However, the statistical inertia of LLMs, together with bias in their training data, means their default output can potentially fall back on common linguistic associations and 'popular' narratives. This does not mean AI cannot produce something novel. It means that when the first few steps of imagining are handed over, the frame AI offers may become an anchor for everything the team thinks afterwards.",
      },
      {
        type: "paragraph",
        text: "Before a team has really begun to diverge, it has already shifted from imagining different futures to editing the future the machine provided.",
      },
      { type: "heading", text: "What is more risky than creative fixation is the outsourcing of the learning process itself." },
      {
        type: "paragraph",
        text: "Scenario planning is not just about producing a final set of scenarios. It is also a participatory intervention. Many of the a-ha moments happen while reading, listening, observing, arguing and reinterpreting. (That's also why I enjoy participating in and facilitating forums and workshops where people come together to discuss possible futures.)",
      },
      {
        type: "paragraph",
        text: "People gather and lay out all kinds of signals and trends, and try to understand the conflicts of value, assumption and emotion sitting behind them. Different people read the same material differently, drawing on their own experience, and the scenarios are iterated through those conversations.",
      },
      {
        type: "paragraph",
        text: "These processes are not just about getting to an answer. They give a team a space to share opinions and revisit its own assumptions, and build ownership of the strategic choices that follow. If interpretation and sensemaking are frequently outsourced to AI, a team may well end up with a comprehensive report, without necessarily gaining the learning and insight that the process itself would have produced.",
      },
      { type: "heading", text: "Don't rush to the answer" },
      {
        type: "paragraph",
        text: "Using AI is becoming as natural as searching on Google or scrolling social media. As information gets easier to reach, people may be less comfortable staying in a state of 'not knowing', and more impatient for an answer.",
      },
      {
        type: "paragraph",
        text: "But in foresight, uncertainty itself is the material we work with. That is precisely why resisting the urge to turn to AI for an answer too early may become an increasingly important capability for foresight practitioners in this era.",
      },
      {
        type: "paragraph",
        text: "Doing scenario planning in the age of AI, I think we need to keep asking ourselves:",
      },
      {
        type: "quote",
        items: [
          "If we did this work ourselves, what would we learn?",
          "Do we need efficiency and convergence right now, or friction and divergence?",
        ],
      },
      {
        type: "paragraph",
        text: "Scenario planning should still be human-centred in the AI era. Let people observe, interpret and diverge first. Then bring AI in to widen the range of evidence, challenge the logic, and inspire more possibilities for human imagination and conversation.",
      },
    ],
  },
  {
    id: "inclusive-design",
    imgURL: img_inc_cover,
    cardImgURL: img_inc_card,
    title: "Inclusive Design: De-label! Blur the Boundary!",
    subtitle: "How I Implement Inclusive Design",
    date: "Apr 12, 2024",
    readTime: "5 min read",
    tags: ["Inclusive Design", "Financial Inclusion", "Neurodivergent"],
    excerpt: "How I Implement Inclusive Design",
    originalUrl:
      "https://medium.com/design-bootcamp/inclusive-design-de-label-blur-the-boundary-cc2b06253644",
    content: [
      { type: "heading", text: "The Ultimate Goal of Inclusive Design" },
      {
        type: "paragraph",
        text: "Inclusive design is commonly recognised as an important design realm that ensures services or products are fair and accessible to most users. Despite some variance in the definition, execution, and assessment of inclusivity, I reckon that inclusive design approaches share the same ultimate goal: to de-label.",
      },
      { type: "image", images: [img_inc_1] },
      {
        type: "heading",
        text: "De-labelling: peeling off users' labels when using the service",
      },
      {
        type: "quote",
        text: "An inclusive group or organisation tries to include many different types of people and treat them all fairly and equally. — Cambridge Dictionary",
      },
      {
        type: "paragraph",
        text: "As defined by the dictionary, inclusive aims to embrace a wide range of people. However, people are incredibly diverse, and so are the labels attached to them. That's why designers must make an effort and \"try\" to be inclusive and prevent users from feeling labelled when interacting with services.",
      },
      {
        type: "paragraph",
        text: "Take the verification process for online banking as an example. Users may encounter the frustration of finding the verification code expired when they attempt to log in via the mobile app, jot down the code, and return to their computers. Some may conclude, \"Oh, the user must struggle with mobile phones.\" But let's pause and consider: could other factors be at play? Perhaps the user has an injured hand, or they're on a slower internet connection, or maybe they find it challenging to recall the code.",
      },
      {
        type: "paragraph",
        text: "Regardless of the underlying reasons, when users hit a snag while using a service, they often feel labelled as \"someone who can't complete the verification.\" Moreover, they may even slap themselves with another label as they realise the reason behind the unfinished service journey. Like my mum, holding her phone, who often remarks, \"I'm getting old; I just can't remember the number and all the steps.\" The labels stemming from the service experience make users feel like the service isn't designed smoothly enough and may further deepen their self-doubt about their abilities.",
      },
      {
        type: "heading",
        text: 'Design for them without making them feel it\'s designed "for" them',
      },
      {
        type: "paragraph",
        text: "To address the verification code issue, some may suggest an \"I want more time\" option, which seems intuitive but isn't ideal. This approach could still label the user. The reason is that users can sense that they are treated specially: not in a positive VIP sense, but somewhat alienated. While such an extra option may seem considerate from the developers' perspective, it could stigmatise users. They might question why they need more time when others don't, why they can't behave like normal users, or if selecting that option makes them seem strange. How can designers eliminate these labels and ensure users enjoy the service journey comfortably? One inclusive approach I employ is to blur the boundaries.",
      },
      { type: "heading", text: "Blur the boundary: solve for one, extend to many" },
      {
        type: "paragraph",
        text: '"Blurring the boundary" expands the scope of user scenarios. This approach can prevent users from feeling labelled by a service, avoiding situations where they might think, "Oh, this function is designed for me, who is not good at using mobile phones." Microsoft offers numerous straightforward yet inclusive examples to illustrate this concept (Figure below). Designers can start by focusing on users with permanent constraints and then consider how those with temporary or situational constraints can also benefit. By embracing the "solve for one, extend to many" approach, services can cater to a broader range of user groups and provide more emotional value. This avoids singling out specific users and fosters a more inclusive and comfortable user experience.',
      },
      {
        type: "image",
        images: [img_inc_2, img_inc_3],
        caption: "Microsoft Inclusive Design: The Persona Spectrum",
      },
      { type: "heading", text: "My Practice In Design" },
      {
        type: "paragraph",
        text: "In my service design project focusing on dopamine and financial management for young adults with ADHD, I prioritised implementing de-labelling and blurring the boundary. The resulting tool helps users identify dopamine activities and redirect their attention from impulsive shopping. While the service initially targeted individuals with ADHD, it eventually benefited anyone prone to online impulsive shopping. This inclusive approach allows all users to practise controlling and redirecting dopamine-driven impulses, promoting healthier financial habits. By avoiding labels and ensuring broad accessibility, users won't feel the service was \"designed for ADHD\" or make them think, \"Oh right, you remind me that I'm an ADHDer.\"",
      },
      {
        type: "image",
        images: [img_inc_4],
        caption:
          "It's worth noting that inclusive design must extend from the inside out. Attempting to design a product from the outset that caters to the majority often results in a vaguely positioned design.",
      },
      { type: "heading", text: "Overall" },
      {
        type: "quote",
        text: "As humans, we're inevitably tied to labels. Embracing these labels is a lesson for life. Yet, as an inclusive designer, I aim to create services that refrain from adding more labels and, ideally, even remove the ones users already bear.",
      },
      {
        type: "paragraph",
        text: "I reckon the ultimate goal of inclusive design is de-labelling, ensuring that users don't feel inferior about their condition when using a service. The practical approach is to blur the boundaries, extending usage scenarios and including a broader range of users. I imagine inclusive design to be akin to the air we breathe. It doesn't need to shout out loud for its presence, yet all designers and service providers acknowledge its significance and understand its necessity to be omnipresent. Only in this way can users truly experience services with comfort and seamlessness.",
      },
      {
        type: "paragraph",
        text: "Thanks for your reading! This is Hao's viewpoint, and How's yours? Feel free to comment and discuss inclusive design with me!",
      },
    ],
  },
  {
    id: "research-through-design",
    imgURL: img_rtd_cover,
    cardImgPosition: "80% 50%", // show more of the people, less blank paper
    title: "Research through Design: The Spirit of Iteration",
    subtitle:
      "Design Process Reflection: The Relationship between Design and Research",
    date: "May 3, 2023",
    readTime: "4 min read",
    tags: ["Design Research", "Research Through Design", "Iteration"],
    excerpt: "The Relationship between Design and Research",
    originalUrl:
      "https://medium.com/design-bootcamp/research-through-design-the-spirit-of-iteration-7af98ee546b7",
    content: [
      { type: "heading", text: "What is Research through Design (RtD)?" },
      {
        type: "paragraph",
        text: "Research through Design (RtD) works as research methods and practices that could effectively address the challenges and complexities of design progress. Christopher Frayling, a design scholar at the Royal College of Art, originally introduced the notion. He categorised design research into three types:",
      },
      {
        type: "list",
        items: [
          "Research INTO Design",
          "Research FOR Design",
          "Research THROUGH Design",
        ],
      },
      {
        type: "paragraph",
        text: "Before discussing the value of RtD, let me first explain the distinctions among these three types of design research.",
      },
      { type: "heading", text: 'Research "into" Design' },
      {
        type: "paragraph",
        text: "A basic understanding of this concept involves research that explores the design process. This may include, for example, studies on the design process itself or research on idea generation.",
      },
      { type: "heading", text: 'Research "for" Design' },
      {
        type: "quote",
        text: 'This is the "gathering of reference materials" that culminate in the form of a product. — C. Frayling',
      },
      {
        type: "paragraph",
        text: "Research for Design describes the process of knowledge-finding and analysis for designers to ensure that their outcomes are based on scientific and rational foundations. For instance, designers often read ergonomics research before embarking on product design. Additionally, designers may interview stakeholders or invite them to workshops to gather their insights.",
      },
      {
        type: "paragraph",
        text: "However, based on my experience, this type of research may be susceptible to certain biases. An example is confirmation bias (Kahneman et al., 2021; Sibony, 2021), which refers to individuals' tendency to find information that supports their thoughts. This bias is commonly observed in design research (Junge, 2022). Hence, there is a need for Research through Design to reduce these concerns.",
      },
      { type: "heading", text: 'Research "through" Design' },
      {
        type: "quote",
        text: "Taking design as a particular way of thinking, and a particular approach to knowledge, which helps you understand certain things that exist outside design. — C. Frayling",
      },
      {
        type: "paragraph",
        text: "RtD is to utilise design to acquire knowledge beyond the realm of the design itself. It allows for observing stakeholders' reactions and examining design concepts.",
      },
      {
        type: "paragraph",
        text: "To me, it embodies the essence of design iteration and prototyping. Designers can obtain more authentic feedback to refine the concepts when individuals can physically interact with, manipulate, or discuss design ideas (Figure 1).",
      },
      {
        type: "image",
        images: [img_rtd_1],
        caption: "Figure 1 Interact with people to observe their reaction",
      },
      { type: "heading", text: "The Process of Research and Design" },
      {
        type: "paragraph",
        text: "Research for Design and Research through Design is typically integrated into empirical design disciplines such as Interactive Design, Product Design, or Critical Design (Figure 2).",
      },
      {
        type: "image",
        images: [img_rtd_2],
        caption:
          "Figure 2 The General Design Process of Research and Design (Adapted from Soegaard et al., 2013)",
      },
      {
        type: "paragraph",
        text: "Service designers also employ these approaches in a more systematic context. Besides, the objects or focus of the design process differ (Figure 3).",
      },
      {
        type: "image",
        images: [img_rtd_3],
        caption:
          "Figure 3 My Team's Design Future Process in Service Design (Adapted from Soegaard et al., 2013)",
      },
      {
        type: "paragraph",
        text: 'To illustrate, let\'s consider my Design Futures project. Initially, my team generated numerous concepts and prototypes from a "more-than-human" perspective, such as envisioning Airbnb with foxes or creating Microbe Park (Figure 4). We soon realised that people engaged more effectively when the narrative of biodiversity future included a governmental organisation (Figure 5). Thus, we "established" the Ministry of Biodiversity, developing policies and measures based on this fictional government to interact with people. Through the application of Research for Design and Research through Design, my team was able to iteratively refine concepts (Figure 6) and discover more effective ways to stimulate conversations and promote reflection.',
      },
      {
        type: "image",
        images: [img_rtd_4, img_rtd_5],
        caption:
          "Figure 4 Microbe Park / Figure 5 The Letter from the Ministry of Biodiversity",
      },
      {
        type: "image",
        images: [img_rtd_6],
        caption:
          "Figure 6 Based on people's reactions and feedback, my team iterated the maps of the Recover Season.",
      },
      { type: "heading", text: "So, what is the value of RtD?" },
      {
        type: "quote",
        text: "Avoid biases, make design participatory and inclusive, and gain the awareness of iteration.",
      },
      {
        type: "paragraph",
        text: 'Design can serve not only as an outcome but also as a medium for further design exploration. RtD enables designers to transcend biases and notions like "I need to perfect my design before sharing it with others" or "There is already ample research to create a well-rounded design." By embracing the concept of RtD, design can go beyond a speciality to make the world convenient and friendly. It becomes a powerful tool for unearthing people\'s hidden thoughts and implicit values.',
      },
    ],
    references: [
      "Baytaş, M. A. (2022, December 8). The Three Faces of Design Research. Design Disciplin.",
      "Frayling, C. (1993). Research in Art and Design. Royal College of Art.",
      "Junge, J. (2022). Confirmation bias in UX. Nielsen Norman Group.",
      "Kahneman, D., Sibony, O., & Sunstein, C. R. (2021). Noise: A flaw in human judgment. Little, Brown Spark.",
      "Sibony, O. (2021). You're about to make a terrible mistake!: How biases distort decision-making and what you can do to fight them. Swift Press.",
      "Soegaard, M., & Dam, R. F. (2013). Research through Design. In Encyclopedia of Human-Computer Interaction. Interaction Design Foundation.",
    ],
  },
  {
    id: "causal-layered-analysis",
    imgURL: img_cla_cover,
    cardImgURL: img_cla_card,
    title: "Envisage Futures by Causal Layered Analysis",
    subtitle: "Case Study: UNHCR Refugee Project",
    date: "Apr 14, 2023",
    readTime: "4 min read",
    tags: ["Design Research", "Speculative Design", "Causal Layered Analysis"],
    excerpt: "Case Study: UNHCR Refugee Project",
    originalUrl:
      "https://medium.com/@SBSTN_WANG/envisage-futures-by-causal-layered-analysis-e309b542221",
    content: [
      { type: "heading", text: "What is Causal Layered Analysis?" },
      {
        type: "paragraph",
        text: "Causal Layered Analysis (CLA) is a research method developed by futurist Sohail Inayatullah in 1998 (Figure 1). It is frequently utilised in Design Future to assist designers in investigating issues and constructing nuanced future scenarios. I divide CLA in Design Future into three phases: present analysis, value transformation, and future development (Figure 2). Initially, designers identify the root causes of issues or phenomena and probe the underlying assumptions and values of the present world by analysing four different layers. Then, they utilise the current myth or metaphor to envision what values, cultures, or attitudes will emerge or shift in their designed future time frame. Following this, designers explore specific systems or policies that will support the new world and imagine scenarios that may arise. Eventually, stakeholders can compare the present and the future narratives to create new strategies to encourage/prevent the future. Using CLA, designers can expand diverse alternative futures based on trends or signals today (Figure 3). This article presents the United Nations High Commissioner for Refugees' project about the refugee life in 2040 (Zaidi, 2022) as a case study to examine how CLA is applied in the Design Future process and the value of CLA.",
      },
      {
        type: "image",
        images: [img_cla_1, img_cla_2],
        caption:
          "Figure 1 Four Layers of Causal Layered Analysis (adapted from Inayatullah, 1998) / Figure 2 Three Phases of CLA in Design Future",
      },
      {
        type: "image",
        images: [img_cla_3],
        caption:
          "Figure 3 Different evidence may create different futures. (adapted from Voros, 2001)",
      },
      { type: "heading", text: "How does UNHCR design futures by CLA?" },
      {
        type: "paragraph",
        text: 'The project creates four future archetypes for 2040 based on evidence and current refugee narratives after conducting workshops and CLA for refugee issues (Figures 4 & 5). The four futures aim to provoke new thinking and potential strategies for the UNHCR and its partners. For example, everything is strictly controlled in the "Discipline" future due to overpopulation and resource scarcity, from food portions to the distance they can travel and the amount of time they are allowed online. Surveillance technology is pervasive, and wars and conflicts have shifted to cyberspace. This future presents questions and potential strategies for the UNHCR to prevent such a dire outcome (Figure 6). Difficulties and plans are also formulated for other flourishing futures. By designing futures, authorities can consider altering current systems to steer towards a more desirable future and even evaluate how preferable it can be.',
      },
      {
        type: "image",
        images: [img_cla_4, img_cla_5],
        caption:
          "Figure 4 UNHCR's Design Process / Figure 5 Causal Layered Analysis for Refugees (Source: UNHCR)",
      },
      {
        type: "image",
        images: [img_cla_6],
        caption:
          "Figure 6 Questions and Strategies for UNHCR's Discipline Future (Source: UNHCR)",
      },
      { type: "heading", text: "The Value of CLA in Design Future" },
      {
        type: "quote",
        text: "In Design Future, future scenarios are songs, and present signals are notes. Future scenarios should be fulfilled with current signals of change.",
      },
      {
        type: "paragraph",
        text: "Overall, CLA is a practical analysis tool for designers to gather existing evidence and identify signals of change. Before utilising CLA, I often tried to imagine future scenarios and consider what might happen based on simple resources, such as news or reports directly (Figure 7). However, gaining insights from those futures was difficult since the thinking context was superficial. With CLA's scientific data inquiry and logical interpretation, designers and authorities can comprehensively identify impact factors and construct evidence-based futures. This helps them consider what else is possible and how they can change their approach in the present.",
      },
      {
        type: "image",
        images: [img_cla_7],
        caption: "Figure 7 Common Thinking Mistake in Design Future",
      },
    ],
    references: [
      "Dufva, M. (2019). What is a weak signal?",
      "Fredström, L. (2021). Reimagining climate futures: Using critical futures studies to explore scenarios for Ljungby municipality in Sweden. Stockholm Resilience Centre. pp. 12",
      "Inayatullah, S. (1998). Causal Layered Analysis: Poststructuralism as method, Futures, 30(8), pp.815–829",
      "Lipsett, I. (2020). Using Causal Layered Analysis for Transformational Change.",
      "Taleb, N. (2012). Antifragile: Things that gain from disorder. Random House.",
      "Zaidi, L. (2022). New Frontiers: The Future Narratives of Refugee Crises.",
    ],
  },
];

export default articles;
