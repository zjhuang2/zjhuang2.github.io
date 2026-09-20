/* ==========================================================================
   Site content. This is the only file you need to edit to add news or papers.
   ========================================================================== */

const SITE = {
  firstName: "Jeremy",
  middleName: "Zhengqi",
  lastName: "Huang",
  // Highlighted in author lists.
  me: "Jeremy Zhengqi Huang",
  subtitle: "Ph.D. Candidate, University of Michigan",
  email: "zjhuang@umich.edu",
  scholar: "https://scholar.google.com/citations?user=tYjsMXYAAAAJ",
  linkedin: "https://www.linkedin.com/in/z-jeremy-huang",
  x: "https://x.com/jzh2o",
  cv: "assets/pdf/huang-cv.pdf",
};

/* Newest first. `date` is ISO; it is displayed as e.g. "Aug 22, 2025".
   Use `text` for plain text, or `html` for hand-authored markup with links. */
const NEWS = [
  {
    date: "2026-09-18",
    html: 'I am heading to the <a href="https://www.misophoniaresearchfund.org/press/2026-misophonia-collaboration-forum-building-strategies-for-action">Misophonia Collaboration Forum</a> in Atlanta, GA to present our ongoing work on human-AI systems for supporting people with sound sensitivity!',
  },
  {
    date: "2026-08-21",
    html: 'Our demo paper on soundscape mediation systems for people with sound sensitivity has been accepted to UIST 2026!',
  },
  {
    date: "2025-08-22",
    text: "Our work on transforming non-speech captions with anchored generative models is headed to ASSETS 2025 in Denver!",
  },
  {
    date: "2025-04-10",
    text: "I will present SoundWeaver at CHI 2025 in Yokohama, sharing how we support real-time sensemaking of auditory environments.",
  },
];

/* Newest first. `selected: true` also puts the paper on the home page.
   Links: any of `pdf`, `doi`, `arxiv`, `url`. `abstract` adds an ABS toggle. */
