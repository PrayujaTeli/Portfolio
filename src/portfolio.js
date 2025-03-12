/* Change this file to get your personal Portfolio */
 
// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Scree

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Prayuja Teli",
  title: "Hi all, I'm Prayuja",
  subTitle: emoji(
    "A Data Analyst with over 5 years of experience in the Healthcare, Information Technology, and Supply Chain Management industries, specializing in analyzing datasets related to COVID-19, breast cancer, diabetes, Alzheimer’s, and kidney disease. I excel in Python, SQL, and data visualization tools. Currently pursuing graduate studies at Drexel University, I recently served my Co-Op as a Data System Analyst Intern at McCollister’s Global Services."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1MRnP7CF56BfdEcoBtwDOhul_H0UIespz/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/PrayujaTeli",
  linkedin: "https://www.linkedin.com/in/teliprayuja/",
  gmail: "pst29@drexel.edu",
  medium: "https://medium.com/@teliprayuja",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "PASSIONATE DATA ANALYST WHO TURNS DATA INTO ACTIONABLE INSIGHTS",
  skills: [
    emoji("⚡ Collect, clean, and preprocess large datasets for analysis"),
    emoji("⚡ Develop data visualizations and dashboards to uncover trends"),
    emoji("⚡ Perform statistical analysis and predictive modeling"),
    emoji("⚡ Work with databases to extract, transform, and analyze data"),
    emoji("⚡ Automate reports using Python and business intelligence tools")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "NumPy & Pandas",
    fontAwesomeClassname: "fas fa-cube"
  },
  {
    skillName: "PySpark",
    fontAwesomeClassname: "fas fa-bolt"
  },
  {
    skillName: "Matplotlib, Seaborn, Plotly",
    fontAwesomeClassname: "fas fa-chart-line"
  },
  {
    skillName: "Beautiful Soup & Selenium",
    fontAwesomeClassname: "fas fa-spider"
  },
  {
    skillName: "SQL",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "MySQL & SQL Server",
    fontAwesomeClassname: "fas fa-server"
  },
  {
    skillName: "Google BigQuery",
    fontAwesomeClassname: "fab fa-google"
  },
  {
    skillName: "SQLite & PostgreSQL",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "SSMS & Azure Data Studio",
    fontAwesomeClassname: "fab fa-microsoft"
  },
  {
    skillName: "Tableau & Power BI",
    fontAwesomeClassname: "fas fa-chart-bar"
  },
  {
    skillName: "Excel",
    fontAwesomeClassname: "fas fa-file-excel"
  },
  {
    skillName: "Jupyter Notebook",
    fontAwesomeClassname: "fas fa-book"
  },
  {
    skillName: "ETL Tools",
    fontAwesomeClassname: "fas fa-server"
  }
],
display: true // Set false to hide this section
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Drexel University",
      logo: require("./assets/images/drexelLogo.jpg"), // Replace with actual logo file
      subHeader: "Master of Science in Computer Science",
      duration: "September 2023 - June 2025",
      desc: "Focused on data analytics, machine learning, and computer science.",
      descBullets: [
        "Course Assistant for introductory programming, mentoring 200+ students through grading, tutoring, and discussions.",
        "VP of Student Life, Graduate Student Association, organizing events like Philadelphia Museum Night for 350+ students managing planning and logistics."
      ]
    },
    {
      schoolName: "Rajarambapu Institute of Technology (RIT)",
      logo: require("./assets/images/ritLogo.png"), // Replace with actual logo file
      subHeader: "Bachelor of Technology in Computer Science & Engineering",
      duration: "August 2014 - May 2018",
      desc: "Gained a strong foundation in computer science and analytics.",
      descBullets: [
        "Led a club of 25+ members focused on data analysis projects, applying statistical techniques and machine learning algorithms to real-world datasets.",
        "Mentored 50+ students by preparing lesson plans, resolving SQL, Excel, and ML queries, and providing feedback on assignments."
      ]
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming (Python)", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "SQL",
      progressPercentage: "98%"
    },
    {
      Stack: "Data Analysis",
      progressPercentage: "95%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Systems Analyst Intern (Data Processing)",
      company: "McCollister’s Global Services, Inc.",
      companylogo: require("./assets/images/mccollistersLogo.jpg"),
      date: "Jul 2024 - Jan 2025",
      desc: "A Data System Analyst Intern",
      descBullets: [
        "Generated a Power BI dashboard for payroll to reduce discrepancies by 15% and cut processing time by 20%.",
        "Analyzed over 200,000 logistics records to optimize transportation routes and reduce costs by 15%."
            ]
    },
    {
      role: "Data Analyst",
      company: "Krishagni Solutions Pvt Ltd (OpenSpecimen Bio-banking LIMS)",
      companylogo: require("./assets/images/krishagniLogo.png"),
      date: "Apr 2019 - Sep 2023",
      desc: "A Senior Data Analyst",
      descBullets: [
        "Created 25+ Tableau dashboards analyzing patient trends in COVID-19, Alzheimer’s, HIV, and cancer.",
        "Cleaned 200+ research documents, improving workflow efficiency by 35% and researcher adoption.",
        "Analyzed 30+ client deliverables, increasing retention rates by 30%."
      ]
      
    },
    {
      role: "Analyst",
      company: "eClerx Pvt Ltd",
      companylogo: require("./assets/images/eClerxLogo.jpeg"),
      date: "Jun 2018 - Mar 2019",
      desc: "A Analyst",
      descBullets: [
        "Built Tableau dashboards for KPIs across 7+ areas, enhancing technician tracking and decisions by 20%.",
        "Developed linear regression models to forecast technician requests, optimizing resource allocation by 25%."
      ]      
    }
  ]
};




