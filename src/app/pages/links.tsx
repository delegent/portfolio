import {
  FaMedium,
  FaBlog,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import {GrDocumentDownload} from 'react-icons/gr';

export const links = [
  {
    index: 0,
    title: "Find me on Github",
    href: "https://github.com/delegent",
    icon: <FaGithub />,
  },
  {
    index: 1,
    title: "Find me on LinkedIn",
    href: "https://www.linkedin.com/in/anubhav-raj-srivastava/",
    icon: <FaLinkedin />,
  },
  {
    index: 2,
    title: "Contact me via email",
    href: "mailto:srivastavaanubhav764@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    index: 3,
    title: "Download Resume",
    href: "https://drive.google.com/file/d/1MHlYtHKCC5Y6L95FPjU06Riag1nh_I0B/view?usp=sharing",
    icon: <FaDownload />,
  },
];
