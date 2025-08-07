import andibergen from './andibergen.jpg'

import ml_name from './ml_name.png'
import ap_name from './ap_name.png'
import lz_name from './lz_name.png'
import whiteboard from './whiteboard.png'
import door from './door.png'
import window from './window.png'

import close_black from './close-black.png'
import menu_black from './menu-black.png'
import genericImg from './generic.png';
import arrow_icon from './arrow-icon.png'

import voiceex from './voiceex.png'
import voiceex_pubs from '../Papers/Projects/voiceex_papers.json'

export const assets = {
    andibergen,

    voiceex,
    voiceex_pubs,
    
    ml_name,
    ap_name,
    lz_name,
    whiteboard,
    door,
    window,

    close_black,
    menu_black,
    genericImg,
    arrow_icon
};

export const art = [
    {
        artist: "Jess",
        description: "Prof Michael's namecard decorated! Shoutout to Michael for introducting me to research, it's been a blast ever since >:)",
        image: assets.ml_name,
    },
    {
        artist: "Jess",
        description: "Prof Andrew's namecard decorated! If you ever walk across his door or enter his office, you'll see the absolute masterpiece (mess) I've made there.",
        image: assets.ap_name,
    },
    {
        artist: "Jess",
        description: "Prof Andrew's namecard decorated! If you ever walk across his door or enter his office, you'll see the absolute masterpiece (mess) I've made there. Thanks for letting your office be my canvas, Andrew :P",
        image: assets.lz_name,
    },
    {
        artist: "Jess",
        description: "My magnum opus. This is the culmination of ~2 years worth of office hours, starting from the second half of first year winter semester, all the way through second year. The goal is to keep adding on to this whiteboard throughout my university life :D",
        image: assets.whiteboard,
    },
    {
        artist: "Jess",
        description: "End of year party at Andrew's office!!! Do NOT steal the Pokemon cards, we're all watching you...",
        image: assets.door,
    },
    {
        artist: "Jess",
        description: "Tetris!!! I was gonna make a computer and cut out alphabet letters so that you could write messages on the window, but then saw this Tetris thing and thought it would be more fun instead (Also easier to make, because I don't need to cut out a bunch of alphabet letters)",
        image: assets.window,
    }
]

