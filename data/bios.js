import genericImg from '../Assets/generic.png';

const members = [
  {
    name: "Michael Liut",
    image: genericImg,
    bio: "Michael Liut is an Assistant Professor, Teaching Stream at the University of Toronto Mississauga, positioned at the intersection of computer science and education. Michael’s primary research emphasis is on applied AI/ML in education, delving into the intricate realms of adaptive educational technologies, data systems, algorithmic design, and student behaviour. His passion lies in harnessing these insights to craft adaptive experimentation and innovative behavioural interventions. At the heart of his work, Michael strives to refine and enhance the educational journey. He dedicates considerable effort to the creation and refinement of models, tools, and interventions that aspire to elevate his students’ academic experience.",
    website: "https://www.michaelliut.ca/",
    googlescholar: "https://scholar.google.com/citations?user=Jf8s0dMAAAAJ&hl=en&oi=ao",
    email: "michael.liut@utoronto.ca"
  },
  {
    name: "Andrew Petersen",
    image: genericImg,
    bio: "Andrew Petersen has experience with and interest in tool design (PCRS) and educational data mining, assessment construction, and social and psychological interventions in computing. His primary research interest is in computer science education, with a special focus on introductory education.",
    website: "https://utmandrew.bitbucket.io/",
    googlescholar: "https://scholar.google.com/citations?user=Aox39roAAAAJ&hl=en",
    email: "andrew.petersen@utoronto.ca"
  },
  {
    name: "Lisa Zhang",
    image: genericImg,
    bio: "",
    website: "https://www.cs.toronto.edu/~lczhang/",
    googlescholar: "https://scholar.google.com/citations?user=xSTQSikAAAAJ&hl=en&oi=ao",
    email: "lczhang@cs.toronto.edu"
  },
  {
    name: "Bogdan Simion",
    image: genericImg,
    bio: "Bogdan Simion is an Associate Professor, Teaching Stream in the Department of Mathematical and Computational Sciences at University of Toronto Mississauga. He has worked on several pedagogic research projects, from analyzing the impact of active learning classrooms, studying group work dynamics, analyzing student help-seeking behaviours, development of problem-solving skills across the curriculum, writing skill development, behavioral design interventions, techniques such as productive failure in computer science, and most recently the role and impact of LLMs/SLMs on student learning. ",
    website: "https://www.cs.toronto.edu/~bogdan/",
    googlescholar: "https://scholar.google.com/citations?user=-ObySCYAAAAJ&hl=en&oi=ao",
    email: "bogdan.simion@utoronto.ca"
  },
  {
    name: "Tingting Zhu",
    image: genericImg,
    bio: "Tingting Zhu is an Assistant Professor, Teaching Stream, cross-appointed in Computer Science (CS) and Geographic Information Science (GIS). Currently, she is also serving as the GIS Program Director at the University of Toronto Mississauga (UTM), overseeing curriculum development and fostering interdisciplinary applications of GIS. She has published and presented in various venues including computing education research and geography education conferences, and interdisciplinary journals on themes such as engagement through storytelling, implications of GenAI in education, competency-based curricula, and experiential learning.",
    website: "https://sites.utm.utoronto.ca/tzhu/",
    googlescholar: "https://scholar.google.com/citations?user=_mv3818AAAAJ&hl=en",
    email: "tingting.zhu@utoronto.ca"
  },
  {
    name: "Andi Bergen",
    image: genericImg,
    bio: "",
    website: "",
    googlescholar: "https://scholar.google.com/citations?user=NLqbcZkAAAAJ&hl=en&oi=ao",
    email: "andi.bergen@utoronto.ca"
  },
  {
    name: "Angela Zavaleta Bernuy",
    image: genericImg,
    bio: "Angela Zavaleta is an Assistant Professor at McMaster University and a PhD candidate at the University of Toronto. Her research is at the intersection of computing education and human-computer interaction, with a focus on intelligent educational technologies. She explores behavioural interventions, ethical experimentation, and interactive tools to better understand and support student learning in computing.",
    website: "https://angelazb.github.io/",
    googlescholar: "https://scholar.google.com/citations?user=Toos7YkAAAAJ&hl=en&oi=ao",
    email: "zavaleta@mcmaster.ca"
  },
  {
    name: "Brian Harrington",
    image: genericImg,
    bio: "Brian Harrington is a Professor, Teaching Stream at the University of Toronto Scarborough. His research focuses mainly on CS pedagogy and undergraduate education. His focus is on helping students develop the non technical skills that will help them succeed in academia or industry.",
    website: "https://www.brianharrington.net/",
    googlescholar: "https://scholar.google.com/citations?user=uYCeHkcAAAAJ&hl=en&oi=ao",
    email: "brian.harrington@utoronto.ca"
  },
  {
    name: "Naaz Sibia",
    image: genericImg,
    bio: "Naaz is a PHD student and she is very cool :D",
    website: "https://www.naazsibia.com/",
    googlescholar: "https://scholar.google.ca/citations?user=r60zG3UAAAAJ&hl=en",
    email: "naaz.sibia@utoronto.ca"
  },
  {
    name: "Harry Ye",
    image: genericImg,
    bio: "Harry is a PhD student at University of Toronto Dynamic Grapgics Project (DGP). He is mainly interested in research and designing Human-Centered AI systems, aimed at augmenting human capabilities in knowledge work. His approach emphasizes creating practical, interactive tools where AI assistance is made transparent and controllable. His work explores applications in two key areas: AI in Education, focusing on promoting effective learning strategies, and productive human-AI collaboration for students; and AI-driven Research Tools, concentrating on enhancing scholarly activities like complex sensemaking, evidence synthesis, and knowledge discovery.",
    website: "https://harryye.com/",
    googlescholar: "https://scholar.google.com/citations?user=UAtfVNYAAAAJ&hl=en",
    email: "harryye@cs.toronto.edu"
  },
  {
    name: "Jessica Wen",
    image: genericImg,
    bio: "Jessica is an undergrad researcher involved with CSE research, exploring the integration of generative AI to enhance learning experiences and instructional tools.",
    website: "",
    googlescholar: "https://scholar.google.ca/citations?user=-mvmx-IAAAAJ&hl=en&oi=sra",
    email: "jessica.wen@mail.utoronto.ca"
  },
  {
    name: "Khushi Malik",
    image: genericImg,
    bio: "Khushi is an undergraduate student involved in machine learning and CSE, with experience in self-regulated learning research, regression analysis, and applying ML models across multidisciplinary domains.",
    website: "",
    googlescholar: "https://scholar.google.com/citations?user=o8zvj34AAAAJ&hl=en",
    email: "khushi.malik@mail.utoronto.ca"
  },
  {
    name: "Amber Richardson",
    image: genericImg,
    bio: "Amber is an undergraduate student involved with research in computing education, ML education, and first-year writing. They help explore self-regulated learning, student experiences in first year and ML courses, and student experiences using AI in writing.",
    website: "",
    googlescholar: "https://scholar.google.ca/citations?user=nV2mdA0AAAAJ&hl=en",
    email: "amber.richardson@mail.utoronto.ca"
  }
];

export default members;