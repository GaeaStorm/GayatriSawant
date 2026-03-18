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
import { useEffect, useMemo, useState } from "react";
import "./Home.css";

function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const resumeUrl = useMemo(
    () => `${import.meta.env.BASE_URL}resume_260317.pdf`,
    []
  );

  useEffect(() => {
    if (isResumeOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => document.body.classList.remove("modal-open");
  }, [isResumeOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsResumeOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="hero-kicker">
            MBA Student • Engineer • Consumer Researcher • Product Strategist
          </p>

          <h1>
            <span className="highlight">Ga</span>yatr
            <span className="highlight">i</span>
            <br />
            Sawant
          </h1>

          <p className="hero-headline">
            Bridging <span>product</span>, <span>strategy</span>, and{" "}
            <span>engineering</span>
          </p>

          <p className="hero-description">
            I'm graduating from Yale SOM in May 2026 and actively exploring
            full-time roles in product management and strategy &amp; operations,
            particularly at companies where tech meets consumer behavior. I
            bring an unusual mix: a heavily machine-learning focused undergrad,
            3 years of cloud infrastructure experience, an MBA focused on
            customer insights and AI, and a genuine love of talking to users.
          </p>

          <div className="hero-actions">
            <Link className="primary-btn" to="/projects">
              View Projects
              <ArrowRight size={18} />
            </Link>

            <button
              type="button"
              className="primary-btn"
              onClick={() => setIsResumeOpen(true)}
            >
              View Resume
            </button>

            <a
              className="primary-btn"
              href="https://calendly.com/gtrswnt/30min"
              target="_blank"
              rel="noreferrer"
            >
              Schedule Coffee Chat
            </a>
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

          <div className="summary-blocks">
            <div className="summary-item">
              <div className="summary-icon">
                <GraduationCap size={18} />
              </div>
              <div>
                <p className="summary-item-label">Education</p>
                <p className="summary-item-value">
                  MBA, Yale University (May 2026)
                </p>
                <p className="summary-item-subtitle">
                  Focus: Management Science
                </p>
                <p className="summary-item-value">
                  BSc, Rice University (May 2021)
                </p>
                <p className="summary-item-subtitle">
                  Major: Computer Science
                </p>
                <p className="summary-item-subtitle">
                  Minors: Data Science, Mathematics
                </p>
              </div>
            </div>

            <div className="summary-item">
              <div className="summary-icon">
                <Code2 size={18} />
              </div>
              <div>
                <p className="summary-item-label">Experience</p>
                <p className="summary-item-value">
                  Strategy Intern, Julius Baër (Summer 2025)
                </p>
                <p className="summary-item-value">
                  Software Engineer, Oracle Cloud (2021 - 2024)
                </p>
              </div>
            </div>

            <div className="summary-item">
              <div className="summary-icon">
                <BriefcaseBusiness size={18} />
              </div>
              <div>
                <p className="summary-item-label">Highlights</p>
                <p className="summary-item-value">Julius Baër</p>
                <p className="summary-item-subtitle">
                  50% faster account opening through cross-divisional process
                  redesign
                </p>

                <p className="summary-item-value">Oracle Cloud</p>
                <p className="summary-item-subtitle">
                  150% improvement in VM onboarding delivery timelines
                </p>
              </div>
            </div>
          </div>
        </aside>
      </section>

      {isResumeOpen && (
        <div className="resume-modal" onClick={() => setIsResumeOpen(false)}>
          <div
            className="resume-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="resume-modal-header">
              <h2>Resume</h2>
              <div className="resume-modal-actions">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="resume-link"
                >
                  Download
                </a>
                <button
                  type="button"
                  className="resume-close"
                  onClick={() => setIsResumeOpen(false)}
                  aria-label="Close resume modal"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="resume-modal-body">
              <iframe
                src={resumeUrl}
                title="Resume PDF"
                className="resume-frame"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;