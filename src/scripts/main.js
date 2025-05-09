const cvData = {
  profile: {
    name: "Touabi Yanis",
    socialLinks: [
      {
        icon: "fab fa-linkedin",
        url: "https://www.linkedin.com/in/yanis-touabi-529274197/",
        name: "/yanis-touabi-529274197",
      },
      {
        icon: "fab fa-github",
        url: "https://github.com/the-king-of-pirate",
        name: "/yanistouabi",
      },
      {
        icon: "fab fa-facebook",
        url: "https://www.facebook.com/yanis.touabi.2025/",
        name: "/yanistouabi00",
      },
      {
        icon: "fas fa-envelope",
        url: "mailto:yanis.touabi@gmail.com",
        name: "yanis.touabi@gmail.com",
      },
      {
        icon: "fas fa-phone",
        url: "tel:+213658294692",
        name: "+213658294692",
      },
    ],
  },
  about: {
    description:
      "Web developer with 2+ years of experience developing different backend and full-stack solutions in short periods of time. Extensive experience in developing projects from architecture to launch. I enjoy challenges and adapt quickly to different environments, always ready to explore new technologies. With strong motivation and a curious mindset, I strive to bring fresh ideas and deliver solutions that make a difference. ",
    skills: [
      // "Dart",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "jQuery",
      "React.js",
      "Next.js",
      "PHP",
      // "Flutter",
      "NestJS",
      "Docker",
      "Redis",
      "JWT",
      "SQL/NoSQL",
      "Nginx",
      "Traefik",
      "Tailwind CSS",
      "Git",
      "WebSocket",
      "Bash/shell",
      "Powershell",
      "CI/CD",
      "Software Architecture & Design",
    ],
  },
  experience: [
    {
      company: "Sarl Finnetude",
      position: "web developper",
      duration: "Sept 2023 - March 2025",
      description:
        "I developed an educational trading platform covering markets like spot, MMK, and forward, designed to handle high transaction volumes efficiently. I also contributed to multiple website projects, building scalable and high-performance APIs using Node.js and NestJS.",
    },
    {
      company: "Fentech",
      position: "Software developper",
      duration: "Sept 2023 - March 2024",
      description:
        "I developed robust APIs using Python and FastAPI, managed data with PostgreSQL, and helped design a distributed microservices architecture to enhance scalability and resilience.",
    },
    {
      company: "Freelance",
      position: "Tech Lead",
      duration: "Duration --> 3 Months (2025)",
      description:
        "I worked on the backend of a jewelry e-commerce store using NestJS and PostgreSQL, handling product listings, orders, and payments. I was also responsible for deploying the platform on a VPS using Docker, ensuring a smooth and reliable shopping experience.",
    },
    {
      company: "Freelance",
      position: "Full Stack Developer",
      duration: "Duration --> 3 Months (2023)",
      description:
        "I created a search platform for doctors and pharmacists, handling both the frontend and backend using HTML, CSS, JavaScript, jQuery, and PHP.",
    },
  ],
  education: [
    {
      degree: "Master in Visual Computing",
      duration: "Sep 2020 - Jul 2022",
      institution: "USTHB, ALGER",
      expertise: [
        {
          category: "General Computing and AI",
          details:
            "Advanced algorithms, complexity, databases, problem-solving, knowledge representation, and machine learning",
        },
        {
          category: "Visual Computing",
          details:
            "Image and video analysis, data visualization, multimedia application development",
        },
      ],
    },
    {
      degree:
        "Bachelor's degree in Information Systems and Software Engineering",
      duration: "Sep 2017 - Jul 2020",
      institution: "USTHB, ALGER",
      expertise: [
        {
          category: "Computer Science Foundations",
          details:
            "Strong foundation in computer science, software and hardware",
        },
        {
          category: "Core Principles & Networks",
          details:
            "Solid understanding of core concepts and network technologies",
        },
        {
          category: "Organizational Knowledge",
          details:
            "Proficient in organizational structures, management, and information systems",
        },
        {
          category: "Information Systems Development",
          details:
            "Skilled in the complete development cycle using modern methodologies and database management",
        },
        {
          category: "Software Development & Testing",
          details:
            "Competent in software development and thorough testing practices",
        },
      ],
    },
  ],
  skills: {
    technical: [
      "Full Stack Web Development (Mainly Backend)",
      "RESTful & GraphQL API Development",
      "Desktop Development (Mainly Windows/Linux)",
      "Mobile Development (Mainly Android)",
      "SQL/NoSQL Databases (PostgreSQL, MySQL, MongoDB)",
      "Distributed Systems & Microservices Architecture",
      "Containerization & Deployment (Docker, VPS)",
      "CI/CD & DevOps Basics",
      "Software Architecture & Design",
      "Real-Time Data Handling (WebSockets, Pub/Sub)",
      "Data Analysis & Processing",
      "Authentication & Authorization (JWT, OAuth)",
      "Version Control (Git & GitHub)",
    ],
  },
  languages: [
    {
      name: "French",
      proficiency: "Proficient",
    },
    {
      name: "Arabic",
      proficiency: "Proficient",
    },
    {
      name: "English",
      proficiency: "Proficient",
    },
    {
      name: "Deutsch",
      proficiency: "Intermediate (B1)",
    },
  ],
};

