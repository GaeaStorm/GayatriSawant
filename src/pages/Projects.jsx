import {
  ArrowUpRight,
  BriefcaseBusiness,
  Sparkles,
  Cpu,
  Stethoscope,
  Building2,
  BrainCircuit,
  Code2,
} from "lucide-react";
import { useEffect, useState } from "react";
import "./Projects.css";
import "../index.css";

const featuredProjects = [
  {
    title: "Launching and Scaling a New VM Platform (E4 Dense)",
    eyebrow: "Oracle Cloud Infrastructure",
    icon: <BriefcaseBusiness size={18} />,
    summary:
      "Led development and onboarding of a new VM platform (Intel E4 Dense), combining platform launch, operational system design, and cross-team coordination to deliver a revenue-generating product.",
    bullets: [
      "Led a team of 3 engineers to develop and launch a new VM offering for a key customer",
      "Designed guardrails, automation, and onboarding processes that became the standard for future platform rollouts",
      "Built internal tooling to reduce errors in custom VM creation and improve reliability across deployments",
      "Partnered with infrastructure teams and negotiated ownership of cross-team dependencies to ensure timely delivery",
    ],
    impact:
      "Impact: ~$8M in new revenue, significantly improved onboarding reliability, and long-term process adoption across the team",
    tags: [
      "Product Launch",
      "Distributed Systems",
      "Leadership",
      "Operational Design",
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
    impact:
      "Impact: 50% faster account opening and a smoother UHNI client experience",
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
    impact:
      "Impact: ~1 month faster onboarding and lower cross-team delivery friction",
    tags: [
      "Systems Thinking",
      "Infrastructure",
      "Cross-functional Leadership",
      "Product Acceleration",
    ],
  },
];

const explorations = [
  {
    title: "L’Oréal Brandstorm 2026 · Scent in Motion",
    icon: <Sparkles size={18} />,
    description:
      "Developed a luxury fragrance concept for YSL Beauty centered on modular scent customization. The concept combined a couture base, interchangeable layering capsules, and an AI mood translator, with a phased rollout, sustainability rationale, and clear commercial KPIs.",
    tags: [
      "Consumer Product Strategy",
      "Go-to-Market",
      "Luxury",
      "AI Personalization",
    ],
    primaryLinkType: "external",
    // primaryLinkLabel: "View presentation",
    // presentationUrl: `${import.meta.env.BASE_URL}Loreal.pdf`, 
    primaryLinkLabel: "View concept website",
    href: "https://gaeastorm.github.io/ScentInMotion/",
  },
  {
    title: "ToyCycle · Sustainable 3D-Printed Toy System",
    icon: <Sparkles size={18} />,
    description:
      "Designed and prototyped a circular toy system using biodegradable, 3D-printed materials for children aged 1–3. The concept addresses the short lifecycle and environmental impact of toys by combining sustainable materials, modular product design, and a reuse/compost model.",
    tags: [
      "Product Design",
      "Sustainability",
      "Hardware + Software Thinking",
      "Go-to-Market",
    ],
    primaryLinkType: "modal",
    primaryLinkLabel: "View presentation",
    presentationUrl: `${import.meta.env.BASE_URL}ToyCycle.pdf`,
  },
  {
    title: "Slack Notification Prioritization PRD",
    icon: <BrainCircuit size={18} />,
    description:
      "Built a product requirements document for a Slack feature designed to help in-office and hybrid users prioritize urgent messages. The work included user research, TAM and opportunity sizing, MVP requirements, experiment design, rollout planning, and monetization logic for enterprise users.",
    tags: [
      "Product Management",
      "PRD",
      "TAM Sizing",
      "Experiment Design",
    ],
    primaryLinkType: "modal",
    primaryLinkLabel: "View document",
    presentationUrl: `${import.meta.env.BASE_URL}Slack.pdf`,
  },
  {
    title: "Dexcom Service Management for Social Impact",
    icon: <Stethoscope size={18} />,
    description:
      "Analyzed Dexcom as a service platform through the lens of service strategy, customer journey design, social impact, and operational scaling. The project focused on how access, reliability, and service design could expand both health outcomes and long-term value capture.",
    tags: [
      "Service Strategy",
      "Healthcare",
      "Social Impact",
      "Customer Journey",
    ],
    primaryLinkType: "modal",
    primaryLinkLabel: "View presentation",
    presentationUrl: `${import.meta.env.BASE_URL}Dexcom.pdf`,
  },
  {
    title: "Food Detection + Recipe Generation",
    icon: <Code2 size={18} />,
    description:
      "Built an AI-powered concept that identifies food items in a fridge and recommends recipes using the OpenAI API. I’d position this as an early product prototype focused on user utility, AI workflow design, and practical consumer experience.",
    tags: [
      "AI Product Prototype",
      "Consumer Utility",
      "OpenAI API",
      "Applied ML",
    ],
    primaryLinkType: "external",
    primaryLinkLabel: "View GitHub repo",
    href: "https://github.com/GaeaStorm/FoodDetection_RecipeGen",
  },
];

function Projects() {
  const [activePresentation, setActivePresentation] = useState(null);

  useEffect(() => {
    if (activePresentation) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => document.body.classList.remove("modal-open");
  }, [activePresentation]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActivePresentation(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

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
          <p className="section-kicker">Complete List</p>
          <p>
            Additional product work across consumer strategy, product
            management, service design, and AI prototyping.
          </p>
        </div>

        <div className="explorations-grid">
          {explorations.map((project) => (
            <article
              className="project-card exploration-card"
              key={project.title}
            >
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

              <div className="project-links">
                {project.primaryLinkType === "modal" ? (
                  <button
                    type="button"
                    className="project-link project-link-button"
                    onClick={() => setActivePresentation(project)}
                  >
                    {project.primaryLinkLabel}
                    <ArrowUpRight size={16} />
                  </button>
                ) : (
                  <a
                    className="project-link"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.primaryLinkLabel}
                    <ArrowUpRight size={16} />
                  </a>
                )}

                {project.secondaryHref && (
                  <a
                    className="project-link secondary-link"
                    href={project.secondaryHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.secondaryLinkLabel}
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {activePresentation && (
        <div
          className="presentation-modal"
          onClick={() => setActivePresentation(null)}
        >
          <div
            className="presentation-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="presentation-modal-header">
              <h2>{activePresentation.title}</h2>

              <div className="presentation-modal-actions">
                <a
                  href={activePresentation.presentationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="presentation-link"
                >
                  Open in new tab
                </a>

                <button
                  type="button"
                  className="presentation-close"
                  onClick={() => setActivePresentation(null)}
                  aria-label="Close presentation modal"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="presentation-modal-body">
              <iframe
                src={activePresentation.presentationUrl}
                title={activePresentation.title}
                className="presentation-frame"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;