const PUBLICATIONS = [
  {
    year: 2026,
    title: "Sona: Real-Time Multi-Target Sound Attenuation for Noise Sensitivity",
    authors:
      "Jeremy Zhengqi Huang, Emani Hicks, Sidharth, Gillian R. Hayes, and Dhruv Jain",
    venue: "UIST'26 Demo and arXiv Preprint",
    preview: "assets/img/pub/sona-demo.jpeg",
    arxiv: "https://arxiv.org/abs/2604.00447",
    pdf: "assets/pdf/sona-arxiv.pdf",
    selected: true,
  },
  {
    year: 2025,
    title: "CapTune: Adapting Non-Speech Captions With Anchored Generative Models",
    authors:
      "Jeremy Zhengqi Huang, Caluã Lacerda Pataca, Liang-Yuan Wu, and Dhruv Jain",
    venue:
      "Proceedings of the 27th International ACM SIGACCESS Conference on Computers and Accessibility (ASSETS '25)",
    preview: "assets/img/pub/captune.png",
    doi: "https://doi.org/10.1145/3663547.3746346",
    pdf: "assets/pdf/assets25-captune.pdf",
    selected: true,
    abstract: `Non-speech captions are essential to the video experience of deaf and hard of hearing (DHH) viewers, yet conventional approaches often overlook the diversity of their preferences. We present CapTune, a system that enables customization of non-speech captions based on DHH viewers' needs while preserving creator intent. CapTune allows caption authors to define safe transformation spaces using concrete examples and empowers viewers to personalize captions across four dimensions: level of detail, expressiveness, sound representation method, and genre alignment. Evaluations with seven caption creators and twelve DHH participants showed that CapTune supported creators' creative control while enhancing viewers' emotional engagement with content. Our findings also reveal trade-offs between information richness and cognitive load, tensions between interpretive and descriptive representations of sound, and the context-dependent nature of caption preferences.`,
  },
  {
    year: 2025,
    title:
      "SonoCraftAR: Towards Supporting Personalized Authoring of Sound-Reactive AR Interfaces by Deaf and Hard of Hearing Users",
    authors:
      "Jaewook Lee, Davin Win Kyi, Leejun Kim, Jenny Peng, Gagyeom Lim, Jeremy Zhengqi Huang, Dhruv Jain, and Jon E. Froehlich",
    venue:
      "2025 IEEE International Symposium on Mixed and Augmented Reality Adjunct (ISMAR-Adjunct)",
    preview: "assets/img/pub/sonocraftar.png",
    doi: "https://doi.org/10.1109/ISMAR-Adjunct68609.2025.00108",
    selected: false,
  },
  {
    year: 2025,
    title:
      "Weaving Sound Information to Support Real-Time Sensemaking of Auditory Environments: Co-Designing with a DHH User",
    authors:
      "Jeremy Zhengqi Huang, Jaylin Herskovitz, Liang-Yuan Wu, Cecily Morrison, and Dhruv Jain",
    venue:
      "Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems (CHI '25)",
    preview: "assets/img/pub/soundweaver.png",
    doi: "https://doi.org/10.1145/3706598.3714268",
    pdf: "assets/pdf/chi25-soundweaver.pdf",
    selected: true,
    abstract: `Current AI sound awareness systems can provide deaf and hard of hearing people with information about sounds, including discrete sound sources and transcriptions. However, synthesizing AI outputs based on DHH people's ever-changing intents in complex auditory environments remains a challenge. In this paper, we describe the co-design process of SoundWeaver, a sound awareness system prototype that dynamically weaves AI outputs from different AI models based on users' intents and presents synthesized information through a heads-up display. Adopting a Research through Design perspective, we created SoundWeaver with one DHH co-designer, adapting it to his personal contexts and goals (e.g., cooking at home and chatting in a game store). Through this process, we present design implications for the future of "intent-driven" AI systems for sound accessibility.`,
  },
  {
    year: 2024,
    title:
      "MaskSound: Exploring Sound Masking Approaches to Support People with Autism in Managing Noise Sensitivity",
    authors:
      "Anna Y. Park, Andy Jin, Jeremy Zhengqi Huang, Jesse Carr, and Dhruv Jain",
    venue:
      "Proceedings of the 26th International ACM SIGACCESS Conference on Computers and Accessibility (ASSETS '24)",
    preview: "assets/img/pub/masksound.png",
    doi: "https://doi.org/10.1145/3663548.3675656",
    selected: true,
    abstract: `Noise sensitivity is a frequently reported characteristic in many autistic individuals. While strategies like sound isolation (e.g., noise-canceling headphones) and avoidance behaviors (e.g., leaving a crowded room) can help, they can reduce situational awareness and limit social engagement. In this paper, we examine an alternate approach to managing noise sensitivity: introducing ambient background sounds to reduce the perception of disruptive noises, i.e., sound masking. Through two studies (with ten and nine autistic individuals respectively), we investigated the autistic individuals' preferred sound masks (e.g., white noise, brown noise, calming water sounds) for different contexts (e.g., traffic, speech) and elicited reactions for a future interactive tool to deliver effective sound masks. Our findings have implications not just for the accessibility community, but also for designers and researchers working on sound augmentation technology.`,
  },
  {
    year: 2024,
    title: "A Human-AI Collaborative Approach for Designing Sound Awareness Systems",
    authors: "Jeremy Zhengqi Huang, Reyna Wood, Hriday Chhabria, and Dhruv Jain",
    venue:
      "Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems (CHI '24)",
    preview: "assets/img/pub/human-ai-collab.png",
    doi: "https://doi.org/10.1145/3613904.3642062",
    pdf: "assets/pdf/chi24_hacs.pdf",
    selected: true,
    abstract: `Current sound recognition systems for deaf and hard of hearing (DHH) people identify sound sources or discrete events. However, these systems do not distinguish similar sounding events (e.g., a patient monitor beep vs. a microwave beep). In this paper, we introduce HACS, a novel futuristic approach to designing human-AI sound awareness systems. HACS assigns AI models to identify sounds based on their characteristics (e.g., a beep) and prompts DHH users to use this information and their contextual knowledge (e.g., "I am in a kitchen") to recognize sound events (e.g., a microwave). As a first step for implementing HACS, we articulated a sound taxonomy that classifies sounds based on sound characteristics using insights from a multi-phased research process with people of mixed hearing abilities. We then performed a qualitative (with 9 DHH people) and a quantitative (with a sound recognition model) evaluation. Findings demonstrate the initial promise of HACS for designing accurate and reliable human-AI systems.`,
  },
  {
    year: 2023,
    title:
      '"Not There Yet": Feasibility and Challenges of Mobile Sound Recognition to Support Deaf and Hard-of-Hearing People',
    authors: "Jeremy Zhengqi Huang, Hriday Chhabria, and Dhruv Jain",
    venue:
      "Proceedings of the 25th International ACM SIGACCESS Conference on Computers and Accessibility (ASSETS '23)",
    preview: "assets/img/pub/not-there-yet.jpeg",
    doi: "https://doi.org/10.1145/3597638.3608431",
    pdf: "assets/pdf/ASSETS23-SWFieldStudy.pdf",
    selected: true,
    abstract: `While recent advances have enabled mobile sound recognition tools for deaf and hard of hearing (DHH) people, these tools have only been studied in the lab or through short, controlled experiments. To assess the real-world feasibility and guide the future designs of mobile sound awareness systems, we conducted a three-week field study of SoundWatch, a smartwatch-based sound recognition app, with 10 DHH participants. Our findings suggest the app's utility in increasing environmental awareness and facilitating everyday tasks for DHH users. However, several challenges, such as background noises, variability of real-world sounds, and confusion among similar sounding sounds, indicated that mobile sound recognition solutions are "not there yet" for adoption and use in daily life. We close by presenting HCI design opportunities to improve model reliability by increasing contextual awareness, supporting end-user customization, and fostering the collective improvement of sound recognition models.`,
  },
  {
    year: 2023,
    title:
      "AdaptiveSound: An Interactive Feedback-Loop System to Improve Sound Recognition for Deaf and Hard of Hearing Users",
    authors: "Hang Do, Quan Dang, Jeremy Zhengqi Huang, and Dhruv Jain",
    venue:
      "Proceedings of the 25th International ACM SIGACCESS Conference on Computers and Accessibility (ASSETS '23)",
    preview: "assets/img/pub/adaptivesound.png",
    doi: "https://doi.org/10.1145/3597638.3608390",
    pdf: "assets/pdf/ASSETS23-AdaptiveSound.pdf",
    selected: true,
    abstract: `Sound recognition tools have wide-ranging impacts for deaf and hard of hearing (DHH) people from being informed of safety-critical information (e.g., fire alarms, sirens) to more mundane but still useful information (e.g., door knock, microwave beeps). However, prior sound recognition systems use models that are pre-trained on generic sound datasets and do not adapt well to diverse variations of real-world sounds. We introduce AdaptiveSound, a real-time system for portable devices (e.g., smartphones) that allows DHH users to provide corrective feedback to the sound recognition model to adapt the model to diverse acoustic environments. AdaptiveSound is informed by prior surveys of sound recognition systems, where DHH users strongly desired the ability to provide feedback to a pre-trained sound recognition model to fine-tune it to their environments. Through quantitative experiments and field evaluations with 12 DHH users, we show that AdaptiveSound can achieve a significantly higher accuracy (+14.6%) than prior state-of-the-art systems in diverse real-world locations (e.g., homes, parks, streets, and malls) with little end-user effort (about 10 minutes of feedback).`,
  },
];