function loadCVData() {
  return cvData;
}

function populateProfile(data) {
  const profileHeader = document.querySelector("h1");
  profileHeader.textContent = data.profile.name;

  const socialLinks = document.querySelector(".social-links");
  socialLinks.innerHTML = data.profile.socialLinks
    .map(
      (link) => `
    <a href="${link.url}" target="_blank"><i class="${link.icon}"></i></a>
  `
    )
    .join("");
}

function populateAbout(data) {
  const aboutSection = document.querySelector(".container > .section-card");
  aboutSection.querySelector("p").textContent = data.about.description;

  const skillsContainer = aboutSection.querySelector(".skills");
  skillsContainer.innerHTML = data.about.skills
    .map(
      (skill) => `
    <span class="badge skill-badge">${skill}</span>
  `
    )
    .join("");
}

function populateExperience(data) {
  const experienceSection = document.querySelectorAll(".section-card")[1];

  // Separate company and freelance experiences
  const companyExperiences = data.experience.filter(
    (exp) => exp.company !== "Freelance"
  );
  const freelanceExperiences = data.experience.filter(
    (exp) => exp.company === "Freelance"
  );

  experienceSection.innerHTML = `
    <div class="experience-subsection">
      <h2><i class="fas fa-building me-2"></i>Experience at Companies</h2>
      ${companyExperiences
        .map(
          (exp) => `
        <div class="timeline-item">
          <h5>${exp.position} @ ${exp.company}</h5>
          <small>${exp.duration}</small>
          <div class="experience-details mt-2">
            <h6>Experience at company:</h6>
            <p>${exp.description}</p>
          </div>
        </div>
      `
        )
        .join("")}
    </div>

    <div class="experience-subsection">
      <h2><i class="fas fa-user-tie me-2"></i>Experience as a Freelancer</h2>
      ${freelanceExperiences
        .map(
          (exp) => `
        <div class="timeline-item">
          <h5>${exp.position} @ ${exp.company}</h5>
          <small>${exp.duration}</small>
          <div class="experience-details mt-2">
            <h6>Experience as freelancer:</h6>
            <p>${exp.description}</p>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  `;
}

function populateEducation(data) {
  const educationSection = document.querySelectorAll(".section-card")[2];
  educationSection.innerHTML = `
    <h2><i class="fas fa-graduation-cap me-2"></i>Education</h2>
    ${data.education
      .map(
        (edu) => `
      <div class="education-item">
        <h3>${edu.degree}</h3>
        <p class="duration">${edu.duration}</p>
        ${edu.expertise
          .map(
            (exp) => `
          <h4>${exp.category}:</h4>
          <ul>
            ${exp.details
              .split(". ")
              .filter((d) => d)
              .map(
                (detail) => `
              <li>${detail.trim()}${!detail.endsWith(".") ? "." : ""}</li>
            `
              )
              .join("")}
          </ul>
        `
          )
          .join("")}
        <p class="institution">${edu.institution}</p>
      </div>
    `
      )
      .join("")}
  `;
}

function populateSkills(data) {
  const skillsSection = document.querySelector("#skills-section");
  skillsSection.innerHTML = `
    <h2><i class="fas fa-tools me-2"></i>Technical Expertise</h2>
    <ul class="skills-list">
      ${data.skills.technical
        .map(
          (skill) => `
        <li>${skill}</li>
      `
        )
        .join("")}
    </ul>
  `;
}

function init() {
  // Theme toggle functionality
  const themeToggle = document.querySelector(".theme-toggle");
  const prefersLight = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;

  // Set initial theme
  if (
    localStorage.getItem("theme") === "light" ||
    (localStorage.getItem("theme") === null && prefersLight)
  ) {
    document.body.classList.add("light-mode");
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }

  // Toggle theme on button click
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const isLight = document.body.classList.contains("light-mode");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    themeToggle.innerHTML = isLight
      ? '<i class="fas fa-moon"></i>'
      : '<i class="fas fa-sun"></i>';
  });

  // Language bars animation
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll(".language-bar").forEach((bar) => {
    observer.observe(bar);
  });

  document.addEventListener("DOMContentLoaded", () => {
    const data = loadCVData();
    populateProfile(data);
    populateAbout(data);
    populateExperience(data);
    populateEducation(data);
    populateSkills(data);

    document.querySelector(".download-cv-btn").addEventListener("click", () => {
      const data = loadCVData();
      generateCV(data);
    });
  });
}
function generateCV(cvData) {
  const htmlContent = `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${cvData.profile.name} - Backend Developer</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
  <style>
      /* Set the printed page to A4 size with no default margin */
      @page {
          size: A4;
          margin: 0;
      }

      body {
          margin: 0;
          /* Remove extra body padding and use a dedicated content container */
          font-family: 'Calibri', sans-serif;
          color: #333;
          line-height: 1.6;
      }

      /* Fixed header to appear on every printed page */
      header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 1cm;
          background-color: #f8f9fa;
          border-bottom: 1px solid #3498db;
          padding: 0.5rem;
          text-align: center;
          z-index: 1000;
      }

      /* Fixed footer to appear on every printed page */
      footer {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1cm;
          background-color: #f8f9fa;
          border-top: 1px solid #3498db;
          padding: 0.5rem;
          text-align: center;
          z-index: 1000;
          font-size: 0.9rem;
      }

      /* Wrapper for the page content with extra spacing for header and footer */
      .page-content {
          padding: 1cm;
          /* Add extra top and bottom spacing to avoid fixed header and footer */
          min-height: 20cm; /* A4 height minus header/footer & extra padding */

      }

      .container {
          display: flex;
          /* This container now fills the remaining space in the page-content */
      }

      .sidebar {
          width: 30%;
          background-color: #f8f9fa;
          padding: 2rem;
      }

      .main-content {
          width: 70%;
          padding: 2rem;
      }

      h1 {
          font-size: 2.2rem;
          margin-bottom: 0.5rem;
          color: #2c3e50;
      }

      h2 {
          color: #2c3e50;
          border-bottom: 2px solid #3498db;
          padding-bottom: 0.3rem;
          font-size: 1.4rem;
          margin-top: 1.5rem;
      }

      .social-links {
          margin: 1rem 0;
      }

      .social-links a {
          color: #3498db;
          margin-right: 1rem;
          font-size: 1.2rem;
      }

      .skills {
          list-style: none;
          padding-left: 0;
          columns: 2;
          list-style-type: disc;
      }
      .tech-skills {
          list-style: none;
        list-style-type: disc;
          padding-left: 0;
          columns: 1;
            }
      .skills li {
          margin-bottom: 0.5rem;
      }

      .experience-item {
          margin-bottom: 1.5rem;
      }

      .company {
          font-weight: bold;
          color: #2c3e50;
      }

      .position {
          color: #3498db;
          margin: 0.3rem 0;
      }

      .duration {
          color: #7f8c8d;
          font-size: 0.9rem;
      }

      .description {
          margin: 0.5rem 0;
          font-size: 0.95rem;
      }

      .languages {
          columns: 1;
          list-style: none;
          padding-left: 0;
      }

      .language {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
      }
  </style>
