import { CourseItem, CoreCompetency, EmphasisCompetency } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "Jake",
  fullName: "Jake Andrews",
  handle: "@Jake",
  degree: "M.S. in Information and Communication Technologies",
  university: "University of Wisconsin-Stout (UW-Stout)",
  programUrl: "https://www.uwstout.edu/programs/ms-information-communication-technologies",
  mascot: "Blue Devils",
  location: "704 Pirate Island Rd. Monona, WI 53716",
  phone: "(715) 617-2471",
  email: "jake@avalon.dev",
  resumeUrl: "https://www.avalon.dev/cv",
  avalonHomeUrl: "https://www.avalon.dev",
  reflectionAidUrl: "https://drive.google.com/file/d/1MFYHEJpY1QnU9W5UxU4cTgSPqagwu0Hb/view?usp=drive_link",
  bio: `I'm Jake, a Northern WI native with a background in tourism from restaurants to campsites, though my passion lies in technology. From networking and coding to support and engineering, I've gained valuable experience helping people connect and find information. Currently residing in Madison, WI, I work for a not-for-profit insurance company, specializing in Office 365. My resume can be found on Avalon.dev. Beyond work, I indulge in House music, alpha chill, and enjoy walking and exercising. If you'd like to get in touch, visit my contact form/page or reach out via text, call, or email. I'm also planning to blog more while organizing my papers and preparing for graduate-level courses and certificates in the near future! This portfolio was produced while a student at UW-Stout in the M.S. ICT program: About the Program - Go Blue Devils!`,
  images: {
    blueDevilHero: "https://images.squarespace-cdn.com/content/v1/65594014335cfa705974cf81/d4ca06ab-30a5-4c36-9985-296664301f28/gestalt3747_full_body_display_of_digital_hacker_blue_devil_hold_4e52af0b-c6ae-41f4-9c97-17053e4215cc.png",
    uwStoutLogo: "https://images.squarespace-cdn.com/content/v1/65594014335cfa705974cf81/033b938f-76ca-4c38-80d6-dd63e2ca21a1/UW-Stout-Formal-WPU-Logo_Full-Color_Flat_RGB.svg.png",
    lakeLandscape: "https://images.squarespace-cdn.com/content/v1/65594014335cfa705974cf81/83bdb61d-2b1a-413d-96d6-563625e37f82/Pasted+image+20220518115815.png",
    blueDevilCartoon: "https://images.squarespace-cdn.com/content/v1/65594014335cfa705974cf81/95782986-1244-4f84-a99a-227fd4817222/friendlygestalt3747_cartoon_of_a_friendly_blue_devil_hacker_wearing_a_h_7f27c3f7-cbdc-46af-9493-a9552e1e6b82.png",
    aiChipConcept: "https://images.squarespace-cdn.com/content/v1/65594014335cfa705974cf81/42c87709-0faa-464b-aaa1-ad340f676179/Efficient-AI-Chip-Art-Concept-1536x1024.jpg",
  }
};

export const PROGRAM_OBJECTIVES = [
  {
    num: "1",
    title: "Appraise the influences between society and ICT development",
    description: "Critically evaluate the multi-directional pressures between societal structures, human interactions, and the evolution of digital communication systems."
  },
  {
    num: "2",
    title: "Analyze the relationship between organizations and ICT",
    description: "Deconstruct how enterprise workflows, corporate structures, and employee enablement dynamics shape and are shaped by information platforms."
  },
  {
    num: "3",
    title: "Critique trends impacting the ICT professional",
    description: "Assess emergent technical shifts, workforce evolution, continuous upskilling, and credentialing patterns for contemporary technology specialists."
  },
  {
    num: "4",
    title: "Evaluate ICT related to one’s own career",
    description: "Align personal technical specializations—such as Office 365, enterprise infrastructure, and digital communications—with industry trajectories."
  },
  {
    num: "5",
    title: "Forecast the influence of ICT systems",
    description: "Deploy systems thinking and technology forecasting models to project future scenarios, strategic opportunities, and disruption pathways."
  },
  {
    num: "6",
    title: "Conduct research contributing to ICT",
    description: "Synthesize literature, examine historical and political contexts, and author scholarly perspectives advancing the computing body of knowledge."
  },
  {
    num: "7",
    title: "Design ICT systems",
    description: "Architect robust, scalable, and human-centric enterprise solutions balancing operational prudence, security regulations, and user empowerment."
  }
];

