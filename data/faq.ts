interface Faq {
  id: number;
  question: string;
  answer: string;
}

export const faq: Faq[] = [
  {
    id: 1,
    question: "Who is behind this TBC cohort?",
    answer:
      "TBC is an initiative by Sachin Sharma to personally teach students in the field of Software Engineering. He is currently working as an Intern for a cloud-based startup company, where he focuses on works related to frontend development.",
  },
  {
    id: 2,
    question: "Is the cohort live or recorded?",
    answer:
      "At TBC we strongly believe that programming skills should be taught in a live way.",
  },
  {
    id: 3,
    question: "what if I miss a session?",
    answer:
      "Every session is recorded and posted privately on YouTube which you can play at your own time.",
  },
  {
    id: 4,
    question: "Will I get certificate?",
    answer:
      "No certificates are provided. At TBC we focus on skills rather than collecting certificates.",
  },
  //   {
  //     id: 1,
  //     question: "",
  //     answer: "",
  //   },
];
