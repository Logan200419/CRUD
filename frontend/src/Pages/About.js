import React, { useEffect, useRef } from "react";
import "./PageStyles.css";

const About = () => {
  const observerRef = useRef();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const heroRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        heroRef.current.style.transform = `translateY(${parallax}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const teamMembers = [
    {
      name: "Dr. Sarah Wilson",
      role: "System Administrator",
      description:
        "Lead developer and system architect with 10+ years of experience in educational technology.",
      avatar: "SW",
      email: "sarah.wilson@studentcms.edu",
    },
    {
      name: "Prof. Michael Johnson",
      role: "Academic Director",
      description:
        "Oversees academic operations and curriculum management across all departments.",
      avatar: "MJ",
      email: "michael.johnson@studentcms.edu",
    },
    {
      name: "Emily Rodriguez",
      role: "Student Services Manager",
      description:
        "Manages student enrollment, support services, and administrative operations.",
      avatar: "ER",
      email: "emily.rodriguez@studentcms.edu",
    },
    {
      name: "David Chen",
      role: "Financial Controller",
      description:
        "Handles all financial operations, billing, and payment processing systems.",
      avatar: "DC",
      email: "david.chen@studentcms.edu",
    },
  ];

  const features = [
    {
      icon: "👥",
      title: "Student Management",
      description:
        "Comprehensive student record management with enrollment tracking and academic progress monitoring.",
    },
    {
      icon: "📚",
      title: "Course Administration",
      description:
        "Complete course catalog management with scheduling, instructor assignment, and capacity tracking.",
    },
    {
      icon: "💰",
      title: "Financial Management",
      description:
        "Integrated billing system with payment tracking, fee management, and financial reporting.",
    },
    {
      icon: "📊",
      title: "Analytics & Reporting",
      description:
        "Detailed analytics and customizable reports for informed decision making.",
    },
    {
      icon: "🔒",
      title: "Security & Privacy",
      description:
        "Enterprise-grade security with role-based access control and data encryption.",
    },
    {
      icon: "📱",
      title: "Mobile Responsive",
      description:
        "Fully responsive design that works seamlessly across all devices and platforms.",
    },
  ];

  const stats = [
    { number: "1,247", label: "Active Students" },
    { number: "15", label: "Courses Offered" },
    { number: "23", label: "Faculty Members" },
    { number: "5", label: "Years of Service" },
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <div className="about-hero" ref={heroRef}>
        <div className="hero-content animate-on-scroll fade-in-up">
          <div className="hero-badge">
            <span className="badge-icon">🎓</span>
            <span>Student Management System</span>
          </div>
          <h1 className="hero-title">
            Empowering Education Through
            <span className="highlight"> Smart Technology</span>
          </h1>
          <p className="hero-description">
            Our comprehensive Student Management System streamlines
            administrative processes, enhances student experiences, and provides
            powerful insights to educational institutions worldwide. Built with
            modern technology and designed for the future of education.
          </p>
          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-item animate-on-scroll fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual animate-on-scroll slide-in-right">
          <div className="visual-card">
            <div className="card-header">
              <div className="card-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="card-content">
              <div className="demo-chart">
                <div
                  className="chart-bar animate-chart"
                  style={{ height: "60%", animationDelay: "0.5s" }}
                ></div>
                <div
                  className="chart-bar animate-chart"
                  style={{ height: "80%", animationDelay: "0.6s" }}
                ></div>
                <div
                  className="chart-bar animate-chart"
                  style={{ height: "45%", animationDelay: "0.7s" }}
                ></div>
                <div
                  className="chart-bar animate-chart"
                  style={{ height: "90%", animationDelay: "0.8s" }}
                ></div>
                <div
                  className="chart-bar animate-chart"
                  style={{ height: "70%", animationDelay: "0.9s" }}
                ></div>
              </div>
              <div className="demo-stats">
                <div
                  className="demo-stat animate-on-scroll fade-in-up"
                  style={{ animationDelay: "1s" }}
                >
                  <span className="demo-icon">👥</span>
                  <span>1,247 Students</span>
                </div>
                <div
                  className="demo-stat animate-on-scroll fade-in-up"
                  style={{ animationDelay: "1.1s" }}
                >
                  <span className="demo-icon">📚</span>
                  <span>15 Courses</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="content-card animate-on-scroll fade-in-up">
        <div className="section-header">
          <h2>Powerful Features</h2>
          <p>
            Everything you need to manage your educational institution
            efficiently
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card animate-on-scroll scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="content-card animate-on-scroll fade-in-up">
        <div className="section-header">
          <h2>Meet Our Team</h2>
          <p>
            The dedicated professionals behind our Student Management System
          </p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-card animate-on-scroll slide-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="team-avatar">
                <div className="avatar-circle">{member.avatar}</div>
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-description">{member.description}</p>
                <a href={`mailto:${member.email}`} className="team-email">
                  📧 {member.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="content-grid">
        <div className="content-card animate-on-scroll slide-in-left">
          <div className="mission-card">
            <div className="mission-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
              To revolutionize educational administration by providing
              intuitive, comprehensive, and scalable management solutions that
              empower institutions to focus on what matters most - student
              success and academic excellence.
            </p>
          </div>
        </div>
        <div className="content-card animate-on-scroll slide-in-right">
          <div className="mission-card">
            <div className="mission-icon">🔮</div>
            <h3>Our Vision</h3>
            <p>
              To become the leading platform for educational management,
              fostering innovation in learning environments and creating
              seamless experiences for students, educators, and administrators
              worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="content-card animate-on-scroll fade-in-up">
        <div className="section-header">
          <h2>Built with Modern Technology</h2>
          <p>
            Our system leverages cutting-edge technologies for optimal
            performance
          </p>
        </div>
        <div className="tech-stack">
          <div className="tech-category animate-on-scroll slide-in-left">
            <h4>Frontend</h4>
            <div className="tech-items">
              <span className="tech-item">React.js</span>
              <span className="tech-item">JavaScript</span>
              <span className="tech-item">CSS3</span>
              <span className="tech-item">HTML5</span>
            </div>
          </div>
          <div
            className="tech-category animate-on-scroll fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h4>Backend</h4>
            <div className="tech-items">
              <span className="tech-item">Node.js</span>
              <span className="tech-item">Express.js</span>
              <span className="tech-item">MongoDB</span>
              <span className="tech-item">RESTful APIs</span>
            </div>
          </div>
          <div
            className="tech-category animate-on-scroll slide-in-right"
            style={{ animationDelay: "0.4s" }}
          >
            <h4>Security</h4>
            <div className="tech-items">
              <span className="tech-item">JWT Authentication</span>
              <span className="tech-item">HTTPS</span>
              <span className="tech-item">Data Encryption</span>
              <span className="tech-item">Role-based Access</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="content-card animate-on-scroll fade-in-up">
        <div className="section-header">
          <h2>Get in Touch</h2>
          <p>Have questions or need support? We're here to help!</p>
        </div>
        <div className="contact-grid">
          <div
            className="contact-item animate-on-scroll bounce-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="contact-icon">📧</div>
            <h4>Email Support</h4>
            <p>support@studentcms.edu</p>
            <small>Response within 24 hours</small>
          </div>
          <div
            className="contact-item animate-on-scroll bounce-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="contact-icon">📞</div>
            <h4>Phone Support</h4>
            <p>+1 (555) 123-4567</p>
            <small>Mon-Fri, 9 AM - 6 PM EST</small>
          </div>
          <div
            className="contact-item animate-on-scroll bounce-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="contact-icon">📍</div>
            <h4>Office Address</h4>
            <p>
              123 Education Ave
              <br />
              Learning City, LC 12345
            </p>
            <small>Visit us for in-person support</small>
          </div>
          <div
            className="contact-item animate-on-scroll bounce-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="contact-icon">💬</div>
            <h4>Live Chat</h4>
            <p>Available 24/7</p>
            <small>Instant support when you need it</small>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="about-footer animate-on-scroll fade-in-up">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Student Management System</h4>
            <p>
              Empowering education through intelligent technology solutions.
            </p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#support">Support</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#documentation">Documentation</a>
              </li>
              <li>
                <a href="#api">API Reference</a>
              </li>
              <li>
                <a href="#tutorials">Tutorials</a>
              </li>
              <li>
                <a href="#updates">Updates</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Student Management System. All rights reserved.</p>
          <p>Version 1.0.0 | Built with ❤️ for education</p>
        </div>
      </div>
    </div>
  );
};

export default About;
