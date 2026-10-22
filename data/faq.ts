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
    question: "What if I miss a session?",
    answer:
      "Every session is recorded and posted privately on YouTube which you can play at your own time.",
  },
  {
    id: 4,
    question: "Will I get a certificate?",
    answer:
      "No certificates are provided. At TBC we focus on skills rather than collecting certificates.",
  },
  {
    id: 5,
    question: "How do I pay?",
    answer:
      "Register using the form on the cohort page. You'll get an email with payment details within a day. Your seat is confirmed once payment is received.",
  },
];
