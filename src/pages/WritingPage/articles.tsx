import img_blog_01 from "../../assets/img/blog01.png";
import img_blog_02 from "../../assets/img/blog02.png";
import img_blog_03 from "../../assets/img/blog03.png";
import img_blog_04 from "../../assets/img/blog04.png";

export interface ArticleBlock {
  type: "heading" | "paragraph" | "quote" | "list";
  text?: string;
  items?: string[];
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  tags: string[];
  imgURL: string;
  excerpt: string;
  content: ArticleBlock[];
  references?: string[];
  originalUrl: string;
}

export const articles: Article[] = [
  {
    id: "scenario-planning-ai",
    imgURL: img_blog_04,
    title: "The Creative Work in Scenario Planning That Can't Be Outsourced",
    subtitle: "Don't Rush to Ask AI for Ideation",
    date: "Jul 31, 2026",
    readTime: "4 min read",
    tags: ["Foresight", "Scenario", "AI", "Future", "AI Agent"],
    excerpt:
      "Don't rush to ask AI for ideation. Scenario planning has two modes of thinking, and only one of them is safe to hand over.",
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
      {
        type: "paragraph",
        text: "The question is when AI enters, and in what role.",
      },
      {
        type: "paragraph",
        text: "Generating a scenario draft with AI does lower the anxiety of writing and can speed up the process. However, the statistical inertia of LLMs, together with bias in their training data, means their default output can potentially fall back on common linguistic associations and 'popular' narratives. This does not mean AI cannot produce something novel. It means that when the first few steps of imagining are handed over, the frame AI offers may become an anchor for everything the team thinks afterwards.",
      },
      {
        type: "paragraph",
        text: "Before a team has really begun to diverge, it has already shifted from imagining different futures to editing the future the machine provided.",
      },
      {
        type: "paragraph",
        text: "What is more risky than creative fixation is the outsourcing of the learning process itself.",
      },
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
        type: "list",
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
    id: "financial-vulnerability",
    imgURL: img_blog_02,
    title: "What Financial Vulnerability Is",
    subtitle: "[ Design for Financial Inclusion #1 ] Background Research",
    date: "Apr 26, 2023",
    readTime: "6 min read",
    tags: ["Financial Vulnerability", "Service Design", "Banking"],
    excerpt: "Design for Financial Vulnerability #1: Background Research.",
    originalUrl:
      "https://medium.com/@SBSTN_WANG/what-financial-vulnerability-is-bd48d90b6ad6",
    content: [
      {
        type: "paragraph",
        text: "What is financial vulnerability? Why does it matter? How does it happen? Can service design help improve the issue?",
      },
      {
        type: "paragraph",
        text: "Financial vulnerability is a complex issue affecting individuals, societies, and even entire countries. The current economic crisis, exemplified by events such as the 2008 Financial crisis, COVID-19, the collapse of FTX, the bankruptcy of Silicon Valley Bank, and individual improper financial management behaviours, have gradually brought financial vulnerability to the forefront. Banking industries and governments recognize the importance of addressing this issue and collaborating with consultancies and service designers to tackle issues around it.",
      },
      {
        type: "paragraph",
        text: "As a service and strategy designer, I am curious about how and where design can assist. Therefore, I decided to write a series about design for financial vulnerability to share my research and insights. The first article will introduce financial vulnerability's definition, rationale, and significance.",
      },
      { type: "heading", text: "What is financial vulnerability? How does it happen?" },
      {
        type: "quote",
        text: "In 2022, 47% (24.6 million) of adults in the UK show characteristics of vulnerability in relation to financial services. (Financial Conduct Authority)",
      },
      {
        type: "paragraph",
        text: "What exactly is financial vulnerability? Why do nearly half of the adults in the UK exhibit financially vulnerable behaviour?",
      },
      {
        type: "paragraph",
        text: "Financial vulnerability is generally defined as the susceptibility to financial harm rather than being synonymous with poverty. This concept is commonly used to describe a household's ability and attitude toward coping with financial risks and shocks (Swain & Floro, 2007). Financial vulnerability can be attributed to immature income management, irrational financial behaviour, debt or legal issues, family circumstances, or even global events.",
      },
      {
        type: "paragraph",
        text: "The causes of financial vulnerability can be classified into two categories: external and internal factors. External factors include social, cultural, or technological environments. For instance, the convenience of microcredit applications or tempting commercial mechanisms like \"Buy Now Pay Later\" can gradually change people's behaviour and increase the risk of financial vulnerability for consumers. Additionally, unexpected disasters, such as the COVID-19 pandemic, can intensify social marginalization and vulnerability.",
      },
      {
        type: "paragraph",
        text: "Internal factors refer to the impact of an individual's lifestyle, knowledge, or mindset. The Financial Conduct Authority (FCA) has identified four categories of rationales: Health, Life Events, Resilience, and Capability. Whether a person is considered financially vulnerable depends on their ability to navigate these internal and external factors smoothly. Ultimately, financial vulnerability is related to various aspects of one's daily life and has a significant impact on their well-being.",
      },
      {
        type: "quote",
        text: "Vulnerability can come in a range of guises… it is a fluid state that needs a flexible, tailored response from firms. (FCA)",
      },
      {
        type: "paragraph",
        text: "To identify financial vulnerability, authorities use quantitative and qualitative research to analyze people's attitudes, behaviours, and abilities. However, one of the major challenges in identifying financial vulnerability is that not everyone who displays vulnerability characteristics is vulnerable, and some vulnerable individuals may not even realize their vulnerability. Additionally, the vulnerability status can change over time, making it challenging to detect and address.",
      },
      {
        type: "paragraph",
        text: "Furthermore, the problem of financial vulnerability is becoming more severe. According to research by the FCA, the number of UK adults with low financial resilience increased to 12.9 million in 2022, 2.2 million more than in 2020. This means that for every four British adults, at least one cannot cope with a £50 reduction in their monthly income or losing their main source of household income for even a week. Unfortunately, these circumstances are complex and challenging to eliminate.",
      },
      { type: "heading", text: "Why is financial vulnerability important?" },
      {
        type: "paragraph",
        text: "This pervasive issue has many impacts on various industries. I will mainly explain its importance from the perspective of three core stakeholders: individuals, governments, and banks.",
      },
      { type: "heading", text: "For Individuals" },
      {
        type: "paragraph",
        text: "Financial vulnerability can have both acute and chronic impacts on individuals. It may make it difficult for them to meet their basic needs, leading to highly stressful and anxiety-inducing situations. Moreover, it can marginalize these vulnerable people, making it impossible for them to afford social activities or causing them to feel ashamed or embarrassed about their financial situation. Such perceptual barriers (Dahling, Melloy and Thompson, 2013) can make them reluctant to seek financial advice or support, limit their opportunities for education, training, or employment, and further perpetuate the vicious cycle of financial vulnerability.",
      },
      { type: "heading", text: "For Governments" },
      {
        type: "paragraph",
        text: "The issue of financial vulnerability is indicative of the economic instability of society. By studying financial vulnerability, governments can identify social phenomena such as financial abuse, erratic incomes, and low emotional resilience. Based on this research, governments can adjust policies and formulate new prudent fiscal strategies to stabilize the economy.",
      },
      {
        type: "paragraph",
        text: "Many government agencies attach great importance to researching financial vulnerability. For example, the FCA regularly surveys people's financial lives in the UK and discusses how international trends and lifestyle changes impact their finances. Additionally, the Department for Work and Pensions (DWP) has developed toolkits to assist businesses in identifying and addressing issues of financial vulnerability.",
      },
      { type: "heading", text: "For Banks" },
      {
        type: "paragraph",
        text: "The banking industry is directly impacted by financial vulnerability, and helping vulnerable groups is both a moral imperative and a strategic business decision for banks. Here are the three main reasons why this issue is essential for banks:",
      },
      {
        type: "list",
        items: [
          "Social Responsibility — Banks are responsible for supporting their communities and can fulfill this by helping vulnerable groups. Banks can improve their brand image by providing financial assistance, education, and resources and building stronger relationships with customers who value social responsibility.",
          "Regulatory Compliance — Law or regulatory bodies (e.g. FCA) may require banks to provide financial assistance and support to vulnerable groups. Compliance is essential for maintaining a bank's operating license and avoiding legal and financial penalties, while promoting financial inclusion and a more stable financial system.",
          "Business Opportunities — Assisting vulnerable groups can offer banks new business opportunities, such as providing microfinance loans to small businesses or offering financial consultation to low-income families, which can expand their customer base and increase revenue.",
        ],
      },
      { type: "heading", text: "Insights & Next" },
      {
        type: "paragraph",
        text: "Financial vulnerability is a complex and multifaceted issue that requires further investigation. Many organizational, systemic, and individual psychological issues deserve more identification, making me consider integrating service design, behavioural economics, and business management. Before implementing any design solutions, much research still needs to be conducted!",
      },
      {
        type: "paragraph",
        text: "Thanks for your reading! This is Hao's viewpoint, and How's yours? Feel free to comment and discuss financial vulnerability with me!",
      },
    ],
    references: [
      "Dahling, J.J., Melloy, R. and Thompson, M.N. (2013) 'Financial strain and regional unemployment as barriers to job search self-efficacy: A test of social cognitive career theory', Journal of Counseling Psychology, 60, pp. 210–218.",
      "EY Seren (2022) Bridging the Financial Vulnerability Gap.",
      "FCA (2022) Financial Lives 2022 survey: insights on vulnerability and financial resilience relevant to the rising cost of living.",
      "FCA (2021) Guidance for firms on the fair treatment of vulnerable customers.",
      "Lloyds (2022) 2022 Consumer Digital Index.",
      "Swain, R.B. and Floro, M. (2012) 'Assessing the Effect of Microfinance on Vulnerability and Poverty among Low Income Households', The Journal of Development Studies, 48(5), pp. 605–618.",
    ],
  },
  {
    id: "inclusive-design",
    imgURL: img_blog_01,
    title: "Inclusive Design: De-label! Blur the Boundary!",
    subtitle: "How I Implement Inclusive Design",
    date: "Apr 12, 2024",
    readTime: "5 min read",
    tags: [
      "Inclusive Design",
      "ADHD",
      "Financial Inclusion",
      "Service Design",
      "Accessibility",
    ],
    excerpt: "How I implement inclusive design.",
    originalUrl:
      "https://medium.com/design-bootcamp/inclusive-design-de-label-blur-the-boundary-cc2b06253644",
    content: [
      {
        type: "paragraph",
        text: "Inclusive design is commonly recognised as an important design realm that ensures services or products are fair and accessible to most users. Despite some variance in the definition, execution, and assessment of inclusivity, I reckon that inclusive design approaches share the same ultimate goal: to de-label.",
      },
      {
        type: "quote",
        text: "An inclusive group or organization tries to include many different types of people and treat them all fairly and equally. — Cambridge Dictionary",
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
        text: "Regardless of the underlying reasons, when users hit a snag while using a service, they often feel labelled as \"someone who can't complete the verification.\" Moreover, they may even slap themselves with another label as they realize the reason behind the unfinished service journey. Like my mom, holding her phone, who often remarks, \"I'm getting old; I just can't remember the number and all the steps.\" The labels stemming from the service experience make users feel like the service isn't designed smoothly enough and may further deepen their self-doubt about their abilities.",
      },
      {
        type: "heading",
        text: 'Design for them without making them feel it\'s designed "for" them',
      },
      {
        type: "paragraph",
        text: "To address the verification code issue, some may suggest an \"I want more time\" option, which seems intuitive but isn't ideal. This approach could still label the user. The reason is that users can sense that they are treated specially: not in a positive VIP sense, but somewhat alienated. While such an extra option may seem considerate from the developers' perspective, it could stigmatize users. They might question why they need more time when others don't, why they can't behave like normal users, or if selecting that option makes them seem strange. How can designers eliminate these labels and ensure users enjoy the service journey comfortably? One inclusive approach I employ is to blur the boundaries.",
      },
      { type: "heading", text: "Blur the boundary: solve for one, extend to many" },
      {
        type: "paragraph",
        text: '"Blurring the boundary" expands the scope of user scenarios. This approach can prevent users from feeling labelled by a service, avoiding situations where they might think, "Oh, this function is designed for me, who is not good at using mobile phones." Microsoft offers numerous straightforward yet inclusive examples to illustrate this concept. Designers can start by focusing on users with permanent constraints and then consider how those with temporary or situational constraints can also benefit. By embracing the "solve for one, extend to many" approach, services can cater to a broader range of user groups and provide more emotional value. This avoids singling out specific users and fosters a more inclusive and comfortable user experience.',
      },
      { type: "heading", text: "My Practice In Design" },
      {
        type: "paragraph",
        text: "In my service design project focusing on dopamine and financial management for young adults with ADHD, I prioritized implementing de-labelling and blurring the boundary. The resulting tool helps users identify dopamine activities and redirect their attention from impulsive shopping. While the service initially targeted individuals with ADHD, it eventually benefited anyone prone to online impulsive shopping. This inclusive approach allows all users to practice controlling and redirecting dopamine-driven impulses, promoting healthier financial habits. By avoiding labels and ensuring broad accessibility, users won't feel the service was \"designed for ADHD\" or make them think, \"Oh right, you remind me that I'm an ADHDer.\"",
      },
      {
        type: "paragraph",
        text: "It's worth noting that inclusive design must extend from the inside out. Attempting to design a product from the outset that caters to the majority often results in a vaguely positioned design.",
      },
      { type: "heading", text: "Overall" },
      {
        type: "paragraph",
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
    imgURL: img_blog_03,
    title: "Research through Design: The Spirit of Iteration",
    subtitle:
      "Design Process Reflection: The Relationship between Design and Research",
    date: "May 3, 2023",
    readTime: "4 min read",
    tags: [
      "Design Futures",
      "Design Research",
      "Research Through Design",
      "Iteration",
      "Service Design",
    ],
    excerpt: "The relationship between design and research.",
    originalUrl:
      "https://medium.com/design-bootcamp/research-through-design-the-spirit-of-iteration-7af98ee546b7",
    content: [
      {
        type: "paragraph",
        text: "Research through Design (RtD) works as research methods and practices that could effectively address the challenges and complexities of design progress. Christopher Frayling, a design scholar at the Royal College of Art, originally introduced the notion. He categorized design research into three types: Research INTO Design, Research FOR Design, and Research THROUGH Design. Before discussing the value of RtD, let me first explain the distinctions among these three types of design research.",
      },
      { type: "heading", text: 'Research "into" Design' },
      {
        type: "paragraph",
        text: "A basic understanding of this concept involves research that explores the design process. This may include studies on the design process itself, research on idea generation, or books discussing creativity.",
      },
      { type: "heading", text: 'Research "for" Design' },
      {
        type: "quote",
        text: "This is the 'gathering of reference materials' that culminate in the form of a product. — C. Frayling",
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
        text: "RtD is to utilize design to acquire knowledge beyond the realm of the design itself. It allows for observing stakeholders' reactions and examining design concepts. To me, it embodies the essence of design iteration and prototyping. Designers can obtain more authentic feedback to refine the concepts when individuals can physically interact with, manipulate, or discuss design ideas.",
      },
      { type: "heading", text: "The Process of Research and Design" },
      {
        type: "paragraph",
        text: "Research for Design and Research through Design is typically integrated into empirical design disciplines such as Interactive Design, Product Design, or Critical Design. Service designers also employ these approaches in a more systematic context, though the objects or focus of the design process differ.",
      },
      {
        type: "paragraph",
        text: 'To illustrate, let\'s consider my Design Futures project. Initially, my team generated numerous concepts and prototypes from a "more-than-human" perspective, such as envisioning Airbnb with foxes or creating Microbe Park. We soon realized that people engaged more effectively when the narrative of biodiversity future included a governmental organization. Thus, we "established" the Ministry of Biodiversity, developing policies and measures based on this fictional government to interact with people. Through the application of Research for Design and Research through Design, my team was able to iteratively refine concepts and discover more effective ways to stimulate conversations and promote reflection.',
      },
      { type: "heading", text: "So, what is the value of RtD?" },
      {
        type: "paragraph",
        text: "Avoid biases, make design participatory and inclusive, and gain the awareness of iteration.",
      },
      {
        type: "paragraph",
        text: 'Design can serve not only as an outcome but also as a medium for further design exploration. RtD enables designers to transcend biases and notions like "I need to perfect my design before sharing it with others" or "There is already ample research to create a well-rounded design." By embracing the concept of RtD, design can go beyond a specialty to make the world convenient and friendly. It becomes a powerful tool for unearthing people\'s hidden thoughts and implicit values.',
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
];

export default articles;