export const COURSE_SEQUENCE: CourseItem[] = [
  {
    id: "seq-1",
    term: "Fall 23",
    code: "ICT 700",
    title: "Introduction to Information & Communication Technologies",
    description: "Overview of the MS in ICT. Research strategies, collaborative software overview and portfolio development.",
    category: "core",
    status: "Completed"
  },
  {
    id: "seq-2",
    term: "Spring 24",
    code: "ICT 701",
    title: "Information & Communication Technologies in Organizations",
    description: "Evaluation of information and communication technologies. Impacts and development of information and communication technologies in organizations and society.",
    category: "core",
    status: "Completed"
  },
  {
    id: "seq-3",
    term: "Spring 24",
    code: "ICT 505",
    title: "Information Systems for Enterprise",
    description: "Information systems concepts and technology for contemporary enterprise. Includes hardware, software, networks, and enterprise‐specific information systems. Emphasis on business‐prudent solutions/products based on clearly identifies needs/goals.",
    category: "emphasis",
    status: "Completed"
  },
  {
    id: "seq-4",
    term: "Summer 24",
    code: "ICT 710",
    title: "Learning Technologies",
    description: "Overview and selection criteria of instructor‐led, computer‐based, and distance learning systems for delivering content to trainees in the workplace. Includes the development of training materials in a variety of formats.",
    category: "core",
    status: "Completed"
  },
  {
    id: "seq-5",
    term: "Fall 24",
    code: "ICT 555",
    title: "Information and Communication Technologies Systems Analysis",
    description: "Information and communication technologies (ICT) systems analysis and design methods supporting contemporary enterprise. Includes roles, relationship to systems development lifecycle (SDLC) reflecting contemporary ICT systems analysis and design practice, methodologies and ICT project management.",
    category: "emphasis",
    status: "Completed"
  },
  {
    id: "seq-6",
    term: "Fall 24",
    code: "ICT 732",
    title: "Technology Futures",
    description: "Apply systems thinking in developing frameworks for forecasting technology driven topics. Examine the implications of technological change along with social change for various futures.",
    category: "core",
    status: "Completed"
  },
  {
    id: "seq-7",
    term: "Spring 25",
    code: "ICT 605",
    title: "Enterprise Technology Seminar",
    description: "Trends in enterprise technology including systematic development processes to solve business problems and support business processes, identification and use of contemporary enterprise technology solutions, sources of enterprise technology support, training and information and enterprise technology credentialing and career opportunities.",
    category: "emphasis",
    status: "Completed"
  },
  {
    id: "seq-8",
    term: "Spring 25",
    code: "DMT 511",
    title: "ICT Analytics",
    description: "Research current and future trends in ICT Analytics, ad-tech, security metrics, and emerging trends in big data and enterprise applications.",
    category: "emphasis",
    status: "Completed"
  },
  {
    id: "seq-9",
    term: "Summer 25",
    code: "ICT 601",
    title: "Information Technology Policy & Audit",
    description: "Information technology policy, regulatory and audit issues, international standards, and internal security strategies.",
    category: "emphasis",
    status: "Completed"
  },
  {
    id: "seq-10",
    term: "Fall 25",
    code: "ICT 733",
    title: "Technology Adoption and Implications",
    description: "Technological changes across historical, political, and social contexts. Actionable recommendations regarding technology usage and systems in the workplace.",
    category: "core",
    status: "Completed"
  },
  {
    id: "seq-11",
    term: "Fall 25",
    code: "ICT 780",
    title: "ICT Portfolio",
    description: "Develop and present a portfolio that contains artifacts and research‐based reflections that demonstrate the competencies for the ICT MS. Final product is an electronic portfolio.",
    category: "core",
    status: "Completed"
  }
];