</head>
<body>
  <!-- Header that will appear on every printed page -->
  <header>
      <h1 style="margin: 0; font-size: 1.8rem;">${
        cvData.profile.name
      } - Software Engineer</h1>
  </header>

  <!-- Footer that will appear on every printed page -->
  <footer>
      <span>Contact: ${cvData.profile.email || "yanis.touabi@gmail.com"}</span>
      <span style="margin-left: 1rem;">&copy; ${new Date().getFullYear()} ${
    cvData.profile.name
  }</span>
  </footer>

  <!-- Main content wrapper to provide spacing away from header and footer -->
  <div class="page-content">
    <div class="container">
        <div class="sidebar">
            <h1>${cvData.profile.name}</h1>
            
            <div class="social-links">
                ${cvData.profile.socialLinks
                  .map(
                    (link) =>
                      `
                       <a href="${link.url}"style="text-decoration: none;">
                       <i class="${link.icon}"></i> 
                       <span style="style:unset; color: black;font-size: 14px;font-family: bold;">${link.name}</span>
                       </a><br>
                       
                      `
                  )
                  .join(" ")}
            </div>

            <h2>Skills</h2>
            <ul class="skills">
                ${cvData.about.skills
                  .map((skill) => `<li>${skill}</li>`)
                  .join("")}
            </ul>

            <h2>Languages</h2>
            <ul class="languages">
                ${cvData.languages
                  .map(
                    (lang) => `
                    <li class="language">
                        <span>${lang.name}</span>
                        <span>${lang.proficiency}</span>
                    </li>`
                  )
                  .join("")}
            </ul>
        </div>

        <div class="main-content">
            <h2>Professional Experience</h2>
            <div class="experience">
            ${cvData.experience
              .map(
                (exp, index) => `
              ${(index + 1) % 5 === 0 ? '<div style="height: 7cm;"></div>' : ""}
                <div class="experience-item" >
                    <div class="company">${exp.company}</div>
                    <div class="position">${exp.position}</div>
                    <div class="duration">${exp.duration}</div>
                    <div class="description">${exp.description}</div>
                </div>
              `
              )
              .join("")}
            
            </div>

            <h2>Education</h2>
            <div class="education">
              ${cvData.education
                .map(
                  (edu) => `
                <div class="education-item">
                  <h3>${edu.degree}</h3>
                  <div class="duration">${edu.duration}</div>
                  ${edu.expertise
                    .map(
                      (exp) => `
                    <div class="expertise">
                      <h4>${exp.category}</h4>
                      <p>${exp.details}</p>
                    </div>
                  `
                    )
                    .join("")}
                  <div class="institution">${edu.institution}</div>
                </div>
              `
                )
                .join("")}
            </div>

            <h2>Technical Expertise</h2>
            <ul class="tech-skills">
                ${cvData.skills.technical
                  .map((skill) => `<li>${skill}</li>`)
                  .join("")}
            </ul>
        </div>
    </div>
  </div>
</body>
</html>`;

  // Open in new window and print
  const printWindow = window.open("", "_blank");
  printWindow.document.write(htmlContent);
  printWindow.document.close();
  printWindow.addEventListener("load", function () {
    setTimeout(() => {
      printWindow.focus();
      printWindow.print();
    }, 1000);
  });
}

init();
