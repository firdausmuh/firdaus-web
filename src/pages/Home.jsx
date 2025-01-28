import { useEffect } from "react";
import { FaTwitter, FaInstagram, FaYoutube, FaThreads, FaGithub, FaAndroid, FaFacebook, FaLinkedin } from "react-icons/fa6";
import "./Home.css";
import "../styles/animations.css";

function Home() {
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
                <h3>Golang Developer - PT. Asia Hakarya Abadi - Employee</h3>
                <span className="timeline-date">Oct 2023 - Now</span>
                <ul>
                  <li>Fix and refactor existing code ERP System</li>
                  <li>Develop a new API module ERP System</li>
                  <li>Set up the base project point of sale (POS) and implement microservices using architecture using gRPC</li>
                  <li>Apply clean code principles across the project</li>
                  <li>And etc.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Backend Developer - CV Technopartner Indonesia - Employee</h3>
                <span className="timeline-date">Apr 2023 - Nov 2023</span>
                <ul>
                  <li>Develop API Integration E-Commerce to Lazada (Golang Echo)</li>
                  <li>Develop API Internal System Laravel</li>
                  <li>Create API Internal Project management Laravel</li>
                  <li>Develop API Multi Cloud Credential Laravel</li>
                  <li>Create API Project Electronic Car Charging and Implementation Payment Gateway Midtrans (Go Gin)</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Junior Software Engineer - Excelsia Learning Center (ELC) - Internship</h3>
                <span className="timeline-date">Nov 2021 - Feb 2022</span>
                <ul>
                  <li>Design and develop application systems and web apps</li>
                  <li>Synthesize business requirements into design</li>
                  <li>Collaborate with product and UI/UX teams to execute development plans</li>
                  <li>Research new technologies for ELC services</li>
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
        <div className="projects-grid">
          <div className="project-card animate fade-in-up delay-1">
            <div className="project-image">
              <img src="/src/assets/projects/project1.jpg" alt="Sistem Manajemen Arsip UMY" />
            </div>
            <div className="project-content">
              <h3>Sistem Manajemen Arsip UMY</h3>
              <p>Sistem Manajemen Arsip adalah pekerjaan menyimpan surat atau dokumen-dokumen kegiatan-kegiatan yang...</p>
              <a href="#" className="read-more">
                Read More
              </a>
            </div>
          </div>

          <div className="project-card animate fade-in-up delay-2">
            <div className="project-image">
              <img src="/src/assets/projects/project1.jpg" alt="Sistem Informasi Sekolah" />
            </div>
            <div className="project-content">
              <h3>Sistem Informasi Sekolah</h3>
              <p>Sistem Informasi Sekolah dengan Laravel dan Vue. Solusi Mudah untuk Menyebarkan Informasi Sekolah/Sis...</p>
              <a href="#" className="read-more">
                Read More
              </a>
            </div>
          </div>

          <div className="project-card animate fade-in-up delay-3">
            <div className="project-image">
              <img src="/src/assets/projects/project1.jpg" alt="Official Web Landing Page Organization" />
            </div>
            <div className="project-content">
              <h3>Official Web Landing Page Organization</h3>
              <p>Official Web Landing Page Organization dibuat menggunakan laravel 7 &nbsp;...</p>
              <a href="#" className="read-more">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-column">
            <h3>About Us</h3>
            <p>Thanks for visit my personal web</p>
            <p className="copyright">Copyright © 2025 All rights reserved | created by Laili Septiandi</p>
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
            <h3>Follow Us</h3>
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
