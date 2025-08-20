import githubLogo from "/assets/logos/github.svg";

export const projects = [
  {
    name: "Train Route Optimizer",
    description:
      "Optimized train routes between major cities using matrices and row reduction for efficient travel planning.",
    tags: [
      { name: "Python", color: "text-[#33c2cc]" },
      { name: "Linear Algebra", color: "text-[#57db96]" },
    ],
    image: githubLogo,
    source_code_link: "https://github.com/yourusername/train-route-optimizer",
    live_project_link: null,
    gradientClass: "grid-blue-color",
  },
  {
    name: "UDP Ping Client",
    description:
      "Built a UDP ping client in Python to measure round-trip times using socket programming.",
    tags: [
      { name: "Python", color: "text-[#33c2cc]" },
      { name: "Networking", color: "text-[#ca2f8c]" },
    ],
    image: githubLogo,
    source_code_link: "https://github.com/yourusername/udp-ping-client",
    live_project_link: null,
    gradientClass: "grid-default-color",
  },
  {
    name: "Portfolio Website",
    description:
      "Designed and developed my personal portfolio using React, Tailwind, and Framer Motion animations.",
    tags: [
      { name: "React", color: "text-[#5c33cc]" },
      { name: "Tailwind", color: "text-[#4163E2]" },
    ],
    image: githubLogo,
    source_code_link: "https://github.com/yourusername/portfolio",
    live_project_link: "https://yourdomain.com",
    gradientClass: "grid-special-color",
  },
];
