import { useEffect, useState } from "react";
import { FaTwitter, FaInstagram, FaYoutube, FaThreads, FaGithub, FaAndroid, FaFacebook, FaLinkedin, FaArrowUp } from "react-icons/fa6";
import "./Home.css";
import "../styles/animations.css";
import { Link } from "react-router-dom";

function Home() {
  const [showScroll, setShowScroll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".animate");
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  const scrollProjects = (direction) => {
    const container = document.querySelector(".projects-grid");
    const scrollAmount = container.clientWidth / 2; // Scroll half the container width

    if (direction === "left") {
      container.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    } else {
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const projects = [
    {
      id: 1,
      title: "Sistem Manajemen Arsip UMY",
      shortDescription: "Sistem Manajemen Arsip adalah pekerjaan menyimpan surat atau dokumen-dokumen kegiatan-kegiatan yang...",
      fullDescription:
        "Sistem Manajemen Arsip adalah pekerjaan menyimpan surat atau dokumen-dokumen kegiatan-kegiatan yang dilakukan oleh Universitas Muhammadiyah Yogyakarta. Sistem ini membantu dalam pengarsipan, pencarian, dan pengelolaan dokumen secara efisien.",
      technologies: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
      features: ["Manajemen dokumen digital", "Pencarian dokumen", "Kategorisasi arsip", "Laporan dan statistik"],
      image: "/src/assets/projects/mintira.jpg",
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      title: "Aplikasi Agrolink",
      shortDescription: "Aplikasi Agrolink adalah platform digital yang membantu petani dan pengusaha pertanian untuk menjual produk pertanian secara online.",
      fullDescription: "Aplikasi Agrolink adalah platform digital yang membantu petani dan pengusaha pertanian untuk menjual produk pertanian secara online.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      features: ["Pembelian dan Penjualan", "Pencarian Produk", "Pembayaran Online", "Pengiriman dan Pengantaran", "Pembayaran Online", "Pengiriman dan Pengantaran"],
      image: "/src/assets/projects/agrolink.jpg",
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      shortDescription: "Aplikasi Agrolink adalah platform digital yang membantu petani dan pengusaha pertanian untuk menjual produk pertanian secara online.",
      fullDescription: "Aplikasi Agrolink adalah platform digital yang membantu petani dan pengusaha pertanian untuk menjual produk pertanian secara online.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      features: ["Pembelian dan Penjualan", "Pencarian Produk", "Pembayaran Online", "Pengiriman dan Pengantaran", "Pembayaran Online", "Pengiriman dan Pengantaran"],
      image: "/src/assets/projects/webself.jpg",
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 4,
      title: "Web AI Chatbot",
      shortDescription: "Aplikasi Agrolink adalah platform digital yang membantu petani dan pengusaha pertanian untuk menjual produk pertanian secara online.",
      fullDescription: "Aplikasi Agrolink adalah platform digital yang membantu petani dan pengusaha pertanian untuk menjual produk pertanian secara online.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      features: ["Pembelian dan Penjualan", "Pencarian Produk", "Pembayaran Online", "Pengiriman dan Pengantaran", "Pembayaran Online", "Pengiriman dan Pengantaran"],
      image: "/src/assets/projects/chatbotAI.jpg",
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 5,
      title: "Expense Tracker App",
      shortDescription: "Aplikasi Agrolink adalah platform digital yang membantu petani dan pengusaha pertanian untuk menjual produk pertanian secara online.",
      fullDescription: "Aplikasi Agrolink adalah platform digital yang membantu petani dan pengusaha pertanian untuk menjual produk pertanian secara online.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      features: ["Pembelian dan Penjualan", "Pencarian Produk", "Pembayaran Online", "Pengiriman dan Pengantaran", "Pembayaran Online", "Pengiriman dan Pengantaran"],
      image: "/src/assets/projects/expenseTracker.jpg",
      demoLink: "#",
      githubLink: "#",
    },

    {
      id: 6,
      title: "System Booking",
      shortDescription: "Aplikasi Agrolink adalah platform digital yang membantu petani dan pengusaha pertanian untuk menjual produk pertanian secara online.",
      fullDescription: "Aplikasi Agrolink adalah platform digital yang membantu petani dan pengusaha pertanian untuk menjual produk pertanian secara online.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      features: ["Pembelian dan Penjualan", "Pencarian Produk", "Pembayaran Online", "Pengiriman dan Pengantaran", "Pembayaran Online", "Pengiriman dan Pengantaran"],
      image: "/src/assets/projects/systemBookin.jpg",
      demoLink: "#",
      githubLink: "#",
    },
    // Add other pjects...
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h3 className="hello-text animate fade-in-up">Hello!</h3>
            <h1 className="animate fade-in-up delay-1">I'm Muhamad Firdaus</h1>
            <h2 className="animate fade-in-up delay-2">Android Developer & Mobile App Specialist</h2>
            <p className="hero-description animate fade-in-up delay-3">
              I'm Muhamad Firdaus, an Android developer currently expanding my skills as an AI engineer. My journey in technology started with Android development, where I focused on creating intuitive and efficient mobile applications.
              Now, I'm diving into the world of artificial intelligence, eager to explore how AI can transform industries and solve real-world problems. With a passion for learning and building, I aim to merge my expertise in mobile
              development with the power of AI to create innovative solutions. Outside of coding, I enjoy [mention hobbies or interests, such as reading, sports, or any relevant activity], which helps me stay creative and balanced. Welcome
              to my portfolio, where you'll find my work and learn more about my journey as both an Android developer and an aspiring AI engineer.
            </p>
            <div className="hero-buttons animate fade-in-up delay-4">
              <a href="#contact" className="primary-button">
                Hire me
              </a>
              <a href="#portfolio" className="secondary-button">
                <span className="play-icon">▶</span> Start Tour
              </a>
            </div>
          </div>
          <div className="hero-image animate fade-in-left">
            <img src="/src/assets/mintira.jpg" alt="Muhamad Firdaus" />
            <div className="experience-badge">
              <h3>1+ Years Of</h3>
              <h2>Experience</h2>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-images">
            <div className="image-circles">
              <div className="circle-container">
                <img src="/src/assets/about/about1.jpg" alt="Working" className="circle-img" />
              </div>
              <div className="circle-container">
                <img src="/src/assets/about/mintira.jpg" alt="Coding" className="circle-img" />
              </div>
              <div className="circle-container">
                <img src="/src/assets/mintira.jpg" alt="Meeting" className="circle-img" />
              </div>
              <div className="circle-border"></div>
              <div className="circle-line"></div>
            </div>
          </div>
          <div className="about-content">
            <h2>About Me</h2>
            <p>
              Let me share my story! I am an UI/UX Designer with 5+ years of experience in web application development. Throughout my career, I have had the opportunity to gain experience through various internship programs at several
              technology companies and work on freelance projects, both individually and in teams.
            </p>
            <p>
              In application development, I master PHP and Golang technology for implementing frameworks such as Laravel, Codeigniter, Echo Framework, and Gin Framework. My expertise also includes configuring and managing Linux-based
              servers, which helps me to understand the deployment aspect thoroughly.
            </p>
            <p>As an enthusiastic developer, I have a high passion for learning new technologies and good adaptability, both in the context of the work environment and the latest technological developments.</p>
          </div>
        </div>

        {/* Experience Timeline Section */}
        <div className="experience-section">
          <h2>Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Mobil Development - Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka - Internship</h3>
                <span className="timeline-date">Aug 2023 - Jan 2024</span>
                <ul>
                  <li>Online Self-paced Learning : Basic Kotlin, Android for Beginner, Fundamental Android, SOLID Pardigm, Intermediete Android, Android Jetpack Compose.</li>
                  <li>Online Synchronous Sessions</li>
                  <li>Reflection & Consultation</li>
                  <li>Capstone Project buld Application Mobile</li>
                  <li>And etc.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Talent Management System - PT. BFI Finance Indonesia - Internship as Employee</h3>
                <span className="timeline-date">Sep 2022 - Sep 2023</span>
                <ul>
                  <li>Participating in the planning and execution of talent management-related projects.</li>
                  <li>Ensuring projects align with company goals and policies.</li>
                  <li>Collaborating with the team to identify Key Performance Indicators (KPIs) related to talent.</li>
                  <li>Understanding evaluation parameters for talent success and growth.</li>
                  <li>Developing an in-depth understanding of talent management information needs.</li>
                  <li>Build System Monitoring Talent with Power BI</li>
                  <li>And etc.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Study Assistant - PGRI University of Yogyakarta - Internship</h3>
                <span className="timeline-date">Oct 2022 - Dec 2022</span>
                <ul>
                  <li>Management Website Program Study Elektromedis Universitas PGRI Yogyakarta</li>
                  <li>Management Website Program Study Teknik Informatika Universitas PGRI Yogyakarta</li>
                  <li>Design Poster Promosi Program Study Elektromedis</li>
                  <li>Develop API Multi Cloud Credential Laravel</li>
                  <li>Create API Project Electronic Car Charging and Implementation Payment Gateway Midtrans (Go Gin)</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Data Entry Assistant - PT. IZZ Griya Media Nusantara - Employee</h3>
                <span className="timeline-date">Feb 2022 - Jun 2022</span>
                <ul>
                  <li>Collaborate with team to make a good business</li>
                  <li>Handle data to posting at platform media</li>
                  <li>Inputting text, numbers, or other data into databases, spreadsheets, or software. </li>
                  <li>Entering and updating records in databases (e.g., CRM systems, ERP software).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <h2 className="section-title animate fade-in-up">Skill Highlight</h2>
        <div className="skills-grid">
          <div className="skills-row animate fade-in-up delay-1">
            <div className="skill-icon">
              <img src="/src/assets/skills/html.png" alt="HTML5" />
              <span>HTML</span>
            </div>
            <div className="skill-icon">
              <img src="/src/assets/skills/css.png" alt="CSS3" />
              <span>CSS</span>
            </div>
            <div className="skill-icon">
              <img src="/src/assets/skills/javascript.png" alt="JavaScript" />
              <span>Javascript</span>
            </div>
            <div className="skill-icon">
              <img src="/src/assets/skills/php.png" alt="PHP" />
              <span>PHP</span>
            </div>
          </div>

          <div className="skills-row animate fade-in-up delay-2">
            <div className="skill-icon">
              <img src="/src/assets/skills/golang.png" alt="Golang" />
              <span>Golang</span>
            </div>
            <div className="skill-icon">
              <img src="/src/assets/skills/laravel.png" alt="Laravel" />
              <span>Laravel</span>
            </div>
            <div className="skill-icon">
              <img src="/src/assets/skills/codelgniter.png" alt="CodeIgniter" />
              <span>CodeIgniter</span>
            </div>
            <div className="skill-icon">
              <img src="/src/assets/skills/mysql.png" alt="MySQL" />
              <span>MySQL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="projects-section">
        <h2 className="section-title animate fade-in-up">Project Result</h2>
        <div className="projects-container">
          <button className="scroll-button left" onClick={() => scrollProjects("left")}>
            &#8249;
          </button>

          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card animate fade-in-up">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.shortDescription}</p>
                  <Link to={`/project/${project.id}`} className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <button className="scroll-button right" onClick={() => scrollProjects("right")}>
            &#8250;
          </button>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}></button>
            <div className="modal-body">
              <img src={selectedProject.image} alt={selectedProject.title} />
              <h2>{selectedProject.title}</h2>
              <p className="project-description">{selectedProject.fullDescription}</p>

              <div className="project-details">
                <h3>Technologies Used</h3>
                <div className="tech-stack">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <h3>Key Features</h3>
                <ul className="feature-list">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-links">
                <a href={selectedProject.demoLink} className="demo-link" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a href={selectedProject.githubLink} className="github-link" target="_blank" rel="noopener noreferrer">
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Social Links */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-column">
            <h3>About Me</h3>
            <p>Thanks for visit my personal web</p>
            <p className="copyright">Copyright © 2025 All rights reserved | created by Muhamad Firdaus</p>
          </div>

          <div className="footer-column">
            <h3>Criticism and suggestions</h3>
            <div className="footer-form">
              <input type="email" placeholder="Enter Email" />
              <button type="submit">
                <span className="arrow-icon">→</span>
              </button>
            </div>
            <p>Please Comment</p>
          </div>

          <div className="footer-column">
            <h3>Follow Me</h3>
            <p>Let us be social</p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