const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Dashboards",
  subtitle: "HERE ARE SOME DASHBOARDS I CREATED ON TABLEAU PUBLIC",
  projects: [
    {
      image: require("./assets/images/Red30.png"),
      projectName: "Sales Analysis",
      projectDesc: "Red30 Tech Sales Analysis",
      footerLink: [
        {
          name: "Visit Dashboard",
          url: "https://public.tableau.com/app/profile/prayuja.teli/viz/Red30TechSalesAnalysis/Dashboard1"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/VitalGuardAnalytics.png"),
      projectName: "VitalGuard Analysis",
      projectDesc: "Sucide Dataset Analysis",
      footerLink: [
        {
          name: "Visit Dashboard",
          url: "https://public.tableau.com/app/profile/prayuja.teli/viz/VitalGuardAnalytics/Dashboard1"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Testimonials 🏆 "),
  subtitle:
    "I've worked with amazing people—here’s what they say!",

  achievementsCards: [
   
    {
      title: "Grace McFarlane",
      subtitle:
        "Dana-Farber Cancer Institute- Client during OpenSpecimen",
      image: require("./assets/images/GraceMcFarlane.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Source",
          url: "https://www.linkedin.com/in/teliprayuja/details/recommendations/?detailScreenTabIndex=0"
        }
      ]
    },

    {
      title: "Amber Hides Miranda",
      subtitle: "OpenClinica (QLHC)- Client during OpenSpecimen",
      image: require("./assets/images/AmberHidesMiranda.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Source",
          url: "https://www.linkedin.com/in/teliprayuja/details/recommendations/?detailScreenTabIndex=0"
        }
      ]
    },
    {
      title: "Christopher Koncur",
      subtitle:
        "Reporting Manager during Analyst Intern at McCollister's Global Services",
      image: require("./assets/images/ReportingManager.png"),
      imageAlt: "Analytics Intern",
      footerLink: [
        {
          name: "Source",
          url: "https://github.com/PrayujaTeli/Testimonials/blob/main/Chris%20Koncur%20Reporting%20Manager.png"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};



// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Technology and Travel, I enjoy writing and sharing it with others what I have learnt.",
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
  display: true // Set false to hide this section, defaults to true
};
// Podcast Section

const podcastSection = {
  title: emoji("YouTube 🎙️"),
  subtitle: "I LOVE TO POST ABOUT MY DAYS AND IN GENERAL LIFE",

  // Please Provide with Your Podcast embeded Link
   podcast: ["https://www.youtube.com/embed/8Ia_FOjhOcg"],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (215) 669 1582",
  email_address: "pst29@drexel.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set to false if you are not looking for a job.

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
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