export const professors = {
  "Michael Liut":
  {
    name: "Michael Liut",
    image: assets.genericImg,
    position: "Assistant Professor, Teaching Stream (UTM)",
    link: "/team/michael_liut",
    bio: "Michael Liut is an Assistant Professor, Teaching Stream at the University of Toronto Mississauga, positioned at the intersection of computer science and education. Michael’s primary research emphasis is on applied AI/ML in education, delving into the intricate realms of adaptive educational technologies, data systems, algorithmic design, and student behaviour. His passion lies in harnessing these insights to craft adaptive experimentation and innovative behavioural interventions. At the heart of his work, Michael strives to refine and enhance the educational journey. He dedicates considerable effort to the creation and refinement of models, tools, and interventions that aspire to elevate his students’ academic experience.",
    website: "https://www.michaelliut.ca/",
    googlescholar: "https://scholar.google.com/citations?user=Jf8s0dMAAAAJ&hl=en&oi=ao",
    email: "michael.liut@utoronto.ca",
    linkedin: "https://www.linkedin.com/in/mliut/"
  },
  "Andrew Petersen":
  {
    name: "Andrew Petersen",
    image: assets.genericImg,
    position: "Professor, Teaching Stream (UTM)",
    link: "/team/andrew_petersen",
    bio: "Andrew Petersen has experience with and interest in tool design (PCRS) and educational data mining, assessment construction, and social and psychological interventions in computing. His primary research interest is in computer science education, with a special focus on introductory education.",
    website: "https://utmandrew.bitbucket.io/",
    googlescholar: "https://scholar.google.com/citations?user=Aox39roAAAAJ&hl=en",
    email: "andrew.petersen@utoronto.ca",
    linkedin: "https://www.linkedin.com/in/andrew-petersen-989b1821/"
  },
  "Lisa Zhang":
  {
    name: "Lisa Zhang",
    image: assets.genericImg,
    position: "Assistant Professor, Teaching Stream (UTM)",
    link: "/team/lisa_zhang",
    bio: "",
    website: "https://www.cs.toronto.edu/~lczhang/",
    googlescholar: "https://scholar.google.com/citations?user=xSTQSikAAAAJ&hl=en&oi=ao",
    email: "lczhang@cs.toronto.edu",
    linkedin: "https://www.linkedin.com/in/lisaczhang/"
  },
  "Bogdan Simion":
  {
    name: "Bogdan Simion",
    image: assets.genericImg,
    position: "Associate Professor, Teaching Stream (UTM)",
    link: "/team/bogdan_simion",
    bio: "Bogdan Simion is an Associate Professor, Teaching Stream in the Department of Mathematical and Computational Sciences at University of Toronto Mississauga. He has worked on several pedagogic research projects, from analyzing the impact of active learning classrooms, studying group work dynamics, analyzing student help-seeking behaviours, development of problem-solving skills across the curriculum, writing skill development, behavioral design interventions, techniques such as productive failure in computer science, and most recently the role and impact of LLMs/SLMs on student learning. ",
    website: "https://www.cs.toronto.edu/~bogdan/",
    googlescholar: "https://scholar.google.com/citations?user=-ObySCYAAAAJ&hl=en&oi=ao",
    email: "bogdan.simion@utoronto.ca",
    linkedin: "https://www.linkedin.com/in/bogdan-simion-1113b27/"
  },
  "Tingting Zhu":
  {
    name: "Tingting Zhu",
    image: assets.genericImg,
    position: "Assistant Professor, Teaching Stream (UTM)",
    link: "/team/tingting_zhu",
    bio: "Tingting Zhu is an Assistant Professor, Teaching Stream, cross-appointed in Computer Science (CS) and Geographic Information Science (GIS). Currently, she is also serving as the GIS Program Director at the University of Toronto Mississauga (UTM), overseeing curriculum development and fostering interdisciplinary applications of GIS. She has published and presented in various venues including computing education research and geography education conferences, and interdisciplinary journals on themes such as engagement through storytelling, implications of GenAI in education, competency-based curricula, and experiential learning.",
    website: "https://sites.utm.utoronto.ca/tzhu/",
    googlescholar: "https://scholar.google.com/citations?user=_mv3818AAAAJ&hl=en",
    email: "tingting.zhu@utoronto.ca",
    linkedin: "https://www.linkedin.com/in/tingtingzhuphd/"
  },
  "Andi Bergen":
  {
    name: "Andi Bergen",
    image: assets.andibergen,
    position: "Assistant Professor, Teaching Stream (UTM)",
    link: "/team/andi_bergen",
    bio: "",
    website: "",
    googlescholar: "https://scholar.google.com/citations?user=NLqbcZkAAAAJ&hl=en&oi=ao",
    email: "andi.bergen@utoronto.ca",
    linkedin: "https://www.linkedin.com/in/anbergen/"
  },
  "Angela Zavaleta Bernuy":
  {
    name: "Angela Zavaleta Bernuy",
    image: assets.genericImg,
    position: "Assistant Professor (McMaster)",
    link: "/team/angela_zavaleta_bernuy",
    bio: "Angela Zavaleta is an Assistant Professor at McMaster University and a PhD candidate at the University of Toronto. Her research is at the intersection of computing education and human-computer interaction, with a focus on intelligent educational technologies. She explores behavioural interventions, ethical experimentation, and interactive tools to better understand and support student learning in computing.",
    website: "https://angelazb.github.io/",
    googlescholar: "https://scholar.google.com/citations?user=Toos7YkAAAAJ&hl=en&oi=ao",
    email: "zavaleta@mcmaster.ca",
    linkedin: "https://www.linkedin.com/in/angela-zavaleta-bernuy/"
  },
  "Brian Harrington":
  {
    name: "Brian Harrington",
    image: assets.genericImg,
    position: "Professor, Teaching Stream (UTSC)",
    link: "/team/brian_harrington",
    bio: "Brian Harrington is a Professor, Teaching Stream at the University of Toronto Scarborough. His research focuses mainly on CS pedagogy and undergraduate education. His focus is on helping students develop the non technical skills that will help them succeed in academia or industry.",
    website: "https://www.brianharrington.net/",
    googlescholar: "https://scholar.google.com/citations?user=uYCeHkcAAAAJ&hl=en&oi=ao",
    email: "brian.harrington@utoronto.ca",
    linkedin: "https://www.linkedin.com/in/brian-harrington-utsc/"
  }
};

