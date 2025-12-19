import githubLogo from "/assets/logos/github.svg";

export const projects = [
  {
    name: "AI Powered Phishing Detection Tool",
    description:
      "Developed An AI-powered web app that analyzes emails and detects phishing attempts. Paste an email into the chat interface, and the AI provides a risk score, classification, and findings.",
    tags: [
      { name: "React", color: "text-[#33c2cc]" },
      { name: "TypeScript", color: "text-[#57db96]" },
      { name: "MachineLearning", color: "text-[#57db96]" }
    ],
    image: githubLogo,
    source_code_link: "https://github.com/ccm108/AI-Phishing-Tool",
    live_project_link: "https://ai-phishing-tool.vercel.app",
    gradientClass: "grid-blue-color",
  },
  {
    name: "Adversary Emulation & Detection Engineering",
    description:
      "This project simulates several MITRE ATT&CK techniques using Atomic Red Team, and then collects every trace of activity using Sysmon. The goal is simple: run safe attacks, study the logs, and prove detection coverage.",
    tags: [
      { name: "ShellScripting", color: "text-[#33c2cc]" },
      { name: "Cybersecurity", color: "text-[#ca2f8c]" },
    ],
    image: githubLogo,
    source_code_link: "https://github.com/ccm108/Adversary-Emulation-and-Detection-Engineering",
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
