interface Testimonial {
  name: string;
  userMeta: string;
  feedback:string,
}

export const testimonials:Testimonial[] = [
  {
    name: "Saheb Kumar Singh",
    feedback:
      "This guy has the aura of teaching any individual with making the topic interesting itself just like teaching JavaScript to a newbie...",
    userMeta: "LEI Register India Private Limited - Siliguri, West Bengal",
  },
  {
    name: "Roshan Shah",
    feedback:
      "Love the classes. Very interactive and understood the concept very well. Very friendly classes which made me ask questions more comfortably",
    userMeta: "VIT, Andhra Pradesh",
  },
  {
    name: "Aman Gupta",
    feedback:
      "I'd like to give a shoutout to Sachin K. Sharma , who was an integral part of our project. His expertise and dedication were instrumental in ensuring the project's success. He always went above and beyond to make sure that the task was completed on time and to the best of his abilities. His contributions to the team were greatly appreciated and helped us achieve our goals. Thank you for your hard work and dedication, Sachin K. Sharma!",
    userMeta: "Technical Engineer - Sikkim Manipal Hospital",
  },
  {
    name: "Prashant Rai",
    feedback:
      "It's was a really good experience, although it was your first class you tried your best and that is what kept me going like if Our teacher is trying his best then even us students shall try out best, and this class is the best for those who really desire to learn react js.",
    userMeta: "SIST, Sikkim",
  },
];