export const grads = {
  "Naaz Sibia":
  {
    name: "Naaz Sibia",
    image: assets.genericImg,
    position: "Ph.D. Student in Computer Science (UofT)",
    link: "/team/naaz_sibia",
    bio: "Naaz is a PHD student and she is very cool :D",
    website: "https://www.naazsibia.com/",
    googlescholar: "https://scholar.google.ca/citations?user=r60zG3UAAAAJ&hl=en",
    email: "naaz.sibia@utoronto.ca",
    linkedin: "https://www.linkedin.com/in/naaz-sibia/"
  },
  "Harry Ye":
  {
    name: "Harry Ye",
    image: assets.genericImg,
    position: "Ph.D. Student in Computer Science (UofT)",
    link: "/team/harry_ye",
    bio: "Harry is a PhD student at University of Toronto Dynamic Grapgics Project (DGP). He is mainly interested in research and designing Human-Centered AI systems, aimed at augmenting human capabilities in knowledge work. His approach emphasizes creating practical, interactive tools where AI assistance is made transparent and controllable. His work explores applications in two key areas: AI in Education, focusing on promoting effective learning strategies, and productive human-AI collaboration for students; and AI-driven Research Tools, concentrating on enhancing scholarly activities like complex sensemaking, evidence synthesis, and knowledge discovery.",
    website: "https://harryye-com.vercel.app",
    googlescholar: "https://scholar.google.com/citations?user=UAtfVNYAAAAJ&hl=en",
    email: "harryye@cs.toronto.edu",
    linkedin: "https://www.linkedin.com/in/runlong-ye/"
  }
};

export const undergrads = {
  "Jessica Wen":
  {
    name: "Jessica Wen",
    image: assets.genericImg,
    position: "Undergraduate Researcher (UTM)",
    link: "/team/jessica_wen",
    bio: "Jessica is an undergrad researcher involved with CSE research, exploring the integration of generative AI to enhance learning experiences and instructional tools.",
    website: "",
    googlescholar: "https://scholar.google.ca/citations?user=-mvmx-IAAAAJ&hl=en&oi=sra",
    email: "jessica.wen@mail.utoronto.ca",
    linkedin: "https://www.linkedin.com/in/jessica-wen1021/"
  },
  "Khushi Malik":
  {
    name: "Khushi Malik",
    image: assets.genericImg,
    position: "Undergraduate Researcher (UTM)",
    link: "/team/khushi_malik",
    bio: "Khushi is an undergraduate student involved in machine learning and CSE, with experience in self-regulated learning research, regression analysis, and applying ML models across multidisciplinary domains.",
    website: "",
    googlescholar: "https://scholar.google.com/citations?user=o8zvj34AAAAJ&hl=en",
    email: "khushi.malik@mail.utoronto.ca",
    linkedin: "https://www.linkedin.com/in/khushi-malik19/"
  },
  "Amber Richardson":
  {
    name: "Amber Richardson",
    image: assets.genericImg,
    position: "Undergraduate Researcher (UTM)",
    link: "/team/amber_richardson",
    bio: "Amber is an undergraduate student involved with research in computing education, ML education, and first-year writing. They help explore self-regulated learning, student experiences in first year and ML courses, and student experiences using AI in writing.",
    website: "",
    googlescholar: "https://scholar.google.ca/citations?user=nV2mdA0AAAAJ&hl=en",
    email: "amber.richardson@mail.utoronto.ca",
    linkedin: "https://www.linkedin.com/in/j-amber-l-richardson/"
  }
};

export const pastmembers = {
  "Temp Member":
  {
    name: "Temp Member",
    image: assets.genericImg,
    position: "Temp Member",
    link: "/team/temp_member",
    bio: "",
    website: "",
    googlescholar: "",
    email: "",
    linkedin: ""
  }
};

export const projectInfo = {
  voiceex:
    {
      name: "VoiceEx",
      image: assets.voiceex,
      description: "VoiceEx is a voice explanations system we've been developing over the past couple years. Primarily focused on self-explanations to enhance student learning, we've gone from prompting text self-explanations to voice self-explanations. Using VoiceEx, instructors can prompt students to reflect on a specific question/topic, which students then record a self-explanation to. Afterwards, students may receive feedback or follow-up questions on their self-explanation.",
      publications: assets.voiceex_pubs
    }
};