export const CORE_COMPETENCIES: CoreCompetency[] = [
  {
    id: 1,
    title: "Appraise the influences between society and ICT development",
    subCompetencies: [
      "1. Conduct a literature search (ICT-700)",
      "2. Compare definitions for information, communication, technologies, and information and communication technologies (ICT-701)",
    ],
    reflection:
      "I want to understand and articulate how social relationships influence and serve as a model for machine relationships. Oftentimes there are analogies for how these communications take place, as well as levels of definition or abstraction. I believe that my written work in these two classes will demonstrate that I have reflected on these important distinctions.",
    outcome:
      "I am able to reflect on the distinctions, systems, relationships, and perspectives that constitute sociotechnical systems.",
    artifacts: [
      {
        title: "Sociotechnical Systems & ICT Definitions Literature Review",
        introduction: "Literature synthesis comparing foundational models of information and communication technologies and examining how human social networks inform machine network abstractions.",
      }
    ]
  },
  {
    id: 2,
    title: "Analyze the relationship between organizations and ICT",
    subCompetencies: [
      "1. Assess the impact of ICTs on organizations and society research, e‐commerce, e‐business, E-government, and the learning models. (ICT 701)",
      "2. Select appropriate training methods to meet training course and program needs. (ICT-710)"
    ],
    reflection:
      "I am curious how organizations continue to invest in human development to accomplish their goals, whether that is profit or social impact. By doing an actual training method project (possibly SCORM format) and slide deck I will more fully appreciate how and why education delivered by ICT is organized to manifest specific objective outcomes to help an organization be successful.",
    outcome:
      "I am able to help others learn how to become empowered by ICT systems in their organization and enhance human development.",
    artifacts: [
      {
        title: "Enterprise Learning Technology & Organizational Enablement",
        introduction: "Interactive training curriculum design exploring workplace enablement, modern SCORM delivery, and employee digital literacy.",
      }
    ]
  },
  {
    id: 3,
    title: "Evaluate ICT related to one’s own career",
    subCompetencies: [
      "1. Predict future trends in ICT (ICT-701)",
      "2. Identify trends or correlations between technological changes and the student’s career discipline (ICT-733)"
    ],
    reflection:
      "I would like to take the time to thoroughly investigate emerging technologies so I can prepare for the impact on myself and the people I serve. I will produce an artifact that demonstrates creative analysis and synthesis to evaluate an uncertainty in my future. It will be one or more of the emerging technologies outlined by the World Economic Forum.",
    outcome:
      "I am able to predict future trends in ICT and identify trends that will influence my professional peers.",
    artifacts: [
      {
        title: "Emerging Technologies Trend Evaluation & Career Synthesis",
        introduction: "Comprehensive evaluation of World Economic Forum emerging tech vectors, mapping generative tools and SaaS architectures to career trajectory.",
      }
    ]
  },
  {
    id: 4,
    title: "Conduct research contributing to ICT",
    subCompetencies: [
      "1. Articulate direct and indirect implications of a pivotal technological development across historical, political, and social contexts in one or more countries (ICT-733)",
      "2. Analyze contemporary research findings and practices. (ICT-780)"
    ],
    reflection:
      "I want to grow professionally by having a big picture perspective over time for ideas that have influenced technology systems. It is often claimed that there are few really new ideas when it comes to computing systems. I will create an intellectual artifact (paper) that represents my understanding and synthesis of information to create a perspective on these relationships.",
    outcome:
      "I am able to synthesize and create a point of view that can articulate and analyze the facets of historical and social contexts with modern information.",
    artifacts: [
      {
        title: "Historical & Sociopolitical Computing Paradigms",
        introduction: "Scholarly research paper analyzing historical recurrence in computing systems and assessing policy implications of cloud platform concentration.",
      }
    ]
  },
  {
    id: 5,
    title: "Design ICT systems",
    subCompetencies: [
      "1. Design ICT systems. (ICT-701)",
      "2. Apply common forecasting techniques to explore various futures for technology. (ICT-732)"
    ],
    reflection:
      "For me, to consider the future and what that looks like, is important to having an influence on the creation or modification of an ICT system like the one I manage every day at work. I will demonstrate that I have considered the social and scientific aspects of designing an ICT system. This will likely be in one of the Enterprise Technology emphasis courses, and may be an extended multiple-page matrix.",
    outcome:
      "I can apply forecasting techniques to design ICT systems that are robust and reliable.",
    artifacts: [
      {
        title: "Robust Enterprise Cloud Architecture & Forecasting Matrix",
        introduction: "Comprehensive system architecture matrix incorporating quantitative Delphi forecasting, failover reliability, and user-centric governance.",
      }
    ]
  }
];

