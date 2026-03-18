import {
  ArrowUpRight,
  BriefcaseBusiness,
  Sparkles,
  Cpu,
  Stethoscope,
  Building2,
  Gamepad2,
  BrainCircuit,
  Code2,
} from "lucide-react";
import "./Projects.css";
import '../index.css';

const featuredProjects = [
  {
    title: "Scaling Virtual Machine Onboarding on Cloud",
    eyebrow: "Oracle Cloud Infrastructure",
    icon: <Cpu size={18} />,
    summary:
      "Reduced onboarding time by about one month by redesigning a cross-team provisioning workflow and replacing manual dependencies with a more scalable API-driven approach.",
    bullets: [
      "Identified a recurring bottleneck in VM onboarding caused by hardcoded network configuration handoffs",
      "Built alignment across teams by reframing the work around shared incentives and reduced long-term overhead",
      "Led implementation with partner-team guidance and helped establish a new standard model for future onboarding",
    ],
    impact: "Impact: ~1 month faster onboarding and lower cross-team delivery friction",
    tags: [
      "Systems Thinking",
      "Infrastructure",
      "Cross-functional Leadership",
      "Product Acceleration",
    ],
  },
  {
    title: "Redesigning Wealth Management Client Onboarding",
    eyebrow: "Julius Baer · CEO Office",
    icon: <Building2 size={18} />,
    summary:
      "Reduced account opening time from two months to about three weeks by diagnosing coordination gaps across five divisions and redesigning the onboarding model.",
    bullets: [
      "Shadowed teams across operations, compliance, legal, and wealth management to understand the process end to end",
      "Mapped bottlenecks, fragmented ownership, and communication breakdowns affecting both employees and clients",
      "Proposed a more centralized onboarding structure and client-facing materials to reduce delay and drop-off",
    ],
    impact: "Impact: 50% faster account opening and a smoother UHNI client experience",
    tags: [
      "Strategy",
      "Operations",
      "Customer Experience",
      "Org Design",
    ],
  },
  {
    title: "Understanding Patient Choice in Cardiac Care",
    eyebrow: "Yale Center for Customer Insights · Northwell Health",
    icon: <Stethoscope size={18} />,
    summary:
      "Built a mixed-methods research program to understand how patients choose cardiac care providers and what messaging and experience levers influence selection.",
    bullets: [
      "Designed research spanning 20 interviews, online ethnography, and a 1060-respondent survey",
      "Tested behavioral hypotheses through A/B experiments across patient segments",
      "Synthesized findings into a growth roadmap focused on access, trust, and care coordination",
    ],
    impact: "Impact: up to +22 percentage point lift in provider selection intent",
    tags: [
      "Consumer Insights",
      "Experimentation",
      "Data Analysis",
      "Growth Strategy",
    ],
  },
  {
    title: "Optimizing Cloud Infrastructure Utilization",
    eyebrow: "Oracle Cloud Infrastructure",
    icon: <BriefcaseBusiness size={18} />,
    summary:
      "Worked on infrastructure efficiency improvements that unlocked substantial unused capacity and reduced capital requirements.",
    bullets: [
      "Collaborated on a project to decouple CPU and memory reservations across cloud infrastructure",
      "Improved flexibility in how capacity could be allocated and utilized",
      "Supported a more efficient operating model for internal infrastructure resources",
    ],
    impact: "Impact: 52k CPUs freed and an estimated $26M in capital savings",
    tags: ["Cloud Systems", "Resource Optimization", "Operational Efficiency", "Scale"],
  },
];

const explorations = [
  {
    title: "Indie Computer Game",
    icon: <Gamepad2 size={18} />,
    description:
      "A standalone game project that showcases my interest in systems, interaction design, and building things end to end outside of work.",
    tags: ["Game Design", "Creative Build", "Systems"],
    linkLabel: "Add link later",
    href: "#",
  },
  {
    title: "NLP Question Generation",
    icon: <BrainCircuit size={18} />,
    description:
      "Built seq2seq and textual analysis workflows for question and keyword generation in an education-focused NLP setting.",
    tags: ["NLP", "Machine Learning", "Python"],
    linkLabel: "Add link later",
    href: "#",
  },
  {
    title: "Rice Apps Projects",
    icon: <Code2 size={18} />,
    description:
      "Worked on student-facing products including an elections website and BeakSpeak, an anonymous campus discussion app.",
    tags: ["Full Stack", "Product Build", "Student Tech"],
    linkLabel: "Add link later",
    href: "#",
  },
];

function Projects() {
  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div className="projects-hero-copy">
          <p className="projects-kicker">Selected Work</p>

          <h1>
            <span>Strategy</span> Projects
          </h1>

          <p className="projects-description">
            I am most energized by ambiguous, cross-functional problems where
            user needs, operational complexity, and technical systems intersect.
            These projects reflect the work I am proudest of: improving how
            products are delivered, how decisions are made, and how experiences
            are designed.
          </p>
        </div>
      </section>

      <section className="projects-section">
        <div className="section-header">
          <p className="section-kicker">Featured Projects</p>
          <h2>Selected work</h2>
          <p>
            A few projects that best reflect how I approach systems, users, and
            execution.
          </p>
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

              <ul className="project-bullets">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <p className="project-impact">{project.impact}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-section explorations-section">
        <div className="section-header">
          <p className="section-kicker">Explorations</p>
          <h2>Other builds and experiments</h2>
          <p>
            A broader set of technical and creative work, including side
            projects, ML experiments, and things I have built outside of formal
            roles.
          </p>
        </div>

        <div className="explorations-grid">
          {explorations.map((project) => (
            <article className="project-card exploration-card" key={project.title}>
              <div className="project-card-top">
                <div className="project-icon">{project.icon}</div>
              </div>

              <h3>{project.title}</h3>
              <p className="project-summary">{project.description}</p>

              <div className="project-tags compact-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <a className="project-link" href={project.href}>
                {project.linkLabel}
                <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;