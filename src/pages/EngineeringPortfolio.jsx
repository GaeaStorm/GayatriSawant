import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  Monitor,
} from "lucide-react";
import "./EngineeringPortfolio.css";
import "../index.css";

const featuredProjects = [
  {
    title: "Food Detection + Recipe Generation",
    eyebrow: "AI Application",
    icon: <BrainCircuit size={18} />,
    summary:
      "Built an end-to-end pipeline that converts image inputs into structured recipe outputs using computer vision and LLM integration.",
    tech: ["Python", "Computer Vision", "OpenAI API"],
    highlights: [
      "Integrated image-based detection with downstream LLM generation",
      "Designed structured prompt pipelines for consistent outputs",
      "Handled real-world input variability and edge cases",
    ],
    href: "https://github.com/GaeaStorm/FoodDetection_RecipeGen",
  },
  {
    title: "COMP421 Kernel",
    eyebrow: "Systems Programming",
    icon: <Cpu size={18} />,
    summary:
      "Implemented core operating system functionality at the kernel level, working directly with low-level system abstractions.",
    tech: ["C", "Operating Systems", "Kernel"],
    highlights: [
      "Worked with memory, processes, and system-level execution",
      "Implemented non-trivial logic close to hardware/runtime",
      "Demonstrates strong systems and debugging fundamentals",
    ],
    href: "https://github.com/GaeaStorm/COMP421_Kernel",
  },
  {
    title: "DengAI Challenge",
    eyebrow: "Machine Learning",
    icon: <Database size={18} />,
    summary:
      "Built predictive models on real-world epidemiological data to forecast dengue case counts.",
    tech: ["Python", "Pandas", "Scikit-learn"],
    highlights: [
      "Performed feature engineering on noisy time-series data",
      "Trained and evaluated regression models",
      "Focused on model performance and generalization",
    ],
    href: "https://github.com/GaeaStorm/DengAI-Challenge",
  },
  {
    title: "Loan Default Prediction",
    eyebrow: "Applied ML",
    icon: <Code2 size={18} />,
    summary:
      "Developed a classification model to predict loan default risk from structured financial data.",
    tech: ["Python", "Classification", "Data Processing"],
    highlights: [
      "Built end-to-end supervised learning pipeline",
      "Handled feature preprocessing and imbalance considerations",
      "Mapped model outputs to real decision-making use cases",
    ],
    href: "https://github.com/GaeaStorm/Loan-Default-Prediction---ICL",
  },
];

const additionalProjects = [
  {
    title: "React Assessment",
    icon: <Monitor size={18} />,
    summary:
      "Implemented a frontend application using React, focusing on component structure, state management, and UI logic.",
    tech: ["React", "JavaScript", "Frontend"],
    href: "https://github.com/GaeaStorm/gai_sawant-eog-react-assessment",
  },
  {
    title: "COMP421 Lab 3",
    icon: <Cpu size={18} />,
    summary:
      "Applied systems programming concepts in a focused lab environment, reinforcing low-level programming and OS fundamentals.",
    tech: ["C", "Systems Programming"],
    href: "https://github.com/GaeaStorm/COMP421_Lab3",
  },
];

function EngineeringPortfolio() {
  return (
    <div className="engineering-page">
      <section className="engineering-hero">
        <div className="engineering-hero-copy">
          <p className="engineering-kicker">Engineering Portfolio</p>

          <h1>
            <span>Engineering</span> Portfolio
          </h1>

          <p className="engineering-description">
            This page is a technical supplement to GitHub: selected projects that
            show systems work, applied machine learning, and end-to-end builds.
            Each entry is included for implementation depth rather than product
            narrative.
          </p>
        </div>

        {/* <aside className="engineering-summary-card" aria-label="Portfolio summary">
          <div className="engineering-summary-top">
            <p className="engineering-summary-label">What this page shows</p>
            <div className="engineering-summary-line" />
          </div>

          <div className="engineering-summary-blocks">
            <div className="engineering-summary-item">
              <div className="engineering-summary-icon">
                <Cpu size={18} />
              </div>
              <div>
                <p className="engineering-summary-item-label">Systems</p>
                <p className="engineering-summary-item-value">
                  Kernel and low-level programming work
                </p>
              </div>
            </div>

            <div className="engineering-summary-item">
              <div className="engineering-summary-icon">
                <BrainCircuit size={18} />
              </div>
              <div>
                <p className="engineering-summary-item-label">AI / ML</p>
                <p className="engineering-summary-item-value">
                  Applied machine learning and AI-integrated workflows
                </p>
              </div>
            </div>

            <div className="engineering-summary-item">
              <div className="engineering-summary-icon">
                <Code2 size={18} />
              </div>
              <div>
                <p className="engineering-summary-item-label">Implementation</p>
                <p className="engineering-summary-item-value">
                  Repos selected for technical proof and code depth
                </p>
              </div>
            </div>
          </div>
        </aside> */}
      </section>

      <section className="engineering-section">
        <div className="section-header">
          <p className="section-kicker">Selected Projects</p>
          {/* <h2>Core engineering work</h2>
          <p>
            These are the strongest public code samples for systems, machine
            learning, and applied AI.
          </p> */}
        </div>

        <div className="featured-projects-grid">
          {featuredProjects.map((project) => (
            <article className="project-card featured-card" key={project.title}>
              <div className="project-card-top">
                <div className="project-icon">{project.icon}</div>
                <p className="project-eyebrow">{project.eyebrow}</p>
              </div>

              <h3>{project.title}</h3>
              <p className="project-summary">{project.summary}</p>

              <div className="project-tech">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <ul className="project-highlights">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <a
                className="project-link"
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                View code
                <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="engineering-section">
        <div className="section-header">
          <p className="section-kicker">Other Codebases</p>
          {/* <h2>Supplementary code samples</h2>
          <p>
            Smaller or more scoped projects that add frontend and systems breadth.
          </p> */}
        </div>

        <div className="additional-grid">
          {additionalProjects.map((project) => (
            <article className="project-card exploration-card" key={project.title}>
              <div className="project-card-top">
                <div className="project-icon">{project.icon}</div>
              </div>

              <h3>{project.title}</h3>
              <p className="project-summary">{project.summary}</p>

              <div className="project-tech compact-tech">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <a
                className="project-link"
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                View code
                <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default EngineeringPortfolio;