export const EMPHASIS_COMPETENCIES: EmphasisCompetency[] = [
  {
    code: "ICT-505",
    title: "Information Systems for Enterprise",
    objective: "Analyze information system needs of an enterprise and recommend business‐prudent solutions based on clearly identified needs/goals.",
    reflection:
      "I will produce a paper that has tables taking into account the budget archeology of a real-life organization (probably my current department) if possible. This will help me make sure that I am working with consistent, true-to-life restrictions and finance information.",
    outcome:
      "I can understand and respond to the information needs of an enterprise using decision-making models.",
    artifacts: [
      {
        title: "Enterprise Systems Budget Archeology & Decision Model",
        introduction: "Financial and systems modeling balancing capital expenditure, operational subscriptions, and risk vectors in enterprise infrastructure.",
      }
    ]
  },
  {
    code: "ICT-555",
    title: "ICT Systems Analysis and Design",
    objective: "Compare strengths and weaknesses of each ICT systems analysis and design method.",
    reflection:
      "I will perform work to compare and contrast the different methods of systems analysis and design. This may include waterfall, agile, or others. I project that these methods are not obsolete but have their different times and places for strengths and weaknesses. This will results in a paper or written discussion with others in the course.",
    outcome:
      "I am able to select and use the most appropriate analysis and design method for the organization.",
    artifacts: [
      {
        title: "Comparative Analysis of SDLC Methodologies in Modern Enterprise",
        introduction: "Deep comparative study of Waterfall, Agile, and DevOps workflows mapped to compliance-heavy healthcare/insurance domains.",
      }
    ]
  },
  {
    code: "ICT-601",
    title: "Information Technology Policy & Audit",
    objective: "Analyze the impact of regulations and policy associated with the implementation of new technologies.",
    reflection:
      "I will research and write about the regulations and policy, especially US Government modernization using the NIST and CMMC frameworks. My workplace organization including my department (Enterprise Applications) is directly affected by these regulations and standards. This could result in a directly applicable recommendation for adopting NIST 800-53.",
    outcome:
      "I am able to analyze and implement federal and international regulations and policy.",
    artifacts: [
      {
        title: "NIST 800-53 & CMMC Compliance Policy Blueprint",
        introduction: "Actionable cybersecurity and compliance governance roadmap tailored to corporate enterprise application environments.",
      }
    ]
  },
  {
    code: "ICT-605",
    title: "Enterprise Technology Seminar",
    objective: "Examine alternatives for enterprise technology credentialing.",
    reflection:
      "To help my current organization, I will make a proposal that will be in favor of investment in covering certifications and some training conglomeration sites like Oreilly, INE or PluralSight. We currently don't cover certifications or education, but our new CIDO believes in getting better everyday and clearly certification is part of that. By demonstrating the benefits of enterprise credentialing with a presentation or PowerPoint I will be aligning and informing leadership.",
    outcome:
      "I am able to examine and recommend alternatives and options for enterprise technology credentialing.",
    artifacts: [
      {
        title: "Executive Proposal: Enterprise Technology Credentialing & Upskilling",
        introduction: "Strategic executive slide deck and ROI proposal establishing subsidized corporate certification pathways.",
      }
    ]
  },
  {
    code: "DMT-511",
    title: "ICT Analytics",
    objective: "Research current and future trends in ICT Analytics.",
    reflection:
      "I will review and analyze ad-tech and security metrics as well as bring in outside resources to write about emerging trends in big data and enterprise applications. This will be done in my last class so I will have plenty of time of reflect on enterprise goal metrics like Key Performance Indicators and Objective Key Results. If possible I'd like to publish a page on this in my portfolio.",
    outcome:
      "I can research current and future trends in ICT analytics.",
    artifacts: [
      {
        title: "Enterprise Big Data & Security Analytics Evaluation",
        introduction: "Empirical study on telemetry observability, KPI dashboarding, and zero-trust security signal synthesis.",
      }
    ]
  }
];
