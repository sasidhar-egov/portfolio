import React, { useState } from 'react';
import { Calendar, ExternalLink, Code, Shield, Users, Zap,ChevronRight, Download, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

import MyImage from "./assets/WhatsApp Image 2025-07-05 at 11.53.39_8f9030ea.jpg";
import resume from "./assets/resume_final.pdf"
const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (page) => {
    setCurrentPage(page);
  };

  const Navbar = () => (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>Sasidhar Jonna</h2>
        </div>
        <div className="nav-menu">
          <button
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => navigate('home')}
          >
            Home
          </button>
          <button
            className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
            onClick={() => navigate('about')}
          >
            About
          </button>
          <button
            className={`nav-link ${currentPage === 'projects' ? 'active' : ''}`}
            onClick={() => navigate('projects')}
          >
            Projects
          </button>
          <button
            className={`nav-link ${currentPage === 'skills' ? 'active' : ''}`}
            onClick={() => navigate('skills')}
          >
            Skills
          </button>
          <button
            className={`nav-link ${currentPage === 'certifications' ? 'active' : ''}`}
            onClick={() => navigate('certifications')}
          >
            Certifications
          </button>
          <button
            className={`nav-link ${currentPage === 'experience' ? 'active' : ''}`}
            onClick={() => navigate('experience')}
          >
            Experience
          </button>
          <button
            className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
            onClick={() => navigate('contact')}
          >
            Contact
          </button>
          <button
            className={`nav-link ${currentPage === 'resume' ? 'active' : ''}`}
            onClick={() => navigate('resume')}
          >
            Resume
          </button>
        </div>
      </div>
    </nav>
  );

  const Home = () => (
    <div className="page home-page">
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Sasidhar Jonna</span>
            </h1>
            <p className="hero-subtitle">Full-Stack Developer & Problem Solver</p>
            <p className="hero-description">
              Passionate about creating innovative web solutions with React.js, Node.js, and Spring Boot.
              Currently working as a Full-Stack Developer Intern at eGov Foundation.
            </p>
            <div className="hero-skills">
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">HTML</span>
              <span className="skill-tag">Data Structures</span>
              <span className="skill-tag">Python</span>
            </div>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => navigate('projects')}>
                View My Work <ChevronRight size={18} />
              </button>
              <button className="btn-secondary" onClick={() => navigate('contact')}>
                Let's Connect
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-placeholder">
                {/* <div className="profile-icon"> */}
                <img src={MyImage} className='myImage' />
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const About = () => (
    <div className="page about-page">
      <div className="container">
        <h1 className="page-title">About Me</h1>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              I'm a passionate Full-Stack Developer with expertise in modern web technologies.
              Currently Working as a Full-Stack Developer Intern at eGov Foundation.
            </p>

            <div className="about-section">
              <h3>Background</h3>
              <p>
                I have a strong foundation in both frontend and backend development, with hands-on experience
                in React.js, Node.js, and Spring Boot. My journey includes solving 500+ LeetCode problems
                and working on real-world projects that impact thousands of users.
              </p>
            </div>

            <div className="about-section">
              <h3>Current Role</h3>
              <p>
                Working as a Full-Stack Developer Intern at eGov Foundation, where I develop scalable
                applications, optimize RESTful APIs, and enhance user experiences while following Agile methodologies.
              </p>
            </div>

            <div className="about-section">
              <h3>Education</h3>
              <div className="education-item">
                <h4>Vellore Institute of Technology (Amaravati)</h4>
                <p>B.Tech in Computer Science Engineering (8.76 CGPA) • 2021 - 2025</p>
              </div>
              <div className="education-item">
                <h4>Nxtwave Disruptive Technologies</h4>
                <p>Industry Ready Certification in Full-stack Development • Oct 2021 - 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const Projects = () => (
    <div className="page projects-page">
      <div className="container">
        <h1 className="page-title">My Projects</h1>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-header">
              <h3>Digit-Frontend Version Upgrade</h3>
              <span className="project-type">Enterprise Project</span>
            </div>
            <p className="project-description">
              Migrated project build system to Webpack-based compiler, upgraded React 17 → 19,
              Node.js 14 → 20, and implemented React Router v6 with @tanstack/react-query.
            </p>
            <div className="project-tech">
              <span className="tech-tag">React 19</span>
              <span className="tech-tag">Webpack</span>
              <span className="tech-tag">Node.js 20</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/eGov/DIGIT-Frontend/tree/VersionUpgrade-test5-withPackages" target="_blank" className="project-link">
                <ExternalLink size={16} /> View Project
              </a>
            </div>
          </div>
          <div className="project-card">
            <div className="project-header">
              <h3>NxtWatch Platform</h3>
              <span className="project-type">Video Platform</span>
            </div>
            <p className="project-description">
              YouTube-inspired application with video categories, search functionality,
              and customizable themes. Features secure authentication and protected routes.
            </p>
            <div className="project-tech">
              <span className="tech-tag">React.js</span>
              <span className="tech-tag">REST API</span>
              <span className="tech-tag">Cookies</span>
              <span className="tech-tag">React Router</span>
              <span className="tech-tag">Express.js</span>
              <span className="tech-tag">Context</span>
              <span className="tech-tag">Styled Component</span>


              <span className="tech-tag">JWT</span>
            </div>
            <div className="project-links">
              <a href="https://sasiproject035.ccbp.tech" target="_blank" className="project-link">
                <ExternalLink size={16} /> View Live Demo
              </a>
            </div>
          </div>


          <div className="project-card">
            <div className="project-header">
              <h3>Jobby App</h3>
              <span className="project-type">Web Application</span>
            </div>
            <p className="project-description">
              Comprehensive job search solution with Login, Home, Jobs, and Job details pages.
              Implemented secure authentication with JWT tokens and protected routes.
            </p>
            <div className="project-tech">
              <span className="tech-tag">React.js</span>
              <span className="tech-tag">CSS</span>
              <span className="tech-tag">REST API</span>
              <span className="tech-tag">Cookies</span>
              <span className="tech-tag">React Router</span>
              <span className="tech-tag">Express.js</span>
              <span className="tech-tag">JWT</span>

            </div>
            <div className="project-links">
              <a href="https://sasiproject030.ccbp.tech" target="_blank" className="project-link">
                <ExternalLink size={16} /> View Live Demo
              </a>
            </div>
          </div>
          <div className="project-card">
            <div className="project-header">
              <h3>NxtTrendz</h3>
              <span className="project-type">E-Commerce Project</span>
            </div>
            <p className="project-description">
              Created a E-Commerce website using React with Login, Home, Products, and Product details pages with Filter based search.
              Implemented secure authentication with JWT tokens and protected routes.
            </p>
            <div className="project-tech">
              <span className="tech-tag">React.js</span>
              <span className="tech-tag">CSS</span>
              <span className="tech-tag">REST API</span>
              <span className="tech-tag">Cookies</span>
              <span className="tech-tag">React Router</span>
              <span className="tech-tag">Cookies</span>
              <span className="tech-tag">Express.js</span>
            </div>
            <div className="project-links">
              <a href="https://sasiproject023.ccbp.tech/" target="_blank"
                className="project-link">
                <ExternalLink size={16} /> View Live Demo
              </a>
            </div>
          </div>


        </div>
      </div>
    </div>
  );

  const Skills = () => (
    <div className="page skills-page">
      <div className="container">
        <h1 className="page-title">Skills & Technologies</h1>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend Development</h3>
            <div className="skills-list">
              <div className="skill-item">
                <span className="skill-name">HTML5</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '97%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">CSS3</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">JavaScript</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '88%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">React.js</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '94%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Bootstrap</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3>Backend Development</h3>
            <div className="skills-list">
              <div className="skill-item">
                <span className="skill-name">Node.js</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Express.js</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '82%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Spring Boot</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '68%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Python</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Java</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '78%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3>Database & Tools</h3>
            <div className="skills-list">
              <div className="skill-item">
                <span className="skill-name">SQLite</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '98%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">RDBMS</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '97%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Git</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Agile Methodology</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3>Problem Solving</h3>
            <div className="achievement-card">
              <h4>🏆 500+ LeetCode Problems Solved</h4>
              <p>Strong foundation in Data Structures & Algorithms</p>
              <div className="achievement-stats">
                <span className="stat">DSA</span>
                <span className="stat">Problem Solving</span>
                <span className="stat">Optimization</span>
              </div>
              <a href="https://leetcode.com/u/Sasidhar17/" target="_blank" className="project-link">
                <ExternalLink size={16} /> Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const Certifications = () => (
    <div className="page certifications-page">
      <div className="container">
        <h1 className="page-title">Certifications</h1>
        <div className="certifications-grid">
          <div className="cert-category">
            <h3>NxtWave Certifications</h3>
            <div className="cert-list">
              <div className="cert-item">
                <h4>React JS</h4>
                <p>Advanced React.js development and best practices</p>
                <a href="https://certificates.ccbp.in/academy/react-js?id=BLUZNUUYKH" target="_blank" className="cert-link">View Certificate</a>
              </div>
              <div className="cert-item">
                <h4>Node JS</h4>
                <p>Backend development with Node.js and Express</p>
                <a href="https://certificates.ccbp.in/academy/node-js?id=MHXJXRWZMX" target="_blank" className="cert-link">View Certificate</a>
              </div>
              <div className="cert-item">
                <h4>JavaScript Essentials</h4>
                <p>Core JavaScript concepts and ES6+ features</p>
                <a href="https://certificates.ccbp.in/academy/dynamic-web-application?id=YOAHKKBIPE" target="_blank" className="cert-link">View Certificate</a>
              </div>
              <div className="cert-item">
                <h4>Programming Foundations with Python</h4>
                <p>Python programming fundamentals and applications</p>
                <a href="https://certificates.ccbp.in/academy/programming-foundations-with-python?id=MNJPGNSPWS" target="_blank" className="cert-link">View Certificate</a>
              </div>
              <div className="cert-item">
                <h4>Responsive Web Design using Flexbox</h4>
                <p>Modern CSS layout techniques and responsive design</p>
                <a href="https://certificates.ccbp.in/academy/dynamic-web-application?id=YOAHKKBIPE" target="_blank" className="cert-link">View Certificate</a>
              </div>
              <div className="cert-item">
                <h4>Introduction to Databases</h4>
                <p>Database design and SQL fundamentals</p>
                <a href="https://certificates.ccbp.in/academy/introduction-to-databases?id=QDFZNNLVXO" target="_blank" className="cert-link">View Certificate</a>
              </div>
            </div>
          </div>

          <div className="cert-category">
            <h3>Industry Certifications</h3>
            <div className="cert-list">
              <div className="cert-item">
                <h4>Data Analytics - IntrainTech</h4>
                <p>Data analysis techniques and visualization</p>
                <a href="https://drive.google.com/file/d/1-q-O2tr6pD9XXDvknAdkYVfDicOO-w83/view?pli=1" target="_blank" className="cert-link">View Certificate</a>
              </div>
              <div className="cert-item">
                <h4>Python - HackerRank</h4>
                <p>Python programming skills validation</p>
                <a href="https://drive.google.com/file/d/1uVJ5mr2KzGlLwfofbcXfPHMHK4d5qcC4/view" target="_blank" className="cert-link">View Certificate</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const Contact = () => {
    const scriptURL = "https://script.google.com/macros/s/AKfycbxcPbF5ckmiNhppHYuZwX6Qbq_tEIdoSYIRD7-GoEA8olck9h2NNx31IKTZcSYfbXD2xQ/exec"

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(scriptURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();
        console.log('Success!', result);

        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } catch (error) {
        console.log('Error!', error.message);
      }
    };

    return (
      <div className="page contact-page">
        <div className="container">
          <h1 className="page-title">Get In Touch</h1>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Connect</h3>
              <p>
                I'm always open to discussing new opportunities, collaborations,
                or just having a chat about technology and development.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <Mail size={20} />
                  <span>jonna.sasi17@gmail.com</span>
                </div>
                <div className="contact-item">
                  <Phone size={20} />
                  <span>+91 9392188092</span>
                </div>
                <div className="contact-item">
                  <MapPin size={20} />
                  <span>Bengaluru, Karnataka</span>
                </div>
              </div>

              <div className="social-links">
                <a href="https://www.linkedin.com/in/sasidharjonna/" target="_blank" className="social-link">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/sasidhar-egov" target="_blank" className="social-link">
                  <Github size={24} />
                </a>

              </div>
            </div>

            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Resume = () => (
    <div className="page resume-page">
      <div className="container">
        <h1 className="page-title">Resume</h1>
        <div className="resume-content">
          <div className="resume-header">
            <p>Download my resume to learn more about my experience and qualifications.</p>
            <a href={resume} download>
              <button className="btn-primary download-btn">
                <Download size={20} />
                Download Resume PDF
              </button>
            </a>
          </div>

          <div className="resume-preview">
            <div className="resume-card">
              <h3>Resume Preview</h3>
              <p>
                Full-Stack Developer with expertise in React.js, Node.js, and Spring Boot.
                Currently working at eGov Foundation with strong academic background
                from VIT Amaravati.
              </p>
              <div className="resume-highlights">
                <div className="highlight-item">
                  <strong>Education:</strong> B.Tech CSE (8.76 CGPA) - VIT Amaravati
                </div>
                <div className="highlight-item">
                  <strong>Experience:</strong> Full-Stack Developer Intern at eGov Foundation
                </div>
                <div className="highlight-item">
                  <strong>Skills:</strong> React.js, Node.js, Spring Boot, Python, Java
                </div>
                <div className="highlight-item">
                  <strong>Achievement:</strong> 500+ LeetCode Problems Solved
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );


  const Experience = () => {
    const currentDate = new Date();
    const startDate = new Date('2025-03-01');
    const monthsDifference = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24 * 30));
    const duration = monthsDifference < 1 ? 'Present' : `${monthsDifference} months`;

    return (
      <div className="experience-page page">
        <div className="container">
          <h1 className="page-title">Experience</h1>

          <div className="experience-timeline">
            <div className="experience-item">
              <div className="experience-header">
                <div className="experience-title-section">
                  <h2 className="experience-role">Full-Stack Developer Intern</h2>
                  <div className="experience-company">
                    <h3 className="company-name">eGov Foundation</h3>
                    <a
                      href="https://egov.org.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="company-link"
                    >
                      <ExternalLink size={16} />
                      egov.org.in
                    </a>
                  </div>
                </div>

                <div className="experience-meta">
                  <div className="experience-duration">
                    <Calendar size={16} />
                    <span>October 2024 - Present</span>
                  </div>
                  <div className="experience-location">
                    <MapPin size={16} />
                    <span>On-Site</span>
                  </div>
                </div>
              </div>

              <div className="experience-content">
                <div className="experience-description">
                  <div className="responsibility-item">
                    <div className="responsibility-icon">
                      <Code size={20} />
                    </div>
                    <p>Developing full-stack applications using React.js, Node.js, and Spring Boot.</p>
                  </div>

                  <div className="responsibility-item">
                    <div className="responsibility-icon">
                      <Shield size={20} />
                    </div>
                    <p>Building and optimizing RESTful APIs with secure authentication.</p>
                  </div>

                  <div className="responsibility-item">
                    <div className="responsibility-icon">
                      <Zap size={20} />
                    </div>
                    <p>Added accessibility features to Digit UI components.</p>
                  </div>

                  <div className="responsibility-item">
                    <div className="responsibility-icon">
                      <Users size={20} />
                    </div>
                    <p>Following Agile methodologies for efficient development.</p>
                  </div>
                </div>

                <div className="tech-stack">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    <span className="tech-tag">React.js</span>
                    <span className="tech-tag">JavaScript</span>
                    <span className="tech-tag">HTML</span>
                    <span className="tech-tag">RESTful APIs</span>
                    <span className="tech-tag">Authentication</span>
                    <span className="tech-tag">Accessibility</span>
                    <span className="tech-tag">Agile</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="experience-summary">
            <h2>Professional Summary</h2>
            <p>
              Currently gaining hands-on experience in full-stack developments. Working with modern web technologies to build
              scalable and accessible applications while following industry best practices.
            </p>
          </div>
        </div>
      </div>
    );
  };



  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home />;
      case 'about': return <About />;
      case 'projects': return <Projects />;
      case 'skills': return <Skills />;
      case 'certifications': return <Certifications />;
      case 'contact': return <Contact />;
      case 'resume': return <Resume />;
      case "experience": return <Experience />
      default: return <Home />;
    }
  };

  return (
    <div className="portfolio">
      <style jsx>{`
        * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
  background: #0a0a0a;
}

.portfolio {
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  color: #ffffff;
}

/* Navbar Styles */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-container {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.nav-logo h2 {
  color: #00d4ff;
  font-weight: 700;
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);
}

.nav-menu {
  display: flex;
  gap: 0.5rem;
}

.nav-link {
  background: none;
  border: none;
  color: #ffffff;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: clamp(0.8rem, 1.5vw, 1rem);
}

.nav-link:hover {
  background: rgba(0, 212, 255, 0.1);
  color: #00d4ff;
}

.nav-link.active {
  background: #00d4ff;
  color: #0a0a0a;
}

/* Page Styles */
.page {
  padding-top: 80px;
  width:100%;
  min-height: 100vh;
}

.container {
  margin: 0 auto;
  padding: clamp(1rem, 3vw, 2rem);
}

.page-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
  .about-page{
  width:100%;
  @media (max-width: 768px) {
    margin-top: 10%;
  }
  
  }

/* Home Page Styles */
.home-page {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  min-height: calc(100vh - 80px);
  @media (max-width: 768px) {
    margin-top: 10%;
  }
}

.hero-section {
  width: 100%;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-title {
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.projects-page{
  @media (max-width: 768px) {
    margin-top: 10%;
  }
}
.highlight {
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  color: #00d4ff;
  margin-bottom: 1rem;
  font-weight: 600;
}

.hero-description {
  font-size: clamp(1rem, 2vw, 1.1rem);
  color: #cccccc;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.skill-tag {
  background: rgba(0, 212, 255, 0.1);
  color: #00d4ff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: clamp(0.8rem, 1.5vw, 0.9rem);
  font-weight: 500;
  border: 1px solid rgba(0, 212, 255, 0.3);
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.resume-page{
  @media (max-width: 768px) {
    margin-top: 10%;
  }
}
.btn-primary {
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  color: #0a0a0a;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: clamp(0.9rem, 2vw, 1rem);
  white-space: nowrap;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
}
.certifications-page{
  @media (max-width: 768px) {
    margin-top: 10%;
  }
}

.btn-secondary {
  background: transparent;
  color: #00d4ff;
  border: 2px solid #00d4ff;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: clamp(0.9rem, 2vw, 1rem);
  white-space: nowrap;
}

.btn-secondary:hover {
  background: #00d4ff;
  color: #0a0a0a;
  transform: translateY(-2px);
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  width: 100%;
  max-width: 400px;
}

.profile-placeholder {
  width: clamp(200px, 25vw, 300px);
  height: clamp(200px, 25vw, 300px);
  border-radius: 50%;
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin: 0 auto;
}

.profile-icon {
  filter: drop-shadow(0 0 20px rgba(0, 212, 255, 0.5));
}

/* About Page Styles */
.about-content {
  max-width: 800px;
  margin: 0 auto;
}

.about-intro {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: #cccccc;
  margin-bottom: 2rem;
  text-align: center;
}

.about-section {
  margin-bottom: 2rem;
}

.about-section h3 {
  color: #00d4ff;
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  margin-bottom: 1rem;
}

.about-section p {
  color: #cccccc;
  line-height: 1.6;
  font-size: clamp(0.9rem, 2vw, 1rem);
}

.education-item {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1rem;
}

.education-item h4 {
  color: #00d4ff;
  margin-bottom: 0.5rem;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
}

/* Projects Page Styles */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(400px, 100%), 1fr));
  gap: 2rem;
}

.project-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 212, 255, 0.2);
  border-color: rgba(0, 212, 255, 0.3);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 1rem;
}

.project-header h3 {
  color: #ffffff;
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  font-weight: 600;
}

.project-type {
  background: rgba(0, 212, 255, 0.2);
  color: #00d4ff;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: clamp(0.7rem, 1.5vw, 0.8rem);
  font-weight: 500;
  white-space: nowrap;
}

.project-description {
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: clamp(0.9rem, 2vw, 1rem);
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background: rgba(0, 212, 255, 0.1);
  color: #00d4ff;
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  font-size: clamp(0.7rem, 1.5vw, 0.8rem);
  font-weight: 500;
  border: 1px solid rgba(0, 212, 255, 0.3);
}

.project-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.project-link {
  color: #00d4ff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  transition: all 0.3s ease;
  font-size: clamp(0.8rem, 1.8vw, 1rem);
}

.project-link:hover {
  color: #ffffff;
  transform: translateX(5px);
}

/* Skills Page Styles */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(350px, 100%), 1fr));
  gap: 2rem;
}

.skill-category {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  backdrop-filter: blur(10px);
}

.skill-category h3 {
  color: #00d4ff;
  font-size: clamp(1.2rem, 3vw, 1.4rem);
  margin-bottom: 1.5rem;
  text-align: center;
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skill-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.skill-name {
  color: #ffffff;
  font-weight: 500;
  font-size: clamp(0.8rem, 1.8vw, 0.9rem);
}
.skills-page{
  @media (max-width: 768px) {
    margin-top: 10%;
  }
}

.skill-bar {
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, #00d4ff, #0099cc);
  border-radius: 10px;
  transition: width 0.3s ease;
}

.achievement-card {
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
}

.achievement-card h4 {
  color: #00d4ff;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  margin-bottom: 1rem;
}

.achievement-card p {
  color: #cccccc;
  margin-bottom: 1rem;
  font-size: clamp(0.9rem, 2vw, 1rem);
}

.achievement-stats {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.stat {
  background: rgba(0, 212, 255, 0.2);
  color: #00d4ff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: clamp(0.8rem, 1.5vw, 0.9rem);
  font-weight: 500;
}

/* Certifications Page Styles */
.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(500px, 100%), 1fr));
  gap: 3rem;
}

.cert-category {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  backdrop-filter: blur(10px);
}

.cert-category h3 {
  color: #00d4ff;
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  margin-bottom: 2rem;
  text-align: center;
}

.cert-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.cert-item {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.cert-item:hover {
  transform: translateY(-3px);
  border-color: rgba(0, 212, 255, 0.3);
}

.cert-item h4 {
  color: #ffffff;
  font-size: clamp(1rem, 2.2vw, 1.1rem);
  margin-bottom: 0.5rem;
}

.cert-item p {
  color: #cccccc;
  font-size: clamp(0.8rem, 1.8vw, 0.9rem);
  margin-bottom: 1rem;
}

.cert-link {
  color: #00d4ff;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  font-size: clamp(0.9rem, 2vw, 1rem);
}

.cert-link:hover {
  color: #ffffff;
}

/* Contact Page Styles */
.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1000px;
  margin: 0 auto;
}

.contact-info h3 {
  color: #00d4ff;
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  margin-bottom: 1rem;
}

.contact-info p {
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-size: clamp(0.9rem, 2vw, 1rem);
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #cccccc;
  font-size: clamp(0.9rem, 2vw, 1rem);
}

.contact-item svg {
  color: #00d4ff;
  flex-shrink: 0;
}

.social-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 50%;
  color: #00d4ff;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #00d4ff;
  color: #0a0a0a;
  transform: translateY(-3px);
}

.contact-form {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  backdrop-filter: blur(10px);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 1rem;
  color: #ffffff;
  font-size: clamp(0.9rem, 2vw, 1rem);
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #00d4ff;
  box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #999999;
}

/* Resume Page Styles */
.resume-content {
  max-width: 800px;
  margin: 0 auto;
}

.resume-header {
  text-align: center;
  margin-bottom: 3rem;
}

.resume-header p {
  color: #cccccc;
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  margin-bottom: 2rem;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: clamp(1rem, 2.2vw, 1.1rem);
  padding: 1rem 2rem;
}
.myImage {
  height: 70%;
  width: 70%;
  border-radius: 100%;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0.1, 0.1, 0, 0.9);

    object-position: 60% 5%; /* Center horizontally, move view 20% from the top */


}

.resume-preview {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(10px);
}

.resume-card {
  padding: 2rem;
}

.resume-card h3 {
  color: #00d4ff;
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  margin-bottom: 1rem;
}

.resume-card p {
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-size: clamp(0.9rem, 2vw, 1rem);
}

.resume-highlights {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.highlight-item {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 1rem;
  color: #cccccc;
  font-size: clamp(0.9rem, 2vw, 1rem);
}

.highlight-item strong {
  color: #00d4ff;
}

/* Enhanced Responsive Design */
@media (max-width: 1024px) {
  .hero-content {
    gap: 3rem;
  }
  
  .contact-content {
    gap: 3rem;
  }
  
  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(min(350px, 100%), 1fr));
  }
}

@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  .nav-menu {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.3rem;
  }

  .nav-link {
    padding: 0.4rem 0.8rem;
  }

  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }

  .hero-buttons {
    justify-content: center;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .certifications-grid {
    grid-template-columns: 1fr;
  }

  .project-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  .certification-page{
    @media (max-width: 768px) {
     margin-top: 10%;
  }
  }
  .project-type {
    align-self: flex-start;
  }

  .social-links {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 1rem;
  }

  .page {
    padding-top: 100px;
  }

  .hero-buttons {
    flex-direction: column;
    width: 100%;
    gap: 0.8rem;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    justify-content: center;
    padding: 0.8rem 1.5rem;
  }

  .profile-card {
    padding: 1.5rem;
  }

  .skill-category,
  .cert-category {
    padding: 1.5rem;
  }

  .contact-form {
    padding: 1.5rem;
  }

  .nav-menu {
    gap: 0.2rem;
  }

  .nav-link {
    padding: 0.3rem 0.6rem;
  }
}

@media (max-width: 360px) {
  .container {
    padding: 0.8rem;
  }

  .hero-section {
    padding: 1rem;
  }

  .project-card,
  .skill-category,
  .cert-category {
    padding: 1rem;
  }

  .contact-form {
    padding: 1rem;
  }

  .resume-card {
    padding: 1rem;
  }

  .profile-card {
    padding: 1rem;
  }
}
.contact-page{
  @media (max-width: 768px) {
    margin-top: 10%;
  }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .portfolio {
    background: #000000;
  }
  
  .skill-tag,
  .tech-tag,
  .stat {
    border-width: 2px;
  }
  
  .project-card,
  .skill-category,
  .cert-category {
    border-width: 2px;
  }
}
/* Experience Page Styles */
.experience-page {
  @media (max-width: 768px) {
    margin-top: 10%;
  }
}

.experience-timeline {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
}

.experience-timeline::before {
  content: '';
  position: absolute;
  left: 30px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #00d4ff, rgba(0, 212, 255, 0.3));
}

.experience-item {
  position: relative;
  margin-bottom: 3rem;
  padding-left: 80px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.experience-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 212, 255, 0.1);
  border-color: rgba(0, 212, 255, 0.3);
}

.experience-item::before {
  content: '';
  position: absolute;
  left: -49px;
  top: 2rem;
  width: 20px;
  height: 20px;
  background: #00d4ff;
  border-radius: 50%;
  border: 4px solid #0a0a0a;
  z-index: 1;
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.experience-title-section {
  flex: 1;
}

.experience-role {
  font-size: clamp(1.3rem, 3vw, 1.8rem);
  font-weight: 700;
  color: #00d4ff;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.experience-company {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.company-name {
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  font-weight: 600;
  color: #ffffff;
  margin: 0;
}

.company-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #00d4ff;
  text-decoration: none;
  font-size: clamp(0.9rem, 2vw, 1rem);
  transition: all 0.3s ease;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
}

.company-link:hover {
  background: rgba(0, 212, 255, 0.1);
  transform: translateX(5px);
}

.experience-meta {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-end;
}

.experience-duration,
.experience-location {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #cccccc;
  font-size: clamp(0.8rem, 1.5vw, 0.95rem);
  font-weight: 500;
}

.experience-duration svg,
.experience-location svg {
  color: #00d4ff;
}

.experience-content {
  display: grid;
  gap: 2rem;
}

.experience-description {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.responsibility-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.responsibility-item:hover {
  background: rgba(0, 212, 255, 0.03);
  border-color: rgba(0, 212, 255, 0.2);
}

.responsibility-icon {
  background: rgba(0, 212, 255, 0.1);
  color: #00d4ff;
  padding: 0.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  border: 1px solid rgba(0, 212, 255, 0.3);
}

.responsibility-item p {
  margin: 0;
  color: #e0e0e0;
  font-size: clamp(0.9rem, 2vw, 1rem);
  line-height: 1.6;
  flex: 1;
}

.tech-stack {
  margin-top: 1rem;
}

.tech-stack h4 {
  color: #00d4ff;
  font-size: clamp(1rem, 2vw, 1.1rem);
  margin-bottom: 1rem;
  font-weight: 600;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: rgba(0, 212, 255, 0.1);
  color: #00d4ff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: clamp(0.8rem, 1.5vw, 0.9rem);
  font-weight: 500;
  border: 1px solid rgba(0, 212, 255, 0.3);
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: rgba(0, 212, 255, 0.2);
  transform: translateY(-2px);
}

.experience-summary {
  max-width: 1000px;
  margin: 4rem auto 0;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  backdrop-filter: blur(10px);
}

.experience-summary h2 {
  color: #00d4ff;
  font-size: clamp(1.3rem, 3vw, 1.5rem);
  margin-bottom: 1rem;
  font-weight: 700;
}

.experience-summary p {
  color: #cccccc;
  font-size: clamp(1rem, 2vw, 1.1rem);
  line-height: 1.6;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .experience-timeline::before {
    left: 15px;
  }
  
  .experience-item {
    padding-left: 60px;
    padding: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .experience-item::before {
    left: -34px;
    width: 16px;
    height: 16px;
  }
  
  .experience-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .experience-meta {
    align-items: flex-start;
    width: 100%;
  }
  
  .experience-company {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .responsibility-item {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .responsibility-icon {
    align-self: flex-start;
  }
}

@media (max-width: 480px) {
  .experience-timeline::before {
    display: none;
  }
  
  .experience-item {
    padding-left: 1rem;
  }
  
  .experience-item::before {
    display: none;
  }
}


/* Print styles */
@media print {
  .navbar {
    display: none;
  }
  
  .page {
    padding-top: 0;
  }
  
  .portfolio {
    background: white;
    color: black;
  }
  
  .btn-primary,
  .btn-secondary {
    border: 2px solid black;
    background: white;
    color: black;
  }
}
      `}</style>
      <Navbar />
      {renderPage()}
    </div>
  );
};

export default Portfolio;