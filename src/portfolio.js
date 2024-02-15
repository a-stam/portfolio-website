/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import { BiLogoPostgresql } from "react-icons/bi";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { LiaNode } from "react-icons/lia";
import { FaNpm } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { BsGpuCard } from "react-icons/bs";
import { HiMiniCpuChip } from "react-icons/hi2";
import { SiMysql } from "react-icons/si";
import { SiApachehadoop } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { SiAmazonapigateway } from "react-icons/si";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "AS",
  title: "Hello, I'm Aleksa",
  subTitle: [
    'Software Engineer experienced in web application development',
  ],
  resumeLink:
    "https://drive.google.com/file/d/1uOzfWllSdvhKeMitQDzKU_slxKaGOaCN/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/a-stam/",
  linkedin: "https://www.linkedin.com/in/aleksa-stamenkovic/",
  gmail: "aleksastamenkovic74@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  // subTitle: "TECH STACK",
  skills: [
    emoji(
      "⚡ Full-Stack Engineer experienced in web application development"
    ),
    emoji("⚡ Enjoys building B2B and B2C products through collaborative and data-driven approaches"),
    // emoji(
    //   "⚡ Adept at working in small and large engineering teams"
    // ),
    // emoji(
    //   "⚡ Proficient in Agile and Scrum methodologies"
    // ),
    emoji(
      "⚡ Experienced in Java, Python, JavaScript, C/C++, CUDA, ARM, x86 Assembly"
    ),
    emoji(
      "⚡ Skilled in React.js, Redux.js, Node.js, HTML, CSS, AJAX, REST APIs, Express.js"
    ),
    emoji(
      "⚡ Knowledgeable in Operating Systems, Data Structures and Algorithms, Unix/Linux, Database Design, SQL, PostgreSQL, MySQL, AWS, Prototyping, Computer Security, Distributed Systems, Hadoop, AI/ML (sklearn)"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      icon: <TiHtml5 className="skills-icon"/>
    },
    {
      skillName: "css3",
      icon: <FaCss3Alt className="skills-icon"/>
    },
    {
      skillName: "JavaScript",
      icon: <IoLogoJavascript className="skills-icon"/>
    },
    {
      skillName: "React.js",
      icon: <FaReact className="skills-icon"/>
    },
    {
      skillName: "Node.js",
      icon: <LiaNode className="skills-icon"/>
    },
    {
      skillName: "npm",
      icon: <FaNpm className="skills-icon"/>
    },
    {
      skillName: "sql-database",
      icon: <FaDatabase className="skills-icon"/>
    },
    {
      skillName: "aws",
      icon: <FaAws className="skills-icon"/>
    },
    {
      skillName: "python",
      icon: <FaPython className="skills-icon"/>
    },
    {
      skillName: "Java",
      icon: <FaJava className="skills-icon"/>
    },
    {
      skillName: "C/C++",
      icon: <b className="skills-icon">C/++</b>
    },
    {
      skillName: "CUDA",
      icon: <BsGpuCard className="skills-icon"/>
    },
    {
      skillName: "ARM and x86",
      icon: <HiMiniCpuChip className="skills-icon"/>
    },
    {
      skillName: "PostgreSQL",
      icon: <BiLogoPostgresql className="skills-icon"/>
    },
    {
      skillName: "MySQL",
      icon: <SiMysql className="skills-icon"/>
    },
    {
      skillName: "Hadoop",
      icon: <SiApachehadoop className="skills-icon"/>
    },
    {
      skillName: "AI/ML",
      icon: <GiArtificialIntelligence className="skills-icon"/>
    },
    {
      skillName: "Rest API",
      icon: <SiAmazonapigateway className="skills-icon"/>
    },
    {
      skillName: "Express.js",
      icon: <b className="skills-icon">ex</b>
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Univesity of California, San Diego",
      logo: require("./assets/images/ucsdLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2021 - December 2023",
      // desc: "Jacobs School of Engineering",
      descBullets: [
        "Yonder Deep, Software Engineer",
        "Project Pathways, Vice President and Outreach Chair"
      ]
    },
    {
      schoolName: "De Anza College",
      logo: require("./assets/images/deanzaLogo.png"),
      subHeader: "Transfer - Computer Science",
      duration: "September 2019 - June 2021",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Makeithappen",
      companylogo: require("./assets/images/makeithappenLogo.png"),
      date: "Mar 2022 – Present",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Automated internal processes improving Writer Guild of America East's (WGAE) workflow efficiency by 50%",
        "Designed and developed a React-based web app for Innova",
        "Enhanced and maintained PostgreSQL databases for Node.js based WGAE’s enterprise app",
        "Implemented RESTful APIs in Express.js",
        "Responsible for Sprint planning, backlog grooming, and release management",
        "Mentored two interns and helped them develop components running within a complex system"
      ]
    },
    {
      role: "Software Engineer",
      company: "Yonder Deep",
      companylogo: require("./assets/images/yonderDeepLogo.png"),
      date: "Jan 2022 – Jun 2023",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Developed Python-based software for a fully Autonomous Underwater Vehicle (AUV) for oceanographic research",
        "Led a team of five engineers to redesign and implement AUV’s Control System UI in Tkinter",
        "Implemented a Python based multithreaded radio communication system between AUV and its base station",
        "Diagnosed motion sensing issues, debugged code, and improved accuracy of AUV’s Control System",
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Saga",
      companylogo: require("./assets/images/sagaLogo.png"),
      date: "Jun 2021 – Aug 2021",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Worked in a team of five interns to develop a Java Spring-based backend for Selecta CRM app",
        "Used Hibernate to map an object-oriented domain model to a MySQL database",
        "Optimized database queries, improving response time by up to 2x",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: true, // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  // subtitle:
  //   "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "aleksastamenkovic74@gmail.com",
  resume: "https://drive.google.com/file/d/1uOzfWllSdvhKeMitQDzKU_slxKaGOaCN/view?usp=sharing"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
