import { Link } from "react-router-dom";
import {
  Linkedin,
  Github,
  Mail,
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  Code2,
} from "lucide-react";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="hero-kicker">MBA Student • Engineer • Consumer Researcher • Product Strategist</p>

          <h1>
            <span className="highlight">Ga</span>yatr<span className="highlight">i</span>
            <br />
            Sawant
          </h1>

          <p className="hero-headline">
            Bridging <span>product</span>, <span>strategy</span>, and{" "}
            <span>engineering</span>
          </p>

          <p className="hero-description">
            I'm graduating from Yale SOM in May 2026 and actively exploring full-time roles in product management 
            and strategy & operations, particularly at companies where tech meets consumer behavior. 
            I bring an unusual mix: a heavily machine-learning focused undergrad, 3 years of cloud infrastructure experience, 
            an MBA focused on customer insights and AI, and a genuine love of talking to users.
          </p>

          <div className="hero-actions">
            <Link className="primary-btn" to="/projects">
              View Projects
              <ArrowRight size={18} />
            </Link>

            <Link className="primary-btn" to="/resume">
              View Resume
            </Link>

            <Link className="primary-btn" to="https://calendly.com/gtrswnt/30min" target="_blank" rel="noreferrer">
              Schedule Coffee Chat
            </Link>
          </div>

          <div className="hero-links" aria-label="External links">
            <a
              href="https://www.linkedin.com/in/gayatrirsawant/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>

            <a
              href="https://github.com/GaeaStorm"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} />
              GitHub
            </a>

            <a href="mailto:your-email@example.com">
              <Mail size={18} />
              Email
            </a>
          </div>
        </div>

        <aside className="summary-card" aria-label="Profile summary">
          <div className="summary-top">
            <p className="summary-label">Profile Snapshot</p>
            <div className="summary-line" />
          </div>

          {/* <h3>Experience across engineering, product, and strategy</h3> */}

          <div className="summary-blocks">
            <div className="summary-item">
              <div className="summary-icon">
                <GraduationCap size={18} />
              </div>
              <div>
                <p className="summary-item-label">Education</p>
                <p className="summary-item-value">MBA, Yale University (May 2026)</p>
                <p className="summary-item-subtitle">Focus: Management Science</p>
                <p className="summary-item-value">BSc, Rice University (May 2021)</p>
                <p className="summary-item-subtitle">Major: Computer Science</p>
                <p className="summary-item-subtitle">Minors: Data Science, Mathematics</p>
              </div>
            </div>

            <div className="summary-item">
              <div className="summary-icon">
                <Code2 size={18} />
              </div>
              <div>
                <p className="summary-item-label">Experience</p>
                <p className="summary-item-value">Strategy Intern, Julius Baër (Summer 2025)</p>
                <p className="summary-item-value">Software Engineer, Oracle Cloud (2021 - 2024)</p>
              </div>
            </div>

            <div className="summary-item">
              <div className="summary-icon">
                <BriefcaseBusiness size={18} />
              </div>
              <div>
                <p className="summary-item-label">Highlights</p>
                <p className="summary-item-value">Julius Baër</p>
                <p className="summary-item-subtitle">50% faster account opening through cross-divisional process redesign</p>

                <p className="summary-item-value">Oracle Cloud</p>
                <p className="summary-item-subtitle">150% improvement in VM onboarding delivery timelines</p>
              </div>
            </div>
          </div>

          {/* <div className="focus-section">
            <p className="focus-label">Interested In</p>
            <div className="focus-pills">
              <span>Product Management</span>
              <span>Strategy &amp; Operations</span>
              <span>AI &amp; Analytics</span>
            </div>
          </div> */}
        </aside>
      </section>
    </div>
  );
}

export default Home;