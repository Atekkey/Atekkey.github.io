import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, User, Briefcase, MessageCircle, Home } from 'lucide-react';
import '../App3.css';
const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: MessageCircle }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "AI-Powered To-Do List",
      description: "A React-based to-do list with ChatGPT API integration for intelligent task formatting and contextual information extraction",
      tech: ["React", "JavaScript", "OpenAI API", "JSON"],
      link: "#",
      github: "https://github.com/ATekkey"
    },
    {
      title: "VOS Computer Vision Research",
      description: "Memory architecture optimization research contributing to 6% accuracy boost in leading VOS model",
      tech: ["Python", "PyTorch", "Deep Learning", "Slurm"],
      link: "#",
      github: "https://github.com/ATekkey"
    },
    {
      title: "Minesweeper Clone",
      description: "Object-oriented Python implementation with automated solving using BFS and pyAutoGUI",
      tech: ["Python", "pyAutoGUI", "BFS", "OOP"],
      link: "#",
      github: "https://github.com/ATekkey"
    }
  ];

  const experiences = [
    {
      title: "Research Assistant",
      company: "VOS Computer Vision Research - UIUC",
      period: "August 2024 - Present",
      description: "Explored memory architecture optimization, identified failure cases, and introduced back-propagation contributing to 6% accuracy boost. Leveraged Slurm for PyTorch job scheduling on NCSA research clusters."
    },
    {
      title: "Social Director",
      company: "Triangle Engineering Brotherhood",
      period: "January 2024 - June 2025",
      description: "Oversaw $5,000 budget organizing 12 successful social events. Supervised team of 17 chairs ensuring seamless event planning and coordination."
    },
    {
      title: "Volunteer Tutor",
      company: "Self-Employed",
      period: "August 2022 - June 2024",
      description: "Provided 40+ hours of tutoring in Chemistry, Biology, Physics, Math, Spanish, and Jazz auditions to high school and middle school students."
    }
  ];

  return (
    <div className="portfolio-container">
      {/* Navigation Bar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-content">
            {/* Logo */}
            <div className="logo">
              <h1 className="logo-text">Anand</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="desktop-nav">
              <div className="nav-links">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    >
                      <Icon size={16} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="mobile-menu-btn">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="menu-toggle"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-nav">
            <div className="mobile-nav-content">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Anand</h1>
            <p className="hero-subtitle">
              Computer Science Student & AI Research Assistant
            </p>
            <p className="hero-description">
              UIUC CS student specializing in AI/ML, computer vision research, and full-stack development. Building the future with code and innovation.
            </p>
          </div>
          
          <div className="social-links">
            <a href="https://github.com/ATekkey" className="social-link">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/ATekkey" className="social-link">
              <Linkedin size={24} />
            </a>
            <a href="mailto:anand@tekkey.net" className="social-link">
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="cta-button"
          >
            More About Me
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-container">
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div className="about-text">
              <h3 className="about-heading">Computer Science at UIUC</h3>
              <p className="about-description">
                I'm a Computer Science student at the University of Illinois at Urbana-Champaign with a 3.98 GPA, 
                specializing in AI/ML and computer vision research. Currently working as a Research Assistant in the 
                VOS Computer Vision lab, contributing to cutting-edge memory architecture optimization research.
              </p>
              <div className="skills-grid">
                <div className="skill-card">
                  <h4 className="skill-title frontend">Languages</h4>
                  <p className="skill-text">Python, C/C++, Java, JavaScript</p>
                </div>
                <div className="skill-card">
                  <h4 className="skill-title backend">AI/ML</h4>
                  <p className="skill-text">PyTorch, TensorFlow, OpenAI API</p>
                </div>
                <div className="skill-card">
                  <h4 className="skill-title database">Research</h4>
                  <p className="skill-text">Computer Vision, Deep Learning</p>
                </div>
                <div className="skill-card">
                  <h4 className="skill-title tools">Tools</h4>
                  <p className="skill-text">Git, Slurm, VS Code, UE5</p>
                </div>
              </div>
            </div>
            <div className="about-card">
              <div className="about-card-content">
                
                <img src="PNGs/face0.jpeg" alt="Anand Tekkey" className='profile-icon'/>
                
                <h3 className="card-title">Ready to collaborate?</h3>
                <p className="card-text">Let's build innovative solutions together</p>
                <div className="achievements">
                  <div className="achievement">
                    <strong>3.98 GPA</strong>
                    <span>UIUC Computer Science</span>
                  </div>
                  <div className="achievement">
                    <strong>Eagle Scout</strong>
                    <span>Boy Scouts of America</span>
                  </div>
                  <div className="achievement">
                    <strong>ML Certified</strong>
                    <span>Stanford University</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tech-tags">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.link} className="project-link demo">
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a href={project.github} className="project-link code">
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="section-container">
          <h2 className="section-title">Experience</h2>
          <div className="experience-list">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <h4 className="experience-company">{exp.company}</h4>
                <p className="experience-description">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <div className="contact-content">
            <h2 className="section-title">Contact Me!</h2>
            <div className="contact-info">
              <a href="mailto:anand@tekkey.net" className="contact-link">
                <Mail size={24} />
                <span>anand@tekkey.net</span>
              </a>
              <a href="tel:+16308061083" className="contact-link">
                <span>📞</span>
                <span>(630) 806-1083</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            © 2025 Anand